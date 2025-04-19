import { BaseEntity } from './base.types';
import { FormFieldEntity } from './formField.types';
import { TemplateEntity } from './template.types';
import { CategoryEntity } from './category.types';

export interface NoteEntity extends BaseEntity {
  categoryId: CategoryEntity['id'];
  template: TemplateEntity['id'] | null;
  formFields: readonly FormFieldEntity['id'][];
}

export interface NoteEntityAugmented extends NoteEntity {
  categoryName: string;
}
