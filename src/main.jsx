import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App.jsx';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Main />);