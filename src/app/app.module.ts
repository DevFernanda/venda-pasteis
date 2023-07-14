import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendaPasteisComponent } from './venda-pasteis/venda-pasteis.component';

import { FormsModule } from '@angular/forms'; // Importe o FormsModule


@NgModule({
  declarations: [
    AppComponent,
    VendaPasteisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
