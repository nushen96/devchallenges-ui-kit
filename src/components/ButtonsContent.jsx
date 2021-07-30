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
      <ContentRow>
        <LabeledElement label="<Button disabled />">
          <Button disabled>Disabled</Button>
        </LabeledElement>
        <LabeledElement label="<Button variant=”text” disabled />">
          <Button disabled variant="text">Disabled</Button>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Button startIcon=”local_grocery_store” />">
          <Button startIcon="local_grocery_store">Default</Button>
        </LabeledElement>
        <LabeledElement label="<Button endIcon=”local_grocery_store” />">
          <Button endIcon="local_grocery_store">Default</Button>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Button size=”sm” />">
          <Button size='sm'>Default</Button>
        </LabeledElement>
        <LabeledElement label="<Button size=”md” />">
          <Button size='md'>Default</Button>
        </LabeledElement>
        <LabeledElement label="<Button size=”lg” />">
          <Button size='lg'>Default</Button>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Button color=”default” />">
          <Button>Default</Button>
        </LabeledElement>
        <LabeledElement label="<Button color=”primary” />">
          <Button color="primary">Primary</Button>
        </LabeledElement>
        <LabeledElement label="<Button color=”secondary” />">
          <Button color="secondary">Secondary</Button>
        </LabeledElement>
        <LabeledElement label="<Button color=”danger” />">
          <Button color="danger">Danger</Button>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="&:hover, &:focus" secondState>
          <Button>Default</Button>
        </LabeledElement>
        <LabeledElement label="&nbsp;">
          <Button color="primary" secondState>Primary</Button>
        </LabeledElement>
        <LabeledElement label="&nbsp;">
          <Button color="secondary" secondState>Secondary</Button>
        </LabeledElement>
        <LabeledElement label="&nbsp;">
          <Button color="danger" secondState>Danger</Button>
        </LabeledElement>
      </ContentRow>
    </MainContent>
  );
};

export default ButtonsContent;
