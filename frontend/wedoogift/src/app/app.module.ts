import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GiftFormComponent } from './gift-form/gift-form.component';
import { ResultCardsComponent } from './result-cards/result-cards.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./http-interceptors/api-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    GiftFormComponent,
    ResultCardsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [GiftFormComponent]
})
export class AppModule { }
