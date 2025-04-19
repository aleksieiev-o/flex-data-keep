import { BaseEntity } from '../base.types';

export type BaseDTO = Omit<BaseEntity, 'id' | 'createdDate' | 'updatedDate'>;
