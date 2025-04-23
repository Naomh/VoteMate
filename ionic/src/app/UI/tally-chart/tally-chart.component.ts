import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartTypeRegistry } from 'chart.js';
import { BaseChartDirective} from 'ng2-charts';
import { ICandidate } from '../election-list/election.interface';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
    selector: 'UI-tally-chart',
    standalone: true, 
    imports: [
        CommonModule,
        BaseChartDirective 
      ],
    templateUrl: './tally-chart.component.html',
    styleUrl: './tally-chart.component.scss'
})
export class TallyChartComponent implements OnInit{
    @Input() tally!: number[];
    @Input() candidates!: ICandidate[];

    @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

    protected chartType: keyof ChartTypeRegistry = 'bar';
    public get type(): keyof ChartTypeRegistry {
      return this.chartType;
    }

    protected chartPlugins = [ChartDataLabels];

    protected candidateTallies: (ICandidate&{ tally: number })[] = [];

    private _view: 'party' | 'candidate' = 'candidate';
    public get view(){
      return this._view;
    }

    protected data: ChartConfiguration['data'] = {
        labels: [],
        datasets: [{
          label: '',
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
          maxBarThickness: 60
        }]
      };

    protected chartOptions: ChartConfiguration['options'] = {
      responsive: true,
      maintainAspectRatio: false, 
      plugins: {
        legend: {
          position: 'top', 
          onClick: () => {},
          labels: {
            font: {
              size: 15,
              weight: 'bold',
              family: 'Raleway, sans-serif',
            }
          }
        },
        datalabels: {
          anchor: 'start',
          align: 'start',
          formatter: this.barFormatter,
          color: '#FFFFFF', 
          font: {
            size: 14,
            weight: 'bold',
            family: 'Raleway, sans-serif',
          }
        }
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 14,
              weight: 'bold',
              family: 'Raleway, sans-serif',
            }
          }
        },
        y: {
          ticks: {
            font: {
              size: 14,
              weight: 'bold',
              family: 'Raleway, sans-serif',
            }
          },
          grid: {
            color: '#E0E0E0', 
            lineWidth: 1, 
          }
        },
      },
    };

    ngOnInit(): void {
      this.candidateTallies = this.candidates.map((candidate, index) => {
        return {
          ...candidate,
          tally: this.tally[index] || 0 
        };
      });
      this.prepareCandidateChartData();
    }

    public prepareCandidateChartData(){
      this.data.labels = this.candidateTallies.map((candidate) => candidate.name);
      this.data.datasets[0].data = this.candidateTallies.map((candidate) => candidate.tally);
      this.data.datasets[0].label = 'Election results - Candidate tallies';
      this.data.datasets[0].backgroundColor = this.candidateTallies.map((candidate) => this.generateColor(candidate.index, this.candidates.length));
      this.data.datasets[0].borderColor = this.candidateTallies.map((candidate) => this.generateColor(candidate.index, this.candidates.length, true));

      this.chart?.update();
      this._view = 'candidate';
    }
    
    public preparePartyChartData(){
      const partyTallies = this.candidateTallies.reduce((acc, candidate) => {
        const party = candidate.party ?? 'independent';
        acc[party] = (acc[party] || 0) + candidate.tally;
        return acc;
      }, {} as Record<string, number>);
      this.data.labels = Object.keys(partyTallies);
      this.data.datasets[0].data = Object.values(partyTallies);
      this.data.datasets[0].label = 'Election results - Party tallies';
      this.data.datasets[0].backgroundColor = Object.keys(partyTallies).map((party, index) => this.generateColor(index, Object.keys(partyTallies).length));
      this.data.datasets[0].borderColor = Object.keys(partyTallies).map((party, index) => this.generateColor(index, Object.keys(partyTallies).length, true));
      
      this.chart?.update();
      this._view = 'party';
    }

    public swapType(){
      this.chartType = this.chartType === 'bar' ? 'pie' : 'bar';
      if(this.chartType === 'pie'){
        this.chartPlugins = []
      }else{
        this.chartPlugins = [ChartDataLabels]
      }
      this.chart?.update();
    }

    private generateColor(index: number, total: number, border:boolean = false): string {
      const hue = 210 + (index * 135 / total) % 345;
      return `hsl(${hue}, 50%, ${border? '20' : '40'}%)`;
    }
    
    private barFormatter(value: number, ctx: any): string{
      try {
      const data = ctx.chart.data.datasets[0].data as number[];
      const total = data.reduce((acc, val) => acc + val, 0);
      const percentage = ((value / total) * 100).toFixed(1);
      return `${percentage}%`;}
      catch (e) {
        console.error(e);
        throw new Error('Error in datalabels formatter');
      }
    }

  }
