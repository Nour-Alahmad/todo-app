
import React from 'react';

export const SettingsContext = React.createContext();
export default function SettingsProvider(props) {
    const defaultSettings = {
        displayItems: 3,
        hideCompleted: true,
        difficulty: '1',
      };
      
    return (
        <SettingsContext.Provider value={defaultSettings}>
            {props.children}
        </SettingsContext.Provider>
    )
}