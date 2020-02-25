import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-hitorique',
  templateUrl: './hitorique.component.html',
  styleUrls: ['./hitorique.component.scss']
})
export class HitoriqueComponent implements OnInit {
  chartOptions = {};
  Highcharts = Highcharts ;
  chartOptions1 = {};
  Highcharts1 = Highcharts ;
  chartOptions2 = {};
  Highcharts2 = Highcharts ;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Diagramme des transactions de 2019'
      },
      tooltip: {
          split: false,
      },
      credits : {
        enabled : false
      },
      exporting : {
       enabled : true
      },
      lines: {
        show: false,
        fill: true
    },
    splines: {
        show: true,
        tension: 0.4,
        lineWidth: 1,
        fill: 0.4
    },
    points: {
        radius: 0,
        show: true
    },
    shadowSize: 2,
      series: [
        {
         name : '',
          data: [ [0,4],[1,8],[2,5],[3,10],[4,4],[5,16],[6,5],[7,11],[8,6],[9,11],[10,20],[11,10],[12,13],[13,4],[14,7],[15,8],[16,12]]
      },
    {
      name : '',
      data: [ [0,0],[1,2],[2,7],[3,4],[4,11],[5,4],[6,2],[7,5],[8,11],[9,5],[10,4],[11,1],[12,5],[13,2],[14,5],[15,2],[16,0]
    ]
  },  ],
      colors: [ '#d49f3f','#bf702b'
     ],
      grid: {
        hoverable: true,
        clickable: true,

        borderWidth: 2,
        color: 'transparent'
    },
     };
    setTimeout(() => {
      window.dispatchEvent(
         new Event('resize')
      );
     }, 300);
    this.chartOptions1 = {
        chart: {
          type: 'line',
        },
        title: {
          text: ''
      },
        tooltip: {
        },
        series: [{
            name: '',
            data: [
              34, 43, 43, 35, 44, 32, 44, 52
            ]
        }],
        colors: [ '#bf702b']
     };
     this.chartOptions2 = {
      chart: {
        type: 'line',
      },
      title: {
        text: ''
    },
      tooltip: {
      },
      series: [{
          name: '',
          data: [32, 11, 25, 37, 41, 32, 34, 42]
      }],
      colors: [ '#bf702b']
   };
    }


}
