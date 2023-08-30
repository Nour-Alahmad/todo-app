import React from 'react';

import ToDo from './components/todo/todo.jsx';
import Settings  from './components/context/SettingsProvider.jsx'


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