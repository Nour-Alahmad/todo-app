import React from 'react';

import ToDo from './components/todo/todo.jsx';
import Settings  from './components/context/SettingsProvider.jsx'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <>
       <Settings>
         <ToDo />
      </Settings>
      </>
     
     
    );
  }
}