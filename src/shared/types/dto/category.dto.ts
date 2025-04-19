import { CategoryEntity } from '../category.types';
import { BaseDTO } from './base.dto';

export type CreateCategoryDTO = BaseDTO & Omit<CategoryEntity, 'categoryId'>;
