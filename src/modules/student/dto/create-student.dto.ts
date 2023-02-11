import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, Min, MinLength } from 'class-validator';
import { IStudent } from '../../../domain/student';

export class CreateStudentDto
  implements Omit<IStudent, 'group' | 'id' | 'marks'>
{
  @IsInt()
  @Min(0)
  @ApiProperty({
    description: 'Group id for student',
    minimum: 0,
  })
  groupId: number;

  @IsString()
  @MinLength(2)
  @ApiProperty({
    description: "User's first name",
    minLength: 2,
  })
  firstName: string;

  @IsString()
  @MinLength(2)
  @ApiProperty({
    description: "Users's second name",
    minLength: 2,
  })
  secondName: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    description: "Comment for user's ability",
    nullable: true,
    default: null,
  })
  comment: string | null;
}
