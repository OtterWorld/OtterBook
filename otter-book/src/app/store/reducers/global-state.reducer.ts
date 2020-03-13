import { GobalStateActionType, GobalStateAction } from '../actions/global-state.action';
import { GlobalState } from '../models/global-state.model';

const initialState: Array<GlobalState> = [
  {
    colorSchema: 'red'
  }
];

export function GlobalReducer( state: Array<GlobalState> = initialState, action: GobalStateAction) {
  switch (action.type) {
    case GobalStateActionType.CHANGE_COLOR_SCHEME:
      return [...state, action.payload];
      default:
        return state;
  }
}
