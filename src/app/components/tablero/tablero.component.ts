import { Component, OnInit } from '@angular/core';
import { Celda } from '../../Clases/Celda';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  celdas: Celda[][] = [];
  contador: number=0;
  
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      if(!this.celdas[i]){
        this.celdas[i] = [];
      }
      
      for (let y = 0; y < 10; y++) {
        this.contador++;
        var celda = new Celda()
        celda.numero = this.contador;
        this.celdas[i].push(celda);
      }
    }

    console.log(this.celdas)
  }

}
