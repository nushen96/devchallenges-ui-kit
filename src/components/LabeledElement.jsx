import styled from "styled-components";

const ElementLabel = styled.p`
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  color: ${(props) => (props.secondState ? "var(--gray3)" : "var(--gray1)")};
  margin-bottom: 0.5rem;
  font-size: 85%;
`;

const LabeledElement = styled.div`
  min-width: 15rem;
  margin-right: 1rem;
  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    min-width: 10rem;
    margin-right: 0.5rem;
    margin-top: 1rem;
  }
`

const LabeledElementWrapper = ({children, label, secondState}) => {
  return (
    <LabeledElement>
      <ElementLabel secondState={secondState}>{label}</ElementLabel>
      {children}
    </LabeledElement>
  );
};

export default LabeledElementWrapper;
