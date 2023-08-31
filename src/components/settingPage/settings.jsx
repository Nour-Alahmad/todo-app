import React, { useState } from 'react';
import { Card, Grid, TextInput, Switch, Button } from '@mantine/core';
import { useSettings } from '../context/SettingsProvider';

function SettingsPage() {
  const [settings, setSettings] = useSettings();
  const [displayItems, setDisplayItems] = useState(settings.displayItems);
  const [hideCompleted, setHideCompleted] = useState(settings.hideCompleted);

  const handleSaveSettings = () => {
    setSettings({
      displayItems: displayItems,
      hideCompleted: hideCompleted,
    });
  };

  return (
    <Card shadow="sm" style={{ padding: '16px' }}>
      <h2>Settings</h2>
      <Grid gutter="md">
        <TextInput
          label="Display Items"
          type="number"
          value={displayItems}
          onChange={(value) => setDisplayItems(value)}
        />
        <Switch
          label="Hide Completed Items"
          checked={hideCompleted}
          onChange={(value) => setHideCompleted(value)}
        />
        <Button onClick={handleSaveSettings}>Save Settings</Button>
      </Grid>
    </Card>
  );
}

export default SettingsPage;
