import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsController } from './authors.controller';
import { AuthorsRepository } from './authors.repository';
import { AuthorsService } from './authors.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorsRepository])],
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule {}
