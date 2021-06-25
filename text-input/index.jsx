import React, { useState } from 'react';
import { StyledInput, InputWrapper } from './index.styles';
import { FormGroup, ErrorMsg, Label, LabelWrapper } from '../index.styles';

const Input = ({
  label,
  className = '',
  labelDesc = '',
  isError,
  errorMsg,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const InputIcon =
    props.type === 'password' ? (
      <div
        className="icon"
        onClick={() => setIsShowPassword(!isShowPassword)}
      ></div>
    ) : null;

  const showError = isError && !isFocused;

  console.log('inputs');

  return (
    <>
      <FormGroup className={className}>
        <LabelWrapper>
          <Label>{label}</Label>
          <div className="desc">{labelDesc ? labelDesc : null}</div>
        </LabelWrapper>
        <InputWrapper isShowPassword={isShowPassword}>
          <StyledInput
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur && onBlur(e);
            }}
            showError={showError}
            isShowPassword={isShowPassword}
            {...props}
          />
          {InputIcon}
        </InputWrapper>
        {showError ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
      </FormGroup>
    </>
  );
};

export const EmailInput = (props) => {
  return <Input {...props} />;
};

export const TextInput = (props) => {
  return <Input type="text" {...props} />;
};

export const PasswordInput = (props) => {
  return <Input type="password" {...props} />;
};

export const NumberInput = (props) => {
  return <Input type="number" {...props} />;
};
