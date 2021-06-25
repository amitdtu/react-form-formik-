import styled from 'styled-components';

// basic input elements

export const FormGroup = styled.div`
  margin: ${(props) => props.theme.input.margin};
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  .desc {
    color: ${(props) => props.theme.input.label.labelDescColor};
    font-size: ${(props) => props.theme.input.label.labelDescFontSize};
  }
`;

export const Label = styled.label`
  font-weight: ${(props) => props.theme.input.label.fontWeight};
  font-size: 14px;
  display: block;
  margin-bottom: ${(props) => props.theme.input.label.marginBottom};
`;

export const ErrorMsg = styled.span`
  color: ${(props) => props.theme.input.error.errorColor};
  font-size: ${(props) => props.theme.input.error.fontSize};
  line-height: ${(props) => props.theme.input.error.lineHeight};
  text-transform: capitalize;
`;
