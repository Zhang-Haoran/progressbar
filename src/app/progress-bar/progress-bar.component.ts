import {Component, OnInit} from '@angular/core';

export interface ProgressBarData{
  properType?: ProperType[]
}

export interface ProperType{
  name?: string,
  mainStage?: MainStage[]
}

export interface MainStage{
  name?: string,
  status?: string,
  minorStage?: MinorStage[]
}

export interface MinorStage{
  name?: string,
  status?: string
}

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit {
  progressBarData: ProgressBarData = {
    properType: [
      {
        name: 'Land',
        mainStage: [
          {
            name: 'Your Property',
            status: 'Done',
            minorStage: [
              {
                name: 'Applying',
                status: 'Doing'
              },
              {
                name: 'Deposit',
                status: 'Undone'
              },
              {
                name: 'Pending',
                status: 'Undone'
              }
            ]
          },
          {
            name: 'Building Contract',
            status: 'Undone'
          },
          {
            name: 'Initial Payment',
            status: 'Undone'
          },
          {
            name: 'Balance Payment',
            status: 'Undone'
          },
          {
            name: 'Settlement',
            status: 'Undone'
          },
          {
            name: 'Completion',
            status: 'Undone'
          }
        ]
      },
      {
        name: 'Building',
        mainStage: [
          {
            name: 'Your Property',
            status: 'Done',
            minorStage: [
              {
                name: 'Applying',
                status: 'Done'
              },
              {
                name: 'Deposit',
                status: 'Done'
              },
              {
                name: 'Pending',
                status: 'Done'
              }
            ]
          },
          {
            name: 'Building Contract',
            status: 'Doing'
          },
          {
            name: 'Initial Payment',
            status: 'Undone'
          },
          {
            name: 'Balance Payment',
            status: 'Undone'
          },
          {
            name: 'Settlement',
            status: 'Undone'
          },
          {
            name: 'Completion',
            status: 'Undone'
          }
        ]
      }
    ]
  }
  constructor() {

  }

  ngOnInit(): void {
  }
}
