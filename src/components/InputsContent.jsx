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
        <LabeledElement label="<Input error />" secondState>
          <Input placeholder="Placeholder" error></Input>
        </LabeledElement>
        <LabeledElement label="&:hover" secondState>
          <Input placeholder="Placeholder" state="hover"></Input>
        </LabeledElement>
        <LabeledElement label="&:focus" secondState>
          <Input placeholder="Placeholder" error></Input>
        </LabeledElement>
      </ContentRow>
    </MainContent>
  );
};

export default InputsContent;
