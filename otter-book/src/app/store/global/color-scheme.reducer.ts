import { ActionReducerMap } from '@ngrx/store';

import { ColorSchema } from '../../shared/color-schema.model';

import * as ColorSchemaAction from './color-scheme.action';


export interface ColorState {
  colorSchema: ColorSchema;
}

const initialState: ColorState = {
  colorSchema: new ColorSchema('purple', 'category1'),
  
};
export function colorSchemeReducer(
  state: ColorState = initialState,
  action: ColorSchemaAction.CurrentColorSchema
) {
  switch (action.type) {
    case ColorSchemaAction.CURRENT_COLORSCHEMA:
      return {
        ...state,
        category: [state.colorSchema, action.payload]
      };
    default:
      return state;
  }
}