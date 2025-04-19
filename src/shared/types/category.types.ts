import { BaseEntity } from './base.types';
import { FormFieldEntity } from './formField.types';
import { TemplateEntity } from './template.types';

export interface ICategory {
  categoryName: string;
  categoryId: string;
  createdDate: string;
  updatedDate: string;
}

export type TCreateCategoryDto = Omit<
  ICategory,
  'categoryId' | 'createdDate' | 'updatedDate'
>;

export interface CategoryEntity extends BaseEntity {
  template: TemplateEntity['id'] | null;
  formFields: readonly FormFieldEntity['id'][];
}
