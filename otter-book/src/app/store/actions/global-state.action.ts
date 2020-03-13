import { Action } from "@ngrx/store";
import { GlobalState } from '../models/global-state.model';

export enum GobalStateActionType {
  CHANGE_COLOR_SCHEME = '[COLOR SCHEME] Change Color'
}

export class ChangeColorScheme implements Action {
  readonly type = GobalStateActionType.CHANGE_COLOR_SCHEME

  constructor ( public payload: GlobalState ) {}
}

export type GobalStateAction = ChangeColorScheme