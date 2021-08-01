import { useState, useEffect } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu";
import MainContainer from "./components/MainContainer";
import ButtonsContent from "./components/ButtonsContent";
import InputsContent from "./components/InputsContent"

function App() {
  const [displayedContentLabel, setDisplayedContentLabel] = useState("Inputs");
  const [displayedComponent, setDisplayedComponent] = useState(
    <ButtonsContent />
  );

  const handleContentChange = (label) => {
    setDisplayedContentLabel(label);
  };

  useEffect(() => {
    let correspondingComponent = null;
    switch (displayedContentLabel) {
      case "Colors":
        correspondingComponent = null;
        break;
      case "Typography":
        correspondingComponent = null;
        break;
      case "Spaces":
        correspondingComponent = null;
        break;
      case "Buttons":
        correspondingComponent = <ButtonsContent /> || null;
        break;
      case "Inputs":
        correspondingComponent = <InputsContent /> || null;
        break;
      case "Grids":
        correspondingComponent = null;
        break;

      default:
        correspondingComponent = <InputsContent /> || null;
        break;
    }
    setDisplayedComponent(correspondingComponent);
  }, [displayedContentLabel]);
  
  return (
    <div className="app">
      <SideMenu handleContentChange={handleContentChange}></SideMenu>
      <MainContainer
        title={displayedContentLabel}
        contentComponent={displayedComponent}
        content=""
      ></MainContainer>
    </div>
  );
}

export default App;
