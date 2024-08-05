import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import localeCO from '@angular/common/locales/es-CO';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localeCO, 'es-CO');

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [DecimalPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
