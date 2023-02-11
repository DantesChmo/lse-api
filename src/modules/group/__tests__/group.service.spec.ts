import { Test, TestingModule } from '@nestjs/testing';
import { groupFixture } from '../../../fixtures/group';
import { DbModule } from '../../db';
import { GroupService } from '../group.service';
import { GroupModule } from '../group.module';

describe('GroupService', () => {
  let service: GroupService;

  afterEach(async () => {
    await groupFixture.flush();
    await groupFixture.closeConnection();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DbModule, GroupModule],
      providers: [GroupService],
    }).compile();

    service = module.get<GroupService>(GroupService);

    await groupFixture.populate();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a group', async () => {
    const group = await service.find(groupFixture.initialGroup.id);

    expect(group.name).toBe(groupFixture.initialGroup.name);
    expect(group.id).toBe(groupFixture.initialGroup.id);
    expect(group.schedules).toBeUndefined();
    expect(group.students).toBeUndefined();
  });

  it('should create a group', async () => {
    const isGroupCreated = await service.create(groupFixture.testGroup);

    expect(isGroupCreated).toBeTruthy();

    const createdGroup = await groupFixture.findTestGroup();

    expect(createdGroup).toBeDefined();
    expect(createdGroup.name).toBe(groupFixture.testGroup.name);
  });

  it.skip('should update the current group by', async () => {
    const { id, ...groupForUpdate } = groupFixture.testGroup;

    const isGroupUpdated = await service.update(
      groupFixture.initialGroup.id,
      groupForUpdate,
    );

    expect(isGroupUpdated).toBeTruthy();

    const updatedGroup = await groupFixture.findInitialGroup();

    expect(updatedGroup).toBeDefined();
    expect(updatedGroup.id).toBe(groupFixture.initialGroup.id);
    expect(updatedGroup.name).toBe(groupForUpdate.name);
  });
});
