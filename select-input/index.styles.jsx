import styled from 'styled-components';
const ExpandMoreIcon = require('../../assets/expand_more.svg').default.src


export const StyledSelect = styled.select`

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

    background-image: url(${ExpandMoreIcon});
    appearance: none;
    background-repeat: no-repeat;
    background-position: right 0.5rem top 50%,0 0;

        text-transform: capitalize;

`
