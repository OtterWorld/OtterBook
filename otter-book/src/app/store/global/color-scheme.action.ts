import { Action } from '@ngrx/store';

import { ColorSchema } from '../../shared/color-schema.model'

export const CURRENT_COLORSCHEMA = '[COLORS SCHEMA] New ColorSchema';


export class CurrentColorSchema implements Action {
  readonly type = CURRENT_COLORSCHEMA;

  constructor(public payload: ColorSchema) {}
}

export type ColorSchemaAction = CurrentColorSchema