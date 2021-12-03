import { AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import LineChart, { ECOption } from './line-chart';

interface LinePoint {
  name: "坐标"
  value: number
  coord: [number, number]
}

@Component({
  selector: 'lib-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, AfterViewInit {

  @Input() xAxis: number[] | undefined;
  @Input() yAxis: number[] | undefined;

  @ViewChild('chartRef') chartRef: ElementRef | undefined;

  linePoint: LinePoint[] = []

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if(this.xAxis && this.yAxis) {
      this.drewLineChart(this.xAxis, this.yAxis);
    }
  }

  drewLineChart(xAxis: number[], yAxis: number[]) {
    console.log(this.chartRef, 'this.chartRef');
    if (!this.chartRef) return;

    const lineChart = LineChart.init(this.chartRef.nativeElement);

    lineChart.clear();

    lineChart.off('click').on('click', (params: any) => {
      let data: any = {};
      let target = this.linePoint.findIndex((p: any) => p.coord[0] == params.dataIndex);
      if (target >= 0) {
        this.linePoint.splice(target, 1);
      } else {
        this.linePoint.push({
          name: '坐标',
          value: params.value,
          coord: [params.dataIndex, params.value],
        });
      }
      data.markPoint = {
        symbol: 'arrow',
        symbolOffset: [0, -18],
        symbolSize: [10, 10],
        label: {
          position: 'top',
          fontWeight: 'bold',
        },
        data: this.linePoint,
      };

      lineChart.setOption({
        series: data,
      });
    });

    const option: ECOption = {
      color: ['#5470c6'],
        grid: {
          left: '6%',
          right: '2%',
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          data: xAxis,
        },
        yAxis: {
          splitLine: {
            show: true,
          },
        },
        dataZoom: [
          {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter',
            startValue: 0,
            endValue: 100,
          },
          {
            type: 'inside',
          },
        ],
        series: [
          {
            name: 'Y',
            type: 'line',
            data: yAxis,
            lineStyle: {
              width: 0.8,
            },
            emphasis: {
              lineStyle: {
                width: 0.8,
              },
            },
          },
        ],
      }

      lineChart.setOption(option)
  }
}
