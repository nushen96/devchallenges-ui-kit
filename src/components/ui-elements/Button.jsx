import styled, { css } from "styled-components";

const defaultHoverStyles = css`
  background-color: #aeaeae;
`;
const primaryHoverStyles = null;
const secondaryHoverStyles = null;
const dangerHoverStyles = null;
const backgroundlessStyles = css`
  background-color: transparent;
  color: var(--blue1);
`;
const backgroundlessHoverStyles = css`
  background-color: rgba(41, 98, 255, 0.1);
`;
const textHoverStyles = null;

const Button = styled.button`
  padding: 0.6rem 1rem;
  font-family: "Noto Sans JP", sans-serif;
  color: var(--gray4);
  background-color: #e0e0e0;
  border: none;
  border-radius: 6px;

  &:hover,
  &:focus {
    ${defaultHoverStyles},
  }

  ${(props) => props.secondState && defaultHoverStyles}

  ${(props) =>
    props.variant === "outline" &&
    backgroundlessStyles +
      `
        border: 1px solid var(--blue1);
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
      &:hover,
      &:focus {
        ${backgroundlessHoverStyles}
      }
    `}
    
        ${(props) =>
    props.variant === "text" && props.secondState && backgroundlessHoverStyles}
`;
export default Button;
