import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Put,
  NotAcceptableException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { validate } from 'class-validator';

@ApiTags('Student')
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Student has been created successfully',
  })
  @ApiBadRequestResponse({
    description: 'One or more parameters were incorrect',
  })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The student has been found',
  })
  @ApiNotFoundResponse({
    description: 'The student with current id was not found',
  })
  async find(@Param('id', ParseIntPipe) id: number) {
    const student = await this.studentService.find(id);

    if (student === null) {
      throw new NotAcceptableException({
        message: 'The student with current id was not found',
      });
    }

    return student;
  }

  @Put(':id')
  @ApiOkResponse({
    description: 'The student has been updated',
  })
  @ApiBadRequestResponse({
    description: 'The student with current id was not found',
  })
  @ApiNotFoundResponse({
    description: 'The student with current id was not found',
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    const errors = await validate(updateStudentDto);

    if (errors.length > 0) {
      const message = Object.values(errors[0].constraints)[0];
      throw new BadRequestException({ message });
    }

    const result = await this.studentService.update(id, updateStudentDto);

    if (!result) {
      throw new NotFoundException({
        message: 'The student with current id was not found',
      });
    }

    return result as boolean;
  }
}
