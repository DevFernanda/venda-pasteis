import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendaPasteisComponent } from './venda-pasteis/venda-pasteis.component';

import { FormsModule } from '@angular/forms';
import { ExibePasteisComponent } from './exibe-pasteis/exibe-pasteis/exibe-pasteis.component'; // Importe o FormsModule
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    VendaPasteisComponent,
    ExibePasteisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
