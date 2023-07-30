export interface CalculationData {
  pistonDiameter: number;
  rodDiameter: number;
  stroke: number;
  pressure: number;
  oilFlow: number;
}

export interface ResultData extends CalculationData {
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

export function calculate(data: CalculationData): ResultData {
  const { pistonDiameter, rodDiameter, stroke, pressure, oilFlow } = data;
  
  const pi = Math.PI;
  const areaBoreSide = pi * Math.pow(pistonDiameter / 2, 2);
  const areaRodSide = pi * (Math.pow(pistonDiameter / 2, 2) - Math.pow(rodDiameter / 2, 2));

  const volumeBoreSide = areaBoreSide * stroke;
  const volumeRodSide = areaRodSide * stroke;

  const forceBoreSide = areaBoreSide * pressure;
  const forceRodSide = areaRodSide * pressure;

  const timeBoreSide = volumeBoreSide / oilFlow;
  const timeRodSide = volumeRodSide / oilFlow;

  const velocityBoreSide = stroke / timeBoreSide;
  const velocityRodSide = stroke / timeRodSide;

  const outflowBoreSide = oilFlow;
  const outflowRodSide = oilFlow;

  const ratioBoreSide = areaBoreSide / areaRodSide;

  return {
    ...data,
    areaBoreSide,
    areaRodSide,
    volumeBoreSide,
    volumeRodSide,
    forceBoreSide,
    forceRodSide,
    timeBoreSide,
    timeRodSide,
    velocityBoreSide,
    velocityRodSide,
    outflowBoreSide,
    outflowRodSide,
    ratioBoreSide,
  };
}
