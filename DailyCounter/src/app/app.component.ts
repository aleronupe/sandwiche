import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DailyCounter';
  selectedDate: string | undefined;

  // Corrija o nome do método para que corresponda ao que foi definido no template
  onDateSelected(date: string): void {
    this.selectedDate = date;
  }

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
