export interface CalculationInput {
  pistonDiameter: number;
  rodDiameter: number;
  stroke: number;
  pressure: number;
  oilFlow: number;
}

export interface CalculationResult {
  areaBoreSide: number;
  areaRodSide: number;
  volumeBoreSide: number;
  volumeRodSide: number;
  forceBoreSide: number;
  forceRodSide: number;
  timeBoreSide: number;
  timeRodSide: number;
  velocityBoreSide: number;
  velocityRodSide: number;
  outflowBoreSide: number;
  outflowRodSide: number;
  ratioBoreSide: number;
}

export interface CalculationData {
  input: CalculationInput;
  result: CalculationResult;
}
