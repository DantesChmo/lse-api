import { Group } from '../entities';

export class GroupFixtures extends Group {
  constructor(params: Partial<Group>) {
    super();

    if (params.id !== undefined) {
      this.id = params.id;
    }
    if (params.name !== undefined) {
      this.id = params.id;
    }
  }
}
