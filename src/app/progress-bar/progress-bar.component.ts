import {Component, Input, OnInit} from '@angular/core';

export interface ProgressBarData{
  proper?: [
    {
      name?: string
      mainStage?: [
        {
          name?: string,
          status?: string,
          minorStage?: [{
            name?: string,
            status?: string
          }]
        }
      ]
    }
  ]
}

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit {
  progressBarData = {
    proper: [
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
