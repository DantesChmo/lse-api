import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupDto } from './dto/group.dto';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    find(id: number): Promise<GroupDto>;
    create(body: CreateGroupDto): Promise<boolean>;
    update(id: number, body: UpdateGroupDto): Promise<boolean>;
}
