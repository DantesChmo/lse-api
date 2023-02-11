import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  ParseIntPipe,
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
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { validate } from 'class-validator';
import { GroupDto } from './dto/group.dto';

@ApiTags('Group')
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get(':id')
  @ApiOkResponse({
    description: 'The group has been found',
    type: GroupDto,
  })
  @ApiNotFoundResponse({
    description: 'Group with current id was not found',
  })
  async find(@Param('id', ParseIntPipe) id: number): Promise<GroupDto> {
    const group = await this.groupService.find(id);

    if (group === null) {
      throw new NotFoundException({
        message: 'Group with current id was not found',
      });
    }

    return group;
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The group has been successfully created',
  })
  @ApiBadRequestResponse({
    description: 'One or more parameters were incorrect',
  })
  async create(@Body() body: CreateGroupDto) {
    const errors = (await validate(body)) ?? [];

    if (errors.length > 0) {
      const errorMessage = Object.values(errors[0].constraints)[0];

      throw new BadRequestException({ message: errorMessage });
    }

    return this.groupService.create(body);
  }

  @Put(':id')
  @ApiOkResponse({
    description: 'The group has been successfully updated',
  })
  @ApiBadRequestResponse({
    description: 'One or more parameters were incorrect',
  })
  @ApiNotFoundResponse({
    description: 'The requested group was not found',
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateGroupDto,
  ) {
    const errors = (await validate(body)) ?? [];

    if (errors.length > 0) {
      const errorMessage = Object.values(errors[0].constraints)[0];

      throw new BadRequestException({ message: errorMessage });
    }

    const result = await this.groupService.update(id, body);

    if (result === false) {
      throw new NotFoundException({
        message: 'The requested group was not found',
      });
    }

    return result as boolean;
  }
}
