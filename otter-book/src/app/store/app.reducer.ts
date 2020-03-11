import { ActionReducerMap } from '@ngrx/store';

import * as fromColorTheme from './global/color-scheme.reducer';

export interface AppState {
 colorSchema: fromColorTheme.ColorState
}

export const appReducer: ActionReducerMap<AppState> = {
  colorSchema: fromColorTheme.colorSchemeReducer
};
