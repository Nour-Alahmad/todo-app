import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
    <App />
  </BrowserRouter>
    
    
      )
  }
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Main />);
