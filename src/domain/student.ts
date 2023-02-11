import { IGroup } from './group';
import { IMark } from './mark';

export interface IStudent {
  id: number;

  firstName: string;

  secondName: string;

  comment: string | null;

  group: IGroup;

  marks: IMark[] | null;
}
