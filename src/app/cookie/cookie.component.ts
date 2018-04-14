import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from '../app.store.interface'

@Component({
    selector: 'app-cookie',
    templateUrl: './cookie.component.html',
    styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
    }

    public click(): void {
        this.store.dispatch({type: 'ADD'})
    }

}
