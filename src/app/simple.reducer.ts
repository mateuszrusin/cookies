import { Action } from '@ngrx/store';

export function simpleReducer(state: number = 0, action: Action) {

    switch (action.type) {

        case 'ADD':
            return state = state + 1;

        default:
            return state;
    }
}