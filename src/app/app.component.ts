import { Component } from '@angular/core';
import {ProgressBarData} from './progress-bar/progress-bar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'progressbar';
  landData: ProgressBarData = {
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

  }
  buildingData: ProgressBarData = {
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
}
