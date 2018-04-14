import {Injectable} from '@angular/core';

@Injectable()
export class AddonService {

    private addons: any = [
        {name: 'Jeden', cost: 10, factor: 2},
        {name: 'Dwa',   cost: 50, factor: 3}
    ];

    constructor() {
    }

    public all(): any {
        return this.addons;
    }

}
