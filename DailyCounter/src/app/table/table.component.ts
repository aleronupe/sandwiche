import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AnalyticsService } from '../analytics/analytics.service'
import { Analytics } from '../analytics/analytics.interface'

type clickDataView = { idx: number, url: string, clicks: number }

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  links: clickDataView[] = [];

  // links: any[] = [
  //   { url: 'https://example.com/page1', clicks: 120 },
  //   { url: 'https://example.com/page2', clicks: 90 },
  //   { url: 'https://example.com/page3', clicks: 80 },
  //   // Adicione mais dados conforme necessário
  // ];

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    // Mapa do total de clicks por link
    const clicksMap = new Map<string, number>();

    // Obtenção dos dados por click
    this.analyticsService.getData().subscribe((analytics) => {

      // Itera por todos os elementos retornados
      for (const webData of analytics) {
        // Calcular total de cliques por link
        webData.clickedLinks.forEach((clickData) => {
          const { link, clicks } = clickData;
          // Popula o Map com o total de links clicados
          clicksMap.set(link, (clicksMap.get(link) || 0) + clicks);
        });
      }

      // Criar array resultante
      this.links = Array.from(clicksMap.entries()).map(([link, totalClicks], idx) => ({
        idx: idx+1,
        url: link,
        clicks: totalClicks,
      }));
    });
  }
}
