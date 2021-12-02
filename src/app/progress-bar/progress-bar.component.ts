import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ProgressBarData} from './progress-bar.model';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit {

  @Input() progressBarData!: ProgressBarData
  @Input() barColor!: string
  mainStage: any = [];
  minorStage: any = [];
  constructor() {

  }

  ngOnInit(): void {
    this.findMainStage();
    console.log(this.mainStage);
    console.log(this.minorStage);
  }

  findMainStage(){
    for (let eachStage of this.progressBarData.stage!){
      if (eachStage.minorStage === false){
        this.mainStage.push(eachStage.name);
      }else {
        this.minorStage.push(eachStage.name);
      }
    }
  }

}
