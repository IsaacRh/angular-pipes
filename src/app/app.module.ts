import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEs from "@angular/common/locales/es";
import localFr from "@angular/common/locales/fr";

registerLocaleData(localEs);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CustomCapitalizePipe } from './pipes/custom-capitalize.pipe';
import { CustomSecurityDomPipe } from './pipes/custom-security-dom.pipe';
import { EnablePasswordPipe } from './pipes/enable-password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomCapitalizePipe,
    CustomSecurityDomPipe,
    EnablePasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
