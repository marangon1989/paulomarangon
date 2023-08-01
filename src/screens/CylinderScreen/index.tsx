import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@components/Button";
import { CustomInput } from "@components/Input";

import {
  CalculatorCylinder,
  CalculationData,
  ResultData,
} from "@utils/CalculatorCylinder";

import {
  Container,
  Title,
  StyledScrollView,
  InputContainer,
  ResultsContainer,
  ResultTitle,
  ResultText,
} from "./styles";
import { Header } from "@components/Header";

interface IFormInput {
  boreDiameter: string;
  rodDiameter: string;
  stroke: string;
  pressure: string;
  oilFlow: string;
}

export const CylinderScreen: React.FC = () => {
  const { control, handleSubmit } = useForm<IFormInput>();
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [result, setResult] = useState<ResultData | null>(null);

  const onSubmit = (data: IFormInput) => {
    const numericData: CalculationData = {
      pistonDiameter: Number(data.boreDiameter),
      rodDiameter: Number(data.rodDiameter),
      stroke: Number(data.stroke),
      pressure: Number(data.pressure),
      oilFlow: Number(data.oilFlow),
    };

    const result: ResultData = CalculatorCylinder(numericData);

    setResult(result);
  };

  return (
    <>
      <Header />
      <Container>
        <StyledScrollView>
          <InputContainer>
            <Title>Piston/Bore Diameter - mm</Title>
            <CustomInput
              control={control}
              name="boreDiameter"
              focusedField={focusedField}
              setFocusedField={setFocusedField}
            />
          </InputContainer>

          <InputContainer>
            <Title>Rod Diameter - mm</Title>
            <CustomInput
              control={control}
              name="rodDiameter"
              focusedField={focusedField}
              setFocusedField={setFocusedField}
            />
          </InputContainer>

          <InputContainer>
            <Title>Stroke - mm</Title>
            <CustomInput
              control={control}
              name="stroke"
              focusedField={focusedField}
              setFocusedField={setFocusedField}
            />
          </InputContainer>

          <InputContainer>
            <Title>Pressure - bar</Title>
            <CustomInput
              control={control}
              name="pressure"
              focusedField={focusedField}
              setFocusedField={setFocusedField}
            />
          </InputContainer>

          <InputContainer>
            <Title>Oil Flow - ipm</Title>
            <CustomInput
              control={control}
              name="oilFlow"
              focusedField={focusedField}
              setFocusedField={setFocusedField}
            />
          </InputContainer>

          <Button onPress={() => handleSubmit(onSubmit)()}>
            Calculator Cylinder
          </Button>

          {result && (
            <>
              <ResultsContainer>
                <ResultTitle>Área - cm2</ResultTitle>
                <ResultText>
                  Bore Side: {result.areaBoreSide.toFixed(4)} Rod Side:{" "}
                  {result.areaRodSide.toFixed(4)}
                </ResultText>
              </ResultsContainer>

              <ResultsContainer>
                <ResultTitle>Volume - I</ResultTitle>
                <ResultText>
                  Bore Side: {result.volumeBoreSide.toFixed(4)} Rod Side:{" "}
                  {result.volumeRodSide.toFixed(4)}
                </ResultText>
              </ResultsContainer>

              <ResultsContainer>
                <ResultTitle>Force - kN</ResultTitle>
                <ResultText>
                  Bore Side: {result.forceBoreSide.toFixed(4)} Rod Side:{" "}
                  {result.forceRodSide.toFixed(4)}
                </ResultText>
              </ResultsContainer>

              <ResultsContainer>
                <ResultTitle>Time - sec</ResultTitle>
                <ResultText>
                  Bore Side: {result.timeBoreSide.toFixed(3)} Rod Side:{" "}
                  {result.timeRodSide.toFixed(4)}
                </ResultText>
              </ResultsContainer>

              <ResultsContainer>
                <ResultTitle>Velocity- m/s</ResultTitle>
                <ResultText>
                  Bore Side: {result.velocityBoreSide.toFixed(6)} Rod Side:{" "}
                  {result.velocityRodSide.toFixed(6)}
                </ResultText>
              </ResultsContainer>

              <ResultsContainer>
                <ResultTitle>Outflow - ipm</ResultTitle>
                <ResultText>
                  Bore Side: {result.outflowBoreSide.toFixed(4)} Rod Side:{" "}
                  {result.outflowRodSide.toFixed(4)}
                </ResultText>
              </ResultsContainer>

              <ResultsContainer>
                <ResultTitle>Ratio - Bore Side</ResultTitle>
                <ResultText>{result.ratioBoreSide.toFixed(4)}</ResultText>
              </ResultsContainer>
            </>
          )}
        </StyledScrollView>
      </Container>
    </>
  );
};
