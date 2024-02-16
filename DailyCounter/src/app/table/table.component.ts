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

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    // Mapa do total de clicks por link
    const clicksMap = new Map<string, number>();

    // Obtenção dos dados por click
    this.analyticsService.getDataLast7Days('2024-02-11').subscribe((analytics) => {
      // Itera por todos os elementos retornados
      for (const webData of analytics) {
        // Calcular total de cliques por link
        webData.clickedLinks.forEach((clickData) => {
          const { link, clicks } = clickData;
          // Popula o Map com o total de links clicados
          clicksMap.set(link, (clicksMap.get(link) || 0) + clicks);
        });
      }

      // Cria array a partir do mapa, no formato: [link, totalClicks]
      let arrayClicks = Array.from(clicksMap.entries());

      // Ordena array de forma decrescente
      arrayClicks = arrayClicks.sort((a, b) => b[1] - a[1]);

      // Formata array para exibição em tela
      this.links = arrayClicks.map(([link, totalClicks], idx) => ({
        idx: idx + 1,
        url: link,
        clicks: totalClicks,
      }));
    });
  }
}
