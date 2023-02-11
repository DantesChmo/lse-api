import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
export declare class LessonController {
    private readonly lessonService;
    constructor(lessonService: LessonService);
    create(createLessonDto: CreateLessonDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLessonDto: UpdateLessonDto): string;
    remove(id: string): string;
}
