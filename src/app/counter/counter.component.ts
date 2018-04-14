import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../app.store.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

    public count$ = this.store.select('counter');

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
    }
}
