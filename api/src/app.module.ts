import { Controller, Module } from '@nestjs/common';
import {AuthorsModule} from './authors/authors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { AuthorsRepository } from './authors/authors.repository';
import { AuthorsService } from './authors/authors.service';
import { AuthorsController } from './authors/authors.controller';

@Module({
  imports: [AuthorsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'bookstore',
    autoLoadEntities: true,
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  }),
  TypeOrmExModule.forCustomRepository([AuthorsRepository]),
  
],
controllers: [AuthorsController],
providers: [AuthorsService],
})
export class AppModule {}
