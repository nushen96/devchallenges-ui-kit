import MainContent from "./MainContent";
import ContentRow from "./ContentRow";
import LabeledElement from "./LabeledElement";
import Button from "./ui-elements/Button";
const ButtonsContent = () => {
  return (
    <MainContent>
      <ContentRow>
        <LabeledElement label="<Button />">
          <Button>Default</Button>
        </LabeledElement>
        <LabeledElement label="&:hover, &:focus" secondState>
          <Button secondState>Default</Button>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Button variant=”outline” />">
          <Button variant="outline">Outline</Button>
        </LabeledElement>
        <LabeledElement label="&:hover, &:focus" secondState>
          <Button variant="outline" secondState>
            Outline
          </Button>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Button variant=”text” />">
          <Button variant="text">Outline</Button>
        </LabeledElement>
        <LabeledElement label="&:hover, &:focus" secondState>
          <Button variant="text" secondState>
            Outline
          </Button>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Button disableShadow />">
          <Button disableShadow>No shadow</Button>
        </LabeledElement>
      </ContentRow>
    </MainContent>
  );
};

export default ButtonsContent;
