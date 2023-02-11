import { CreateMarkDto } from './dto/create-mark.dto';
import { UpdateMarkDto } from './dto/update-mark.dto';
export declare class MarkService {
    create(createMarkDto: CreateMarkDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMarkDto: UpdateMarkDto): string;
    remove(id: number): string;
}
