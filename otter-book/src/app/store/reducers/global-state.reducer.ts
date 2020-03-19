import { GlobalStateActionType, GlobalStateAction } from '../actions/global-state.action';
import { GlobalState } from '../models/global-state.model';

const initialState: GlobalState = {
  colorSchema: ''
};

export function GlobalReducer( state: GlobalState = initialState, action: GlobalStateAction) {
  switch (action.type) {
    case GlobalStateActionType.CHANGE_COLOR_SCHEME:
      return [action.payload];
      default:
        return state;
  }
}
