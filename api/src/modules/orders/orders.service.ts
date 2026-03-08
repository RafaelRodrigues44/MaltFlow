import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { SC5Entity } from './entities/sc5.entity';
import { SC6Entity } from './entities/sc6.entity';
import { CreateOrderDto } from './dto/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(SC5Entity)
    private readonly sc5Repo: Repository<SC5Entity>,
    @InjectRepository(SC6Entity)
    private readonly sc6Repo: Repository<SC6Entity>,
  ) {}

  async create(data: CreateOrderDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const pedido = this.sc5Repo.create({
        numeroPedido: data.numeroPedido,
        clienteCodigo: data.clienteCodigo,
        valorTotal: data.valorTotal,
        status: '1'
      });
      const savedPedido = await queryRunner.manager.save(pedido);

      const itens = data.itens.map(item => this.sc6Repo.create({
        ...item,
        pedido: savedPedido
      }));
      await queryRunner.manager.save(itens);

      await queryRunner.commitTransaction();
      return this.findOne(savedPedido.id);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException('Erro ao integrar pedido: ' + err.message);
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    return await this.sc5Repo.find({
      relations: ['itens', 'itens.produto'],
      order: { dataEmissao: 'DESC' }
    });
  }

  async findOne(id: number) {
    const pedido = await this.sc5Repo.findOne({
      where: { id },
      relations: ['itens', 'itens.produto']
    });
    if (!pedido) throw new NotFoundException('Pedido não localizado');
    return pedido;
  }

  async updateStatus(id: number, status: string) {
    const pedido = await this.findOne(id);
    pedido.status = status;
    return await this.sc5Repo.save(pedido);
  }

  async remove(id: number) {
    const pedido = await this.findOne(id);
    return await this.sc5Repo.remove(pedido);
  }
}