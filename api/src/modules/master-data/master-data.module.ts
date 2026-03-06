import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SA1Entity } from './entities/sa1.entity';
import { SA2Entity } from './entities/sa2.entity';
import { SB1Entity } from './entities/sb1.entity';
import { MasterDataService } from './master-data.service';
import { MasterDataController } from './master-data.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([SA1Entity, SA2Entity, SB1Entity]),
  ],
  controllers: [MasterDataController],
  providers: [MasterDataService],
  exports: [MasterDataService],
})
export class MasterDataModule {}