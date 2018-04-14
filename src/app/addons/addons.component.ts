import {Component, OnInit} from '@angular/core';
import {AddonService} from '../addon.service';

@Component({
    selector: 'app-addons',
    templateUrl: './addons.component.html',
    styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {

    public addons: any;

    constructor(private addon: AddonService) {
    }

    ngOnInit() {
        this.addons = this.addon.all();
    }

}
