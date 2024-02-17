import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-day-selector',
  templateUrl: './day-selector.component.html',
  styleUrl: './day-selector.component.css'
})
export class DaySelectorComponent {
  @Output() dateSelected = new EventEmitter<string>();

  datas: string[] = [
    '2024-02-16',
    '2024-02-15',
    '2024-02-14',
    '2024-02-13',
    '2024-02-12'
  ];

  // Ajuste o tipo do parâmetro event para Event
  selecionarData(event: Event): void {
    // Acesse a propriedade 'value' após verificar se o alvo do evento é um HTMLSelectElement
    if (event.target instanceof HTMLSelectElement) {
      const selectedDate = event.target.value;
      this.dateSelected.emit(selectedDate);
    }
  }
}
