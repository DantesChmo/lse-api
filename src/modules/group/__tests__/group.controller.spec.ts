import { Test, TestingModule } from '@nestjs/testing';
import { IGroup } from 'src/domain/group';
import { groupFixture } from '../../../fixtures/group';
import { CreateGroupDto } from '../dto/create-group.dto';
import { UpdateGroupDto } from '../dto/update-group.dto';
import { GroupController } from '../group.controller';
import { GroupService } from '../group.service';

const mockGroupService: Pick<GroupService, 'create' | 'find' | 'update'> = {
  find: jest.fn(async (id: number) =>
    id === 0 ? null : (groupFixture.initialGroup as IGroup),
  ),
  create: jest.fn(async () => true),
  update: jest.fn(async (id: number) => (id === 0 ? false : true)),
};

describe('GroupController', () => {
  let controller: GroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupController],
      providers: [GroupService],
    })
      .overrideProvider(GroupService)
      .useValue(mockGroupService)
      .compile();

    controller = module.get<GroupController>(GroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find the group', async () => {
    const result = await controller.find(groupFixture.initialGroup.id);
    expect(result).toBe(groupFixture.initialGroup);
  });

  it('should create a group', async () => {
    const result = await controller.create(groupFixture.testGroup);
    expect(result).toBeTruthy();
  });

  it('should update the group', async () => {
    const result = await controller.update(
      groupFixture.initialGroup.id,
      groupFixture.testGroup,
    );
    expect(result).toBeTruthy();
  });

  it('should not create a group with small length of name', async () => {
    const body = new CreateGroupDto();
    body.name = 'te';

    expect(controller.create(body)).rejects.toBeDefined();
  });

  it('should not create a group with small length of name', async () => {
    const body = new UpdateGroupDto();
    body.name = 'te';

    expect(
      controller.update(groupFixture.initialGroup.id, body),
    ).rejects.toBeDefined();
  });

  it('should not find a group with unknown id', async () => {
    expect(controller.find(0)).rejects.toBeDefined();
  });

  it('should not update a group with unknown id', async () => {
    const body = new UpdateGroupDto();

    expect(controller.update(0, body)).rejects.toBeDefined();
  });
});
