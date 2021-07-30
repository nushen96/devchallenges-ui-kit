import styled, { css } from "styled-components";

const defaultHoverStyles = css`
  background-color: #aeaeae;
`;
const primaryHoverStyles = css`
  background-color: var(--primary-dark);
`;
const secondaryHoverStyles = css`
  background-color: var(--secondary-dark);
`;
const dangerHoverStyles = css`
  background-color: var(--danger-dark);
`;
const backgroundlessStyles = css`
  background-color: transparent;
  color: var(--outline);
`;
const backgroundlessHoverStyles = css`
  background-color: rgba(41, 98, 255, 0.1);
`;
const textHoverStyles = null;
const buttonWithIconStyles = css`
  display: flex;
  align-items: center;
  &::before {
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

const Button = styled.button`
  padding: 0.6rem 1rem;
  font-family: "Noto Sans JP", sans-serif;
  color: var(--gray4);
  background-color: #e0e0e0;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 2px 3px var(--default-shadow);

  &:hover,
  &:focus {
    ${defaultHoverStyles},
  }

  ${(props) => props.secondState && defaultHoverStyles}

  ${(props) =>
    props.variant === "outline" &&
    backgroundlessStyles +
      `
        border: 1px solid var(--outline);
        &:hover,
        &:focus {
          ${backgroundlessHoverStyles}
        }
      `}

    ${(props) =>
    props.variant === "outline" &&
    props.secondState &&
    backgroundlessHoverStyles}

    ${(props) =>
    props.variant === "text" &&
    backgroundlessStyles +
      `
      box-shadow: unset;
      &:hover,
      &:focus {
        ${backgroundlessHoverStyles}
      }
    `}
    
        ${(props) =>
    props.variant === "text" && props.secondState && backgroundlessHoverStyles}
    
    ${(props) =>
    props.disableShadow &&
    css`
      box-shadow: unset;
    `}

    ${(props) =>
    props.disabled &&
    css`
      &,
      &:hover {
        color: var(--gray5);
        pointer-events: none;
        background-color: ${(props) =>
          props.variant === "text" ? "transparent" : "var(--default)"};
      }
    `}

    ${(props) => {
    return (
      props.startIcon &&
      buttonWithIconStyles +
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
      buttonWithIconStyles +
        `
      &::after {
        content:'${props.endIcon}';
        margin-left: 0.5rem;
      }
    `
    );
  }}

  ${(props) =>
    props.size &&
    `
    padding: ${
      props.size === "sm"
        ? "0.4rem 0.8rem"
        : props.size === "lg"
        ? "0.8rem 1.3rem"
        : "0.5rem 1rem"
    }
  `}

  ${(props) =>
    props.color &&
    props.color !== "default" &&
    `
      color: #fff;
    `}
  

  ${(props) =>
    props.color === "primary" &&
    `
      background-color: var(--primary);
      box-shadow: 0px 2px 3px var(--primary-shadow);
      &:hover,
      &:focus {
        ${primaryHoverStyles},
      }

      ${props.secondState && primaryHoverStyles}

    `}

    ${(props) =>
    props.color === "secondary" &&
    `
        background-color: var(--secondary);
        box-shadow: 0px 2px 3px var(--secondary-shadow);
        
        &:hover,
        &:focus {
          ${secondaryHoverStyles},
        }
  
        ${props.secondState && secondaryHoverStyles}
  
      `}

      ${(props) =>
    props.color === "danger" &&
    `
          background-color: var(--danger);
          box-shadow: 0 2px 3px var(--danger-shadow);
          &:hover,
          &:focus {
            ${dangerHoverStyles},
          }
    
          ${props.secondState && dangerHoverStyles}
    
        `}
`;
export default Button;
