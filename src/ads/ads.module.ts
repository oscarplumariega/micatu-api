import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ad } from './ads.entity';
import { AdsController } from './ads.controller';
import { AdsService } from './ads.service';

@Module({
    imports: [TypeOrmModule.forFeature([Ad])],
    controllers: [AdsController],
    providers: [AdsService]
})
export class AdsModule {}
