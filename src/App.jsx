import React from 'react';
import { Route, Routes,Link } from "react-router-dom";

import { SettingsProvider } from './components/context/SettingsProvider';
import ToDo from './components/todo/todo'; // Your existing ToDo component
import SettingsPage from './components/settingPage/settings';

function App() {
  return (
    <SettingsProvider>
        <Routes>
     

       
          <Route path="/" exact component={ToDo} />
          <Route path="/settings" component={SettingsPage} />
       
      </Routes>
    </SettingsProvider>
  );
}

export default App;
