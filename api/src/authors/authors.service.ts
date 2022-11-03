import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './authors.entity';
import { AuthorsRepository } from './authors.repository';

@Injectable()
export class AuthorsService {

    constructor(
        @InjectRepository(AuthorsRepository)
        private authorsRepository: AuthorsRepository,
    ) {}
    getAllAuthors(): Promise<Author[]> {
        return  this.authorsRepository.getAllAuthors();
    }
}
