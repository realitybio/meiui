import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';



@NgModule({
  declarations: [
    ChartComponent,
    LineChartComponent
  ],
  imports: [
  ],
  exports: [
    ChartComponent,
    LineChartComponent
  ]
})
export class ChartModule { }
