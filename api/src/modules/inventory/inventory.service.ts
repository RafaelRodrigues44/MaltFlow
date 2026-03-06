import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SB2Entity } from './entities/sb2.entity';
import { SB2Schema } from './dto/sb2.schema';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(SB2Entity)
    private readonly sb2Repo: Repository<SB2Entity>,
  ) {}

  async findAll() {
    return await this.sb2Repo.find({ relations: ['produto'] });
  }

  async findByProduto(produtoCodigo: string, local: string = '01') {
    const estoque = await this.sb2Repo.findOne({ 
      where: { produtoCodigo, local },
      relations: ['produto'] 
    });
    if (!estoque) throw new NotFoundException('Saldo não encontrado para este produto/local');
    return estoque;
  }

  async remove(produtoCodigo: string, local: string = '01') {
    const estoque = await this.findByProduto(produtoCodigo, local);
    return await this.sb2Repo.remove(estoque);
  }

  async baixarEstoque(produtoCodigo: string, quantidade: number) {
    const estoque = await this.findByProduto(produtoCodigo);
    
    if (estoque.quantidadeAtual < quantidade) {
      throw new BadRequestException('Saldo insuficiente para realizar a venda');
    }

    estoque.quantidadeAtual = Number(estoque.quantidadeAtual) - quantidade;
    await this.sb2Repo.save(estoque);

    if (estoque.quantidadeAtual < estoque.estoqueMinimo) {
      await this.dispararGatilhoCompra(estoque);
    }

    return estoque;
  }

  private async dispararGatilhoCompra(estoque: SB2Entity) {
    console.log(`[TRIGGER] Produto ${estoque.produtoCodigo} atingiu ponto de pedido!`);
    // Futura integração com o módulo fiscal
  }

  async createOrUpdateBalance(data: any) {
    const validated = SB2Schema.parse(data);
    try {
      const existing = await this.sb2Repo.findOne({ 
        where: { produtoCodigo: validated.produtoCodigo, local: validated.local } 
      });

      if (existing) {
        Object.assign(existing, validated);
        return await this.sb2Repo.save(existing);
      }

      const newBalance = this.sb2Repo.create(validated);
      return await this.sb2Repo.save(newBalance);
    } catch (error) {
      throw new BadRequestException('Erro ao processar saldo de estoque');
    }
  }
}