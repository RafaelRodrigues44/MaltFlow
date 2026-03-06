import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SF1Entity } from './entities/sF1.entity';
import { SF2Entity } from './entities/sf2.entity';
import { SF1Schema } from './dto/sF1.schema';
import { SF2Schema } from './dto/sf2.schema';

@Injectable()
export class TaxFiscalService {
  constructor(
    @InjectRepository(SF1Entity)
    private sf1Repo: Repository<SF1Entity>,
    @InjectRepository(SF2Entity)
    private sf2Repo: Repository<SF2Entity>,
  ) {}

  async createSF1(data: any) {
    const validated = SF1Schema.parse(data);
    const invoice = this.sf1Repo.create(validated);
    return await this.sf1Repo.save(invoice);
  }

  async findAllSF1() {
    return await this.sf1Repo.find();
  }

  async findOneSF1(numero: string) {
    return await this.sf1Repo.findOne({ where: { numero } });
  }

  async updateSF1(numero: string, data: any) {
    await this.sf1Repo.update({ numero }, data);
    return this.findOneSF1(numero);
  }

  async removeSF1(numero: string) {
    const invoice = await this.findOneSF1(numero);
    if (invoice) return await this.sf1Repo.remove(invoice);
  }

  async createSF2(data: any) {
    const validated = SF2Schema.parse(data);
    const invoice = this.sf2Repo.create(validated);
    return await this.sf2Repo.save(invoice);
  }

  async findAllSF2() {
    return await this.sf2Repo.find();
  }

  async findOneSF2(numero: string) {
    return await this.sf2Repo.findOne({ where: { numero } });
  }

  async updateSF2(numero: string, data: any) {
    await this.sf2Repo.update({ numero }, data);
    return this.findOneSF2(numero);
  }

  async removeSF2(numero: string) {
    const invoice = await this.findOneSF2(numero);
    if (invoice) return await this.sf2Repo.remove(invoice);
  }
}