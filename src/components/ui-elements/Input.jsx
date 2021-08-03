import styled, { css } from "styled-components";
import { useState } from "react";

const defaultHoverStyles = css`
  border-color: var(--gray1);
`;

const defaultContainerFocusStyles = css`
  border-color: var(--primary);
`;

const defaultLabelFocusStyles = css`
  color: var(--primary);
`;

const containerErrorStyles = css`
  border-color: var(--danger);
`;

const labelErrorStyles = css`
  color: var(--danger);
`;

const inputWithIconStyles = css`
  &::before {
    color: var(--gray3);
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 120%; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: "liga";
  }

  &::after {
    color: var(--gray3);
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 120%; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: "liga";
  }
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
  padding: ${(props) =>
    props.size && props.size === "sm" ? "0.7em 0.9em" : "1.3em 0.9em"};
  display: flex;
  align-items: center;
  ${(props) =>
    props.fullWidth &&
    `
    width: 100%;
  `}

  &:hover {
    ${defaultHoverStyles}
  }

  ${(props) => props.state === "hover" && defaultHoverStyles}
  ${(props) =>
    props.isFocused &&
    !props.error &&
    `
    &, &:hover {
        ${defaultContainerFocusStyles}
    }
  `}
  ${(props) => props.error && containerErrorStyles}
  ${(props) =>
    props.disabled &&
    `
    background-color: var(--gray6);
    border-color: #e0e0e0;
    pointer-events: none;
  `}

  ${(props) => {
    return (
      props.startIcon &&
      inputWithIconStyles +
        `
      &::before {
        content:'${props.startIcon}';
        margin-right: 0.5rem;
      }
    `
    );
  }}

  ${(props) => {
    return (
      props.endIcon &&
      inputWithIconStyles +
        `
      &::after {
        content:'${props.endIcon}';
        margin-left: 0.5rem;
      }
    `
    );
  }}
`;

const InputLabel = styled.label`
  font-size: 0.9em;
  font-weight: 400;

  ${(props) => props.isFocused && !props.error && defaultLabelFocusStyles}
  ${(props) => props.error && !props.isHovered && labelErrorStyles}
`;

const LabeledInput = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans JP", sans-serif;

  ${(props) => props.fullWidth && `width: 100%`}

  ${(props) =>
    props.state === "focus" &&
    `
    & > .input-container {
        ${defaultContainerFocusStyles}
    }

    & > .input-label {
        ${defaultLabelFocusStyles}
    }
  `}

  ${(props) =>
    props.helperText &&
    `
    &::after {
      content: "${props.helperText}";
      font-size: 72%;
      color: ${props.error ? "var(--danger)" : "var(--gray3)"}
    }
  `}
`;

const InputWrapper = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState(props.value || "");

  return (
    <LabeledInput isHovered={isHovered} {...props}>
      <InputLabel
        isHovered={isHovered}
        isFocused={isFocused}
        className="input-label"
        {...props}
      >
        Label
      </InputLabel>
      <InputContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isFocused={isFocused}
        isHovered={isHovered}
        className="input-container"
        {...props}
      >
        <Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="input-area"
          {...props}
          placeholder={props.placeholder}
          value={inputValue}
          onChange={(e) => {
            e.preventDefault();
            setInputValue(e.target.value);
          }}
        ></Input>
      </InputContainer>
    </LabeledInput>
  );
};

export default InputWrapper;
