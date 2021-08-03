import MainContent from "./MainContent";
import ContentRow from "./ContentRow";
import LabeledElement from "./LabeledElement";
import Input from "./ui-elements/Input";

const InputsContent = () => {
  return (
    <MainContent>
      <ContentRow>
        <LabeledElement label="<Input />">
          <Input placeholder="Placeholder"></Input>
        </LabeledElement>
        <LabeledElement label="&:hover" secondState>
          <Input placeholder="Placeholder" state="hover"></Input>
        </LabeledElement>
        <LabeledElement label="&:focus" secondState>
          <Input placeholder="Placeholder" state="focus"></Input>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Input error />">
          <Input placeholder="Placeholder" error></Input>
        </LabeledElement>
        <LabeledElement label="&:hover" secondState>
          <Input placeholder="Placeholder" state="hover"></Input>
        </LabeledElement>
        <LabeledElement label="&:focus" secondState>
          <Input placeholder="Placeholder" error></Input>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Input disabled />">
          <Input placeholder="Placeholder" disabled></Input>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Input helperText=”Some interesting text” />">
          <Input
            placeholder="Placeholder"
            helperText="Some interesting text"
          ></Input>
        </LabeledElement>
        <LabeledElement label="<Input helperText=”Some interesting text” error />">
          <Input
            placeholder="Placeholder"
            helperText="Some interesting text"
            error
          ></Input>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Input startIcon=”phone” />">
          <Input placeholder="Placeholder" startIcon="phone"></Input>
        </LabeledElement>
        <LabeledElement label="<Input endIcon=”email” />">
          <Input placeholder="Placeholder" endIcon="email"></Input>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Input value=”Text” />">
          <Input placeholder="Placeholder" value="Text"></Input>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Input size=”sm” />">
          <Input placeholder="Placeholder" size="sm"></Input>
        </LabeledElement>
        <LabeledElement label="<Input size=”md” />">
          <Input placeholder="Placeholder" size="md"></Input>
        </LabeledElement>
      </ContentRow>
      <ContentRow>
        <LabeledElement label="<Input fullWidth />" fullWidth>
          <Input placeholder="Placeholder" fullWidth></Input>
        </LabeledElement>
      </ContentRow>
    </MainContent>
  );
};

export default InputsContent;
