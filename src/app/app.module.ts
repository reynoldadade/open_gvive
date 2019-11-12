import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassportComponent } from './passport/passport.component';
import { HttpClientModule } from '@angular/common/http';
import { VotersComponent } from './voters/voters.component';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [AppComponent, PassportComponent, VotersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBarcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
