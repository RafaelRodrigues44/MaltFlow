import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { SD2Entity, SalesOrderDto } from './entities/sd2.entity';
import { InventoryService } from '../inventory/inventory.service';
import { TaxFiscalService } from '../tax-fiscal/tax-fiscal.service';
import { FinancialManagementService } from '../financial-management/financial-management.service';

@Injectable()
export class SalesService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(SD2Entity)
    private readonly sd2Repo: Repository<SD2Entity>,
    private readonly inventoryService: InventoryService,
    private readonly taxService: TaxFiscalService,
    private readonly financialService: FinancialManagementService,
  ) {}

  async processarVenda(dados: SalesOrderDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const estoque = await this.inventoryService.baixarEstoque(dados.produtoCodigo, dados.quantidade);
      const valorTotal = dados.quantidade * dados.valorUnitario;

      const nota = await this.taxService.createSF2({
        cliente: dados.clienteCodigo,
        valorTotal: valorTotal,
      });

      const itemNota = this.sd2Repo.create({
        numeroNota: nota.numero,
        item: '01',
        produtoCodigo: dados.produtoCodigo,
        quantidade: dados.quantidade,
        precoUnitario: dados.valorUnitario,
        valorTotal: valorTotal,
      });
      await queryRunner.manager.save(itemNota);

      await this.financialService.createSE1({
        clienteCodigo: dados.clienteCodigo,
        valor: valorTotal,
        numero: nota.numero,
        prefixo: 'NF',
        tipo: 'NF',
        parcela: '1'
      });

      await queryRunner.commitTransaction();

      return {
        mensagem: 'Venda processada com sucesso',
        documento: nota.numero,
        saldoRestante: estoque.quantidadeAtual,
      };
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException('Falha ao processar fluxo de venda: ' + err.message);
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    return await this.sd2Repo.find({ relations: ['nota', 'produto'] });
  }

  async findOne(id: number) {
    const item = await this.sd2Repo.findOne({ 
      where: { id }, 
      relations: ['nota', 'produto'] 
    });
    if (!item) throw new NotFoundException('Registro de venda não encontrado');
    return item;
  }

  async update(id: number, data: any) {
    await this.sd2Repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    return await this.sd2Repo.remove(item);
  }
}