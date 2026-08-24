import { Component, signal } from '@angular/core';
import { Hijo } from '../../hijo/hijo/hijo';

@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.scss',
  templateUrl: './padre.html',
})
export class Padre {
  contador = signal(0);
  historial = signal<string[]>([]);

  alIncrementar(){
    this.contador.update((valor) => valor + 1);
    this.historial.update((historial) => [ `Hijo pidio + 1 -> El contador es ${this.contador()}`, ...historial ]);
  }

  alDecrementar(){
    this.contador.update((valor) => valor - 1);
    this.historial.update((historial) => [ `Hijo pidio - 1 -> El contador es ${this.contador()}`, ...historial ]);
  }
}
