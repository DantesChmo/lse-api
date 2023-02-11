import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { IGroup } from '../../../domain/group';

export class GroupDto implements Pick<IGroup, 'name'> {
  @IsString({ message: 'The name must be a string' })
  @MinLength(3, { message: "The name's length must be more than 3" })
  @ApiProperty({
    description: 'The name of group',
    minLength: 3,
  })
  name: string;
}
