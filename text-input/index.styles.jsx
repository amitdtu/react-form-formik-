import styled from 'styled-components';
const visibilityIcon = require('../../assets/visibility.svg').default.src;
const visibilityOffIcon = require('../../assets/visibility_off.svg').default
  .src;

const togglePasswordIcon = (props) =>
  props.isShowPassword ? visibilityOffIcon : visibilityIcon;



export const StyledInput = styled.input.attrs((props) => ({
  type: props.isShowPassword ? 'text' : props.type,
}))`
  border: solid 1px
    ${(props) =>
      props.showError
        ? props.theme.input.error.errorColor
        : props.theme.input.field.border};
  border-radius: 6px;
  box-shadow: inset 1px 1px 4px 0 rgb(17 24 39 / 12%);
  padding: ${(props) => props.theme.input.field.padding};
  width: 100%;
  outline: none;
  margin-bottom: ${(props) => props.theme.input.field.marginBottom};

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: ${(props) => props.theme.input.field.placeholderColor};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: block;

  .icon {
    background: url(${(props) => togglePasswordIcon(props)}) center / contain
      no-repeat;
    height: 1rem;
    width: 1rem;
    position: absolute;
    bottom: 30%;
    right: 3%;
    cursor: pointer;
  }
`;


