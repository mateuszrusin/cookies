import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import { simpleReducer } from './simple.reducer';

import {AppComponent} from './app.component';
import {CookieComponent} from './cookie/cookie.component';
import {CounterComponent} from './counter/counter.component';
import {ClickComponent} from './click/click.component';
import {CounterService} from './counter.service';
import {AddonService} from './addon.service';
import {AddonsComponent} from './addons/addons.component';


@NgModule({
    declarations: [
        AppComponent,
        CookieComponent,
        CounterComponent,
        ClickComponent,
        AddonsComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({counter: simpleReducer})
    ],
    providers: [
        CounterService,
        AddonService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
