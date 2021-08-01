import styled, { css } from "styled-components";
import {useState} from 'react'

const defaultHoverStyles = css`
  border-color: var(--gray1);
`;

const defaultContainerFocusStyles = css`
  border-color: var(--primary);
`;

const defaultLabelFocusStyles = css`
  color: var(--primary);
`;

const Input = styled.input`
  border: none;
  font-size: inherit;
  font-weight: inherit;
  flex: 1;
  outline: none;
`;

const InputContainer = styled.div`
  border: 1px solid var(--gray3);
  border-radius: 6px;
  padding: 1.3em 0.9em;
  gap: 0.2em;
  display: flex;
  justify-content: space-between;

  &:hover {
    ${defaultHoverStyles}
  }

  ${(props) => props.state === "hover" && defaultHoverStyles}
`;

const InputLabel = styled.label`
  font-size: 0.9em;
  font-weight: 400;
`;

const LabeledInput = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans JP", sans-serif;

  ${props => props.state==="focus" && `
    & > .input-container {
        ${defaultContainerFocusStyles}
    }

    & > .input-label {
        ${defaultLabelFocusStyles}
    }
  `}
`;

const InputWrapper = (props) => {
    const [isFocused, setIsFocused] = useState(false)
  return (
    <LabeledInput {...props}>
      <InputLabel isFocused={isFocused} className="input-label" {...props}>
        Label
      </InputLabel>
      <InputContainer isFocused={isFocused} className="input-container" {...props}>
        <Input onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
          className="input-area"
          {...props}
          placeholder={props.placeholder}
        ></Input>
      </InputContainer>
    </LabeledInput>
  );
};

export default InputWrapper;
