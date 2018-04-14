import { Action } from '@ngrx/store';

export const ADD = 'ADD';
export const BUY = 'BUY';
export const RESET = 'RESET';


export class Add implements Action {
    readonly type = ADD;
}
export class Buy implements Action {
    readonly type = BUY;

    /// user a constructor to send a payload with the action
    constructor(public payload: number) {}
}

export class Reset implements Action {
    readonly type = RESET;
}

export type All
    = Add
    | Buy
    | Reset;
