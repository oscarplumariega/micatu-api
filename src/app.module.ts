import { Module } from '@nestjs/common';
import { SalesModule } from './sales/sales.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [SalesModule, AuthModule, UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'XXXX',
      password: 'XXXX',
      database: 'XXXXXX',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    })
  ]
})
export class AppModule {}
