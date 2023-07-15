import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pastel {
  carne: number;
  frango: number;
  banana: number;
  fp: string;
  obs: string;
}

@Component({
  selector: 'app-exibe-pasteis',
  templateUrl: './exibe-pasteis.component.html',
  styleUrls: ['./exibe-pasteis.component.css']
})
export class ExibePasteisComponent implements OnInit {
  pasteis: Pastel[] = [];
  totalCarne: number = 0;
  totalFrango: number = 0;
  totalBanana: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPasteisData();
  }

  getPasteisData(): void {
    this.http.get<Pastel[]>('http://localhost:8000/pasteis').subscribe(data => {
      this.pasteis = data;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.totalCarne = this.pasteis.reduce((total, pastel) => total + pastel.carne, 0);
    this.totalFrango = this.pasteis.reduce((total, pastel) => total + pastel.frango, 0);
    this.totalBanana = this.pasteis.reduce((total, pastel) => total + pastel.banana, 0);
  }
}
