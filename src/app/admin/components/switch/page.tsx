"use client";

import React, { useState } from "react";
import { 
  Switch, 
  FormControlLabel, 
  FormGroup, 
  FormControl, 
  FormLabel, 
  Box, 
  Typography
} from "@mui/material";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function SwitchShowcase() {
  const [checked, setChecked] = useState(true);
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false
  });

  const handleSettingChange = (setting: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({
      ...prev,
      [setting]: event.target.checked
    }));
  };

  const basicSwitchCode = `const [checked, setChecked] = useState(true);

<Switch 
  checked={checked} 
  onChange={(e) => setChecked(e.target.checked)} 
/>

<FormControlLabel
  control={
    <Switch 
      checked={checked} 
      onChange={(e) => setChecked(e.target.checked)} 
    />
  }
  label="Enable notifications"
/>`;

  const switchColorsCode = `<Switch defaultChecked color="primary" />
<Switch defaultChecked color="secondary" />
<Switch defaultChecked color="success" />
<Switch defaultChecked color="error" />
<Switch defaultChecked color="warning" />
<Switch defaultChecked color="info" />`;

  const switchSizesCode = `<Switch size="small" defaultChecked />
<Switch size="medium" defaultChecked />`;

  const switchStatesCode = `<Switch defaultChecked />
<Switch disabled />
<Switch defaultChecked disabled />`;

  const switchGroupCode = `const [settings, setSettings] = useState({
  notifications: true,
  darkMode: false,
  autoSave: true,
  analytics: false
});

<FormControl component="fieldset">
  <FormLabel component="legend">Settings</FormLabel>
  <FormGroup>
    <FormControlLabel
      control={
        <Switch 
          checked={settings.notifications}
          onChange={handleSettingChange('notifications')}
        />
      }
      label="Push Notifications"
    />
    <FormControlLabel
      control={
        <Switch 
          checked={settings.darkMode}
          onChange={handleSettingChange('darkMode')}
        />
      }
      label="Dark Mode"
    />
  </FormGroup>
</FormControl>`;

  const customSwitchCode = `<Switch
  sx={{
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: 'success.main',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'success.main',
    },
  }}
  defaultChecked
/>`;

  return (
    <ShowcaseLayout
      title="Switch"
      description="Switches toggle the state of a single setting on or off. They are the preferred way to adjust settings on mobile and provide immediate results."
    >
      {/* Basic Switch */}
      <ComponentSection 
        title="Basic Switch"
        description="Simple switches with and without labels."
      >
        <LiveExample>
          <Switch 
            checked={checked} 
            onChange={(e) => setChecked(e.target.checked)} 
          />
          <FormControlLabel
            control={
              <Switch 
                checked={checked} 
                onChange={(e) => setChecked(e.target.checked)} 
              />
            }
            label="Enable notifications"
          />
        </LiveExample>
        <CodeBlock code={basicSwitchCode} title="BasicSwitch.tsx" />
      </ComponentSection>

      {/* Switch Colors */}
      <ComponentSection 
        title="Switch Colors"
        description="Use different colors to match your design system or indicate different types of settings."
      >
        <LiveExample>
          <Switch defaultChecked color="primary" />
          <Switch defaultChecked color="secondary" />
          <Switch defaultChecked color="success" />
          <Switch defaultChecked color="error" />
          <Switch defaultChecked color="warning" />
          <Switch defaultChecked color="info" />
        </LiveExample>
        <CodeBlock code={switchColorsCode} title="SwitchColors.tsx" />
      </ComponentSection>

      {/* Switch Sizes */}
      <ComponentSection 
        title="Switch Sizes"
        description="Control the size of switches using the size prop."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Switch size="small" defaultChecked />
            <Typography variant="body2">Small</Typography>
            <Switch size="medium" defaultChecked />
            <Typography variant="body2">Medium</Typography>
          </Box>
        </LiveExample>
        <CodeBlock code={switchSizesCode} title="SwitchSizes.tsx" />
      </ComponentSection>

      {/* Switch States */}
      <ComponentSection 
        title="Switch States"
        description="Different states of switches including normal, disabled, and checked disabled."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Normal"
            />
            <FormControlLabel
              control={<Switch disabled />}
              label="Disabled"
            />
            <FormControlLabel
              control={<Switch defaultChecked disabled />}
              label="Checked Disabled"
            />
          </Box>
        </LiveExample>
        <CodeBlock code={switchStatesCode} title="SwitchStates.tsx" />
      </ComponentSection>

      {/* Switch Group */}
      <ComponentSection 
        title="Switch Group"
        description="Group multiple switches together for related settings."
      >
        <LiveExample>
          <FormControl component="fieldset">
            <FormLabel component="legend">Application Settings</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch 
                    checked={settings.notifications}
                    onChange={handleSettingChange('notifications')}
                  />
                }
                label="Push Notifications"
              />
              <FormControlLabel
                control={
                  <Switch 
                    checked={settings.darkMode}
                    onChange={handleSettingChange('darkMode')}
                  />
                }
                label="Dark Mode"
              />
              <FormControlLabel
                control={
                  <Switch 
                    checked={settings.autoSave}
                    onChange={handleSettingChange('autoSave')}
                  />
                }
                label="Auto Save"
              />
              <FormControlLabel
                control={
                  <Switch 
                    checked={settings.analytics}
                    onChange={handleSettingChange('analytics')}
                  />
                }
                label="Analytics Tracking"
              />
            </FormGroup>
          </FormControl>
        </LiveExample>
        <CodeBlock code={switchGroupCode} title="SwitchGroup.tsx" />
      </ComponentSection>

      {/* Custom Switch */}
      <ComponentSection 
        title="Custom Styled Switch"
        description="Customize switch appearance with custom colors and styling."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: 'success.main',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: 'success.main',
                    },
                  }}
                  defaultChecked
                />
              }
              label="Custom Green Switch"
            />
            <FormControlLabel
              control={
                <Switch
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: 'purple',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: 'purple',
                    },
                  }}
                  defaultChecked
                />
              }
              label="Custom Purple Switch"
            />
          </Box>
        </LiveExample>
        <CodeBlock code={customSwitchCode} title="CustomSwitch.tsx" />
      </ComponentSection>

      {/* Settings Panel Example */}
      <ComponentSection 
        title="Settings Panel Example"
        description="A practical example of switches in a settings interface."
      >
        <Box sx={{ maxWidth: 400, p: 2, border: 1, borderColor: 'divider', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Privacy Settings
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch 
                  checked={settings.notifications}
                  onChange={handleSettingChange('notifications')}
                  color="primary"
                />
              }
              label="Email Notifications"
            />
            <FormControlLabel
              control={
                <Switch 
                  checked={settings.analytics}
                  onChange={handleSettingChange('analytics')}
                  color="warning"
                />
              }
              label="Usage Analytics"
            />
            <FormControlLabel
              control={
                <Switch 
                  checked={settings.autoSave}
                  onChange={handleSettingChange('autoSave')}
                  color="success"
                />
              }
              label="Auto-save Documents"
            />
          </FormGroup>
        </Box>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using switches effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use for binary settings that take effect immediately</li>
              <li>Provide clear labels that describe what the switch controls</li>
              <li>Use positive language for switch labels</li>
              <li>Group related switches together</li>
              <li>Consider the default state carefully</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use for actions that require confirmation</li>
              <li>Avoid using switches for navigation or page changes</li>
              <li>Don't use negative language in switch labels</li>
              <li>Avoid using switches when the action has delayed effects</li>
              <li>Don't overuse switches in a single interface</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}