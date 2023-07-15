import { Component } from '@angular/core';

@Component({
  selector: 'app-exibe-pasteis',
  templateUrl: './exibe-pasteis.component.html',
  styleUrls: ['./exibe-pasteis.component.css']
})
export class AppComponent {
  quantidadeCarne: number = 10;
  quantidadeFrango: number = 15;
  quantidadeBanana: number = 5;

  formaPagamento: string = 'Cartão';
  observacao: string = 'Cliente regular';

  totalCarne: number = this.quantidadeCarne;
  totalFrango: number = this.quantidadeFrango;
  totalBanana: number = this.quantidadeBanana;
}
