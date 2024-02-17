import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AnalyticsService } from '../analytics/analytics.service';
import { Analytics } from '../analytics/analytics.interface';

@Component({
  selector: 'app-link-chart',
  templateUrl: './link-chart.component.html',
  styleUrl: './link-chart.component.css'
})
export class LinkChartComponent {
  chart: any = [];

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    this.analyticsService.getDailyData().subscribe((analytics) => { 
      this.createChart(analytics); 
    })

  }

  createChart(analytics: Analytics[]) {

    const labels = analytics.map((item: Analytics) => this.formatDateBR(item.date));
    const accesses = analytics.map((item: Analytics) => item.pageViews);

    const ctx = document.getElementById('linkChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Acessos por dia',
          data: accesses,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  formatDateBR(dateString: string): string {
    const dateParts = dateString.split('-');
    
    if (dateParts.length !== 3) {
      throw new Error('Formato de data inválido. Deve ser AAAA-MM-DD');
    }
  
    const [year, month, day] = dateParts;
    const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
  }
}
