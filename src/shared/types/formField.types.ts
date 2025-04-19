import { BaseEntity } from './base.types';
import { FormFieldTypeEntity } from './formFieldType.types';

export interface FormFieldEntity extends BaseEntity {
  type: FormFieldTypeEntity['id'];
}
