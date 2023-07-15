import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-venda-pasteis',
  templateUrl: './venda-pasteis.component.html',
  styleUrls: ['./venda-pasteis.component.css']
})
export class VendaPasteisComponent {
  quantidadeCarne: number;
  quantidadeFrango: number;
  quantidadeBananinha: number;
  fp: string;
  obs: string;
  valorPago: number;
  troco: number;

  constructor(private http: HttpClient) { }

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

  salvarVenda(): void {
    const url = 'http://localhost:8000/pasteis';

    const venda = {
      carne: this.quantidadeCarne,
      frango: this.quantidadeFrango,
      banana: this.quantidadeBananinha,
      fp: this.fp,
      obs: this.obs
    };

    this.http.post(url, venda)
      .subscribe(
        response => {
          console.log('Venda salva com sucesso:', response);
          this.resetarValores();
        },
        error => {
          console.error('Erro ao salvar a venda:', error);
        }
      );
  }

  resetarValores(): void {
    this.quantidadeCarne = 0;
    this.quantidadeFrango = 0;
    this.quantidadeBananinha = 0;
    this.valorPago = 0;
    this.troco = 0;
    this.fp = '',
    this.obs = ''
  }
}
