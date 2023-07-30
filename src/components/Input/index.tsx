import React, { useState, useEffect } from "react";
import { TextInputProps } from "react-native";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

import {
  CustomInputContainer,
  CustomInputContent,
  CustomInputIcon,
  ErrorContainer,
  ErrorMessage,
  ErrorIcon,
} from "./styles";

interface CustomInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  icon?: string;
  isError?: boolean;
  error?: string;
  editable?: boolean;
  focusedField: string | null;
  setFocusedField: (field: string | null) => void;
}

export const CustomInput = <T extends FieldValues>({
  control,
  name,
  icon,
  error,
  editable,
  focusedField,
  setFocusedField,
  ...rest
}: CustomInputProps<T>) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    setIsInputFocused(focusedField === name);
  }, [focusedField, name]);

  const handleFocus = () => {
    setFocusedField(name);
  };

  const handleBlur = () => {
    if (focusedField === name) {
      setFocusedField(null);
    }
  };

  return (
    <>
      <CustomInputContainer isFocused={isInputFocused} isError={!!error}>
        {icon && (
          <CustomInputIcon
            isFocused={isInputFocused}
            isError={!!error}
            name={icon}
          />
        )}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomInputContent
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={(value: string) => onChange(value)}
              value={value}
              editable={editable}
              {...rest}
            />
          )}
          name={name}
        />
      </CustomInputContainer>
      {error && (
        <ErrorContainer>
          <ErrorIcon name="alert-circle" size={20} />
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
      )}
    </>
  );
};
