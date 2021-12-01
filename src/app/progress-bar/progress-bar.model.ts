export interface ProgressBarData {
  name?: string,
  mainStage?: MainStage[]
}

export interface MainStage {
  name?: string,
  status?: string,
  minorStage?: MinorStage[]
}

export interface MinorStage {
  name?: string,
  status?: string
}
