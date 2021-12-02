export interface ProgressBarData {
  name?: string,
  stage?: Stage[]
}

export interface Stage {
  name?: string,
  status?: string,
  minorStage?: boolean
}
