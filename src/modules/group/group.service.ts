import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from '../../entities';
import { IGroup } from '../../domain/group';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async find(id: number): Promise<IGroup | null> {
    try {
      const group = await this.groupRepository.findOne(id);

      return group ?? null;
    } catch (error) {
      return null;
    }
  }

  async create(createGroupDto: CreateGroupDto): Promise<boolean> {
    try {
      const group = new Group();

      group.name = createGroupDto.name;

      await this.groupRepository.save(group);

      return true;
    } catch (error) {
      return false;
    }
  }

  async update(id: number, updateGroupDto: UpdateGroupDto): Promise<boolean> {
    throw new NotImplementedException();
  }
}
