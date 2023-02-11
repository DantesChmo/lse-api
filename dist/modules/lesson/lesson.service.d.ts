import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
export declare class LessonService {
    create(createLessonDto: CreateLessonDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLessonDto: UpdateLessonDto): string;
    remove(id: number): string;
}
