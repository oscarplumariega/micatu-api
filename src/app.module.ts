import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsModule } from './ads/ads.module';
import { NestFactory } from '@nestjs/core';

@Module({
  imports: [AdsModule, AuthModule, UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'micatu',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    })
  ]
})

export class AppModule {}
