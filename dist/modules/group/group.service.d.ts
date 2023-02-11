import { Repository } from 'typeorm';
import { Group } from '../../entities';
import { IGroup } from '../../domain/group';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
export declare class GroupService {
    private readonly groupRepository;
    constructor(groupRepository: Repository<Group>);
    find(id: number): Promise<IGroup | null>;
    create(createGroupDto: CreateGroupDto): Promise<boolean>;
    update(id: number, updateGroupDto: UpdateGroupDto): Promise<boolean>;
}
