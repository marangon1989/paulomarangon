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

export function CalculatorCylinder(data: CalculationData): ResultData {
  const { pistonDiameter, rodDiameter, stroke, pressure, oilFlow } = data;
  
  const pi = Math.PI;
  const areaBoreSide = pi * Math.pow(pistonDiameter / 2, 2) / 100;
  const areaRodSide = pi * (Math.pow(pistonDiameter / 2, 2) - Math.pow(rodDiameter / 2, 2)) / 100;  

  const volumeBoreSideCm = areaBoreSide * stroke; // in cubic cm
  const volumeRodSideCm = areaRodSide * stroke; // in cubic cm

  const volumeBoreSide = volumeBoreSideCm / 10000; // in liters
  const volumeRodSide = volumeRodSideCm / 10000; // in liters
  
  const forceBoreSide = (areaBoreSide * pressure * 10) / 1000;
  const forceRodSide = (areaRodSide * pressure * 10) / 1000;

  const timeBoreSide = ((volumeBoreSide / oilFlow) * 60);
  const timeRodSide = ((volumeRodSide / oilFlow) * 60);
  
  let velocityBoreSide = (stroke / 1000) / timeBoreSide;
  let velocityRodSide = (stroke / 1000) / timeRodSide;
  
  velocityBoreSide = Math.floor(velocityBoreSide * 1000000) / 1000000;
  velocityRodSide = Math.floor(velocityRodSide * 1000000) / 1000000;
  
  // Calculate Outflows in L/min
  const outflowBoreSide = oilFlow / (timeBoreSide / timeRodSide);
  const outflowRodSide = oilFlow / (timeRodSide / timeBoreSide);

  // const outflowRodSide = oilFlow / (timeBoreSide / timeRodSide);
    
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
