import { MarkService } from './mark.service';
import { CreateMarkDto } from './dto/create-mark.dto';
import { UpdateMarkDto } from './dto/update-mark.dto';
export declare class MarkController {
    private readonly markService;
    constructor(markService: MarkService);
    create(createMarkDto: CreateMarkDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMarkDto: UpdateMarkDto): string;
    remove(id: string): string;
}
