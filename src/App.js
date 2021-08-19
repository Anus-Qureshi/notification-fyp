import logo from "./logo.svg";
import "./App.css";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css";
import Home from "./Component/home"

function App() {

  const a = prompt("Enter the vale of a")
  if (a == 45 ) 
  {
    console.log("if condition is true");
  }
  else {
    console.log("a is not equal to 45")
  }
  
  return (
    <div className="App">
      This is my Application
      <ReactNotification />
      <Home />
    </div>
  );
}

export default App;
