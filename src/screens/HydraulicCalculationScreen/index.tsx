import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@components/Button";
import { CustomInput } from "@components/Input";

import { calculate, CalculationData, ResultData } from "@utils/calculate";

import {
  Container,
  Title,
  StyledScrollView,
  InputContainer,
  ResultsContainer,
  ResultTitle,
  ResultText,
} from "./styles";

interface IFormInput {
  boreDiameter: string;
  rodDiameter: string;
  stroke: string;
  pressure: string;
  oilFlow: string;
}

export const HydraulicCalculationScreen: React.FC = () => {
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

    const result: ResultData = calculate(numericData);

    setResult(result);
  };

  return (
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

        <Button onPress={() => handleSubmit(onSubmit)()}>Calculate</Button>

        {result && (
          <>
            <ResultsContainer>
              <ResultTitle>Área - Bore Side - Rod Side - cm2</ResultTitle>
              <ResultText>
                Bore Side: {result.areaBoreSide.toFixed(2)}, Rod Side:{" "}
                {result.areaRodSide.toFixed(2)}
              </ResultText>
            </ResultsContainer>

            <ResultsContainer>
              <ResultTitle>Volume - Bore Side - Rod Side - I</ResultTitle>
              <ResultText>
                Bore Side: {result.volumeBoreSide.toFixed(2)}, Rod Side:{" "}
                {result.volumeRodSide.toFixed(2)}
              </ResultText>
            </ResultsContainer>

            <ResultsContainer>
              <ResultTitle>Force - Bore Side - Rod Side - kN</ResultTitle>
              <ResultText>
                Bore Side: {result.forceBoreSide.toFixed(2)}, Rod Side:{" "}
                {result.forceRodSide.toFixed(2)}
              </ResultText>
            </ResultsContainer>

            <ResultsContainer>
              <ResultTitle>Time - Bore Side - Rod Side - sec</ResultTitle>
              <ResultText>
                Bore Side: {result.timeBoreSide.toFixed(2)}, Rod Side:{" "}
                {result.timeRodSide.toFixed(2)}
              </ResultText>
            </ResultsContainer>

            <ResultsContainer>
              <ResultTitle>Velocity - Bore Side - Rod Side - m/s</ResultTitle>
              <ResultText>
                Bore Side: {result.velocityBoreSide.toFixed(2)}, Rod Side:{" "}
                {result.velocityRodSide.toFixed(2)}
              </ResultText>
            </ResultsContainer>

            <ResultsContainer>
              <ResultTitle>Outflow - Bore Side - Rod Side - ipm</ResultTitle>
              <ResultText>
                Bore Side: {result.outflowBoreSide.toFixed(2)}, Rod Side:{" "}
                {result.outflowRodSide.toFixed(2)}
              </ResultText>
            </ResultsContainer>

            <ResultsContainer>
              <ResultTitle>Ratio - Bore Side</ResultTitle>
              <ResultText>{result.ratioBoreSide.toFixed(2)}</ResultText>
            </ResultsContainer>
          </>
        )}
      </StyledScrollView>
    </Container>
  );
};
