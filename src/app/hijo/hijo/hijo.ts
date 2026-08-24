import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.scss',
  templateUrl: './hijo.html',
})
export class Hijo {
  valor = input.required<number>();
  incrementar = output<void>();
  decrementar = output<void>();

  sumar (){
    this.incrementar.emit();
  }

  restar (){
    this.decrementar.emit();
  }
}
