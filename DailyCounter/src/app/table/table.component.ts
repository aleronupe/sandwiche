import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AnalyticsService } from '../analytics/analytics.service';

type clickDataView = { idx: number, url: string, clicks: number }

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  @Input() selectedDate: string | undefined;

  links: clickDataView[] = [];
  timeFrame: string = "- -";

  constructor(private analyticsService: AnalyticsService) { }

  ngOnChanges(): void {
    if (this.selectedDate) {
      // Atualiza dados formatados
      this.timeFrame = this.calculateTimeFrame(this.selectedDate);

      // Mapa do total de clicks por link
      const clicksMap = new Map<string, number>();

      // Obtenção dos dados por click
      this.analyticsService.getDataLast7Days(this.selectedDate).subscribe((analytics) => {
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

  ngOnInit(): void {
    // Define string inicial
    this.timeFrame = this.calculateTimeFrame('2024-02-16');

    // Mapa do total de clicks por link
    const clicksMap = new Map<string, number>();

    // Obtenção dos dados por click
    this.analyticsService.getDataLast7Days('2024-02-16').subscribe((analytics) => {
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

  calculateTimeFrame(dataString: string): string {
    const currentDate = new Date(dataString + 'T00:00:00');

    if (isNaN(currentDate.getTime())) {
      // Retorna null se a string de data não for válida
      return "";
    }

    // Calcula a data correspondente a 7 days anteriores
    const targetDate = new Date(currentDate);
    targetDate.setDate(targetDate.getDate() - 7);

    // Formata as datas no formato "DD/MM/AAAA"
    const currentDateFormatted = this.formatDate(currentDate);
    const targetDateFormatted = this.formatDate(targetDate);

    // Retorna a string formatada
    return `${targetDateFormatted} a ${currentDateFormatted}`;
  }
  
  formatDate(data: Date): string {
  const day = data.getDate().toString().padStart(2, '0');
  const month = (data.getMonth() + 1).toString().padStart(2, '0');
  const year = data.getFullYear();

  return `${day}/${month}/${year}`;
}
}
