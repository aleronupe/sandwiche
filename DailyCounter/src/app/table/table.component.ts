import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  links: any[] = [
    { url: 'https://example.com/page1', clicks: 120 },
    { url: 'https://example.com/page2', clicks: 90 },
    { url: 'https://example.com/page3', clicks: 80 },
    // Adicione mais dados conforme necessário
  ];

  ngOnInit() {}
}
