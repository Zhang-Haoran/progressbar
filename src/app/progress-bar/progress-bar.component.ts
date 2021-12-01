import {Component, Input, OnInit} from '@angular/core';
import {ProgressBarData} from './progress-bar.model';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit {

  @Input() progressBarData!: ProgressBarData
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.progressBarData)
  }
}
