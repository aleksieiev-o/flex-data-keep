import { BaseEntity } from './base.types';
import { FormFieldEntity } from './formField.types';

export interface TemplateEntity extends BaseEntity {
  formFields: readonly FormFieldEntity['id'][];
}
