import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SA1Entity } from './entities/sa1.entity';
import { SA2Entity } from './entities/sa2.entity';
import { SB1Entity } from './entities/sb1.entity';
import { SA1Schema } from './dto/sa1.schema';
import { SA2Schema } from './dto/sa2.schema';
import { SB1Schema } from './dto/sb1.schema';

@Injectable()
export class MasterDataService {
  constructor(
    @InjectRepository(SA1Entity)
    private sa1Repo: Repository<SA1Entity>,
    @InjectRepository(SA2Entity)
    private sa2Repo: Repository<SA2Entity>,
    @InjectRepository(SB1Entity)
    private sb1Repo: Repository<SB1Entity>,
  ) {}

  async createSA1(data: any) {
    const validated = SA1Schema.parse(data);
    const entity = this.sa1Repo.create(validated);
    return await this.sa1Repo.save(entity);
  }

  async findAllSA1() {
    return await this.sa1Repo.find();
  }

  async findOneSA1(codigo: string) {
    return await this.sa1Repo.findOne({ where: { codigo } });
  }

  async updateSA1(codigo: string, data: any) {
    await this.sa1Repo.update({ codigo }, data);
    return this.findOneSA1(codigo);
  }

  async removeSA1(codigo: string) {
    const item = await this.findOneSA1(codigo);
    if (item) return await this.sa1Repo.remove(item);
  }

  async createSA2(data: any) {
    const validated = SA2Schema.parse(data);
    const entity = this.sa2Repo.create(validated);
    return await this.sa2Repo.save(entity);
  }

  async findAllSA2() {
    return await this.sa2Repo.find();
  }

  async findOneSA2(codigo: string) {
    return await this.sa2Repo.findOne({ where: { codigo } });
  }

  async updateSA2(codigo: string, data: any) {
    await this.sa2Repo.update({ codigo }, data);
    return this.findOneSA2(codigo);
  }

  async removeSA2(codigo: string) {
    const item = await this.findOneSA2(codigo);
    if (item) return await this.sa2Repo.remove(item);
  }

  async createSB1(data: any) {
    const validated = SB1Schema.parse(data);
    const entity = this.sb1Repo.create(validated);
    return await this.sb1Repo.save(entity);
  }

  async findAllSB1() {
    return await this.sb1Repo.find();
  }

  async findOneSB1(codigo: string) {
    return await this.sb1Repo.findOne({ where: { codigo } });
  }

  async updateSB1(codigo: string, data: any) {
    await this.sb1Repo.update({ codigo }, data);
    return this.findOneSB1(codigo);
  }

  async removeSB1(codigo: string) {
    const item = await this.findOneSB1(codigo);
    if (item) return await this.sb1Repo.remove(item);
  }
}