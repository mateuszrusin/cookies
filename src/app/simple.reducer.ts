import * as SimpleActions from './simple.actions';

export type Action = SimpleActions.All;

export function simpleReducer(state: number = 0, action: Action) {

    switch (action.type) {

        case SimpleActions.ADD:
            return state = state + 1;

        case SimpleActions.BUY:

            return state = state - action.payload;

        case SimpleActions.RESET:
            return state = 0;

        default:
            return state;
    }
}