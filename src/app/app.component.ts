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
    stage: [
      {
        name: 'Your Property',
        status: 'Done',
        minorStage: false
      },
      {
        name: 'Applying',
        status: 'Doing',
        minorStage: true
      },
      {
        name: 'Deposit',
        status: 'Undone',
        minorStage: true
      },
      {
        name: 'Pending',
        status: 'Undone',
        minorStage: true
      },
      {
        name: 'Building Contract',
        status: 'Undone',
        minorStage: false
      },
      {
        name: 'Initial Payment',
        status: 'Undone',
        minorStage: false
      },
      {
        name: 'Balance Payment',
        status: 'Undone',
        minorStage: false
      },
      {
        name: 'Settlement',
        status: 'Undone',
        minorStage: false
      },
      {
        name: 'Completion',
        status: 'Undone',
        minorStage: false
      }
    ]

  }
  buildingData: ProgressBarData = {
    name: 'Building',
    stage: [
      {
        name: 'Your Property',
        status: 'Done',
        minorStage: false
      },
      {
        name: 'Applying',
        status: 'Done',
        minorStage: true
      },
      {
        name: 'Deposit',
        status: 'Done',
        minorStage: true
      },
      {
        name: 'Pending',
        status: 'Done',
        minorStage: true
      },
      {
        name: 'Building Contract',
        status: 'Doing',
        minorStage: false
      },
      {
        name: 'Initial Payment',
        status: 'Undone',
        minorStage: false
      },
      {
        name: 'Balance Payment',
        status: 'Undone',
        minorStage: false
      },
      {
        name: 'Settlement',
        status: 'Undone',
        minorStage: false
      },
      {
        name: 'Completion',
        status: 'Undone',
        minorStage: false
      }
    ]
  }
  propertyData: ProgressBarData = {
    name: 'Property',
    stage: [
      {
        name: 'Your Property',
        status: 'Done',
        minorStage: false
      },
      {
        name: 'Initial Payment',
        status: 'Done',
        minorStage: false
      },
      {
        name: 'Balance Payment',
        status: 'Done',
        minorStage: false
      },
      {
        name: 'Composition Confirmation',
        status: 'Doing',
        minorStage: true
      },
      {
        name: 'Pending',
        status: 'Undone',
        minorStage: true
      },
      {
        name: 'Building Contract',
        status: 'Undone',
        minorStage: false
      },
      {
        name: 'Settlement',
        status: 'Undone',
        minorStage: false
      },
      {
        name: 'Completion',
        status: 'Undone',
        minorStage: false
      }
    ]
  }
}
