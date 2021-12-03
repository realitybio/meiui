import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import LineChart from './line-chart';

@Component({
  selector: 'lib-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartRef') chartRef: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.drewLineChart();
  }

  drewLineChart() {
    console.log(this.chartRef?.nativeElement, 'this.chartRef');
    if (!this.chartRef) return;
  }
}
