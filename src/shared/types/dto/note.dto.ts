import { NoteEntity } from '../note.types';
import { BaseDTO } from './base.dto';

export type CreateNoteDto = BaseDTO & NoteEntity;
