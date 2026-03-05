import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SE1Entity } from './entities/se1.entity';
import { SE2Entity } from './entities/se2.entity';
import { SE1Schema } from './dto/se1.schema';
import { SE2Schema } from './dto/se2.schema';

@Injectable()
export class FinancialManagementService {
  constructor(
    @InjectRepository(SE1Entity)
    private se1Repo: Repository<SE1Entity>,
    @InjectRepository(SE2Entity)
    private se2Repo: Repository<SE2Entity>,
  ) {}

  async createSE1(data: any) {
    const validated = SE1Schema.parse(data);
    const title = this.se1Repo.create(validated);
    return await this.se1Repo.save(title);
  }

  async findAllSE1() {
    return await this.se1Repo.find({ relations: ['cliente'] });
  }

  async findOneSE1(numero: string) {
    return await this.se1Repo.findOne({ 
      where: { numero },
      relations: ['cliente'] 
    });
  }

  async updateSE1(numero: string, data: any) {
    await this.se1Repo.update({ numero }, data);
    return this.findOneSE1(numero);
  }

  async removeSE1(numero: string) {
    const title = await this.findOneSE1(numero);
    if (title) {
      return await this.se1Repo.remove(title);
    }
  }

  async createSE2(data: any) {
    const validated = SE2Schema.parse(data);
    const title = this.se2Repo.create(validated);
    return await this.se2Repo.save(title);
  }

  async findAllSE2() {
    return await this.se2Repo.find({ relations: ['fornecedor'] });
  }

  async findOneSE2(numero: string) {
    return await this.se2Repo.findOne({ 
      where: { numero },
      relations: ['fornecedor'] 
    });
  }

  async updateSE2(numero: string, data: any) {
    await this.se2Repo.update({ numero }, data);
    return this.findOneSE2(numero);
  }

  async removeSE2(numero: string) {
    const title = await this.findOneSE2(numero);
    if (title) {
      return await this.se2Repo.remove(title);
    }
  }
}