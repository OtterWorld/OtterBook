import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from "./color-scheme.action"

export interface State {
  category: number;
  colorSchema: number;
}
 
const _currentThemeColor = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);
 
export function currentThemeColor() {
  // return _currentThemeColor(state, action);
}