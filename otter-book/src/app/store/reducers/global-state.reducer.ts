import { GobalStateActionType, GobalStateAction } from '../actions/global-state.action';
import { GlobalState } from '../models/global-state.model';

const initialState: GlobalState = {
  colorSchema: ''
};

export function GlobalReducer( state: GlobalState = initialState, action: GobalStateAction) {
  switch (action.type) {
    case GobalStateActionType.CHANGE_COLOR_SCHEME:
      return [action.payload];
      default:
        return state;
  }
}
