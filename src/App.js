import "./App.css";
import SideMenu from "./components/SideMenu";
import MainContainer from "./components/MainContainer"
import ButtonsContent from "./components/ButtonsContent"

function App() {
  return (
    <div className="app">
      <SideMenu></SideMenu>
      <MainContainer title="Buttons" contentComponent={<ButtonsContent/>} content=""></MainContainer>
    </div>
  );
}

export default App;
