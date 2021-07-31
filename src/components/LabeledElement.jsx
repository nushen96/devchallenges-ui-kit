import styled from "styled-components";

const ElementLabel = styled.p`
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  color: ${(props) => (props.secondState ? "var(--gray3)" : "var(--gray1)")};
  margin-bottom: 0.5rem;
  font-size: 85%;
`;

const LabeledElement = styled.div`
  min-width: 12rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    min-width: 10rem;
    margin-right: 0.5rem;
    &:first-child {
      margin-left: 0;
    }
  }
`;

const LabeledElementWrapper = ({ children, label, secondState }) => {
  return (
    <LabeledElement>
      <ElementLabel secondState={secondState}>{label}</ElementLabel>
      {children}
    </LabeledElement>
  );
};

export default LabeledElementWrapper;
