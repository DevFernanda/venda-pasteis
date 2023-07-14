import { Component } from '@angular/core';

@Component({
  selector: 'app-venda-pasteis',
  templateUrl: './venda-pasteis.component.html',
  styleUrls: ['./venda-pasteis.component.css']
})
export class VendaPasteisComponent {
  quantidadeCarne: number=0;
  quantidadeFrango: number=0;
  quantidadeBananinha: number=0;
  valorPago: number=0;
  troco: number=0;

  calcularTroco(): void {
    const valorPasteisCarne = 4.0; // Valor de cada pastel de carne
    const valorPasteisFrango = 4.0; // Valor de cada pastel de frango
    const valorPasteisBananinha = 4.0; // Valor de cada pastel de bananinha

    const totalCarne = this.quantidadeCarne ? this.quantidadeCarne * valorPasteisCarne : 0;
    const totalFrango = this.quantidadeFrango ? this.quantidadeFrango * valorPasteisFrango : 0;
    const totalBananinha = this.quantidadeBananinha ? this.quantidadeBananinha * valorPasteisBananinha : 0;

    const totalVenda = totalCarne + totalFrango + totalBananinha;

    if (this.valorPago && this.valorPago >= totalVenda) {
      this.troco = this.valorPago - totalVenda;
    } else {
      this.troco = 0;
    }
  }

  limparFormulario(): void {
    this.quantidadeCarne = 0;
    this.quantidadeFrango = 0;
    this.quantidadeBananinha = 0;
    this.valorPago = 0;
    this.troco = 0;
  }
}
