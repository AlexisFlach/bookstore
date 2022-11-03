import { CustomRepository } from 'src/database/typeorm-ex.decorator';
import { Repository} from 'typeorm';
import { Author } from './authors.entity';

@CustomRepository(Author)
export class AuthorsRepository extends Repository<Author> {
    async getAllAuthors(): Promise<Author[]> {
        const query = this.createQueryBuilder('author');
    return await query.getMany();
    }
}