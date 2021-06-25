import React, {useState} from 'react'
import { FormGroup, ErrorMsg, Label } from '../index.styles';
import { StyledSelect } from './index.styles';
// import ExpandMoreIcon from '../../../assets/expand_more.svg';
import Image from 'next/image'

export const  SelectInput = ({ options, placeholder, label, isError, errorMsg, onBlur, ...props}) => {
    const [isFocused, setIsFocused] = useState(false);
  const showError = isError && !isFocused;

    return (
      <FormGroup>
        <Label>{label}</Label>
        <StyledSelect
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur(e);
          }}
          showError={showError}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </StyledSelect>
        {showError ? (
          <ErrorMsg style={{ textTransform: 'capitalize' }}>
            {errorMsg}
          </ErrorMsg>
        ) : null}
      </FormGroup>
    );
}

export default SelectInput
