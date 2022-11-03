import { Controller, Get, Query } from '@nestjs/common';
import { Author } from './authors.entity';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {

    constructor(private authorsService: AuthorsService) { }

    @Get()
    getAllAuthors(): Promise<Author[]> {
        console.log('getAllAuthors');
        return this.authorsService.getAllAuthors();
    }
}
