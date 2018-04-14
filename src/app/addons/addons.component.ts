import {Component, OnInit} from '@angular/core';
import {AddonService} from '../addon.service';
import {Store} from '@ngrx/store';
import {AppState} from '../app.store.interface';
import {Buy, Reset} from '../simple.actions';

@Component({
    selector: 'app-addons',
    templateUrl: './addons.component.html',
    styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {

    public addons: any;
    public amount: number = 0;

    constructor(private store: Store<AppState>, private addon: AddonService) {
    }

    ngOnInit() {
        this.addons = this.addon.all();
    }

    public buy(): void {
        this.store.dispatch(new Buy(this.amount));
    }

    public reset(): void {
        this.store.dispatch(new Reset());
    }

}
