import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibePasteisComponent } from './exibe-pasteis/exibe-pasteis/exibe-pasteis.component';
import { VendaPasteisComponent } from './venda-pasteis/venda-pasteis.component';


const routes: Routes = [
  { path: '', component: VendaPasteisComponent },
  { path: 'exibe-pasteis', component: ExibePasteisComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
