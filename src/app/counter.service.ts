import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class CounterService {

    private count: number;
    private emiter: ReplaySubject<number>;

    constructor() {
        this.count = 0;
        this.emiter = new ReplaySubject();
        this.emiter.next(0);
    }

    public add(): void {
        this.emiter.next(++this.count);
    }

    public get(): ReplaySubject<number> {
        return this.emiter;
    }
}
