"use client";

import React, { useState } from "react";
import { 
  Tabs, 
  Tab, 
  Box, 
  Typography
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function TabsShowcase() {
  const [value, setValue] = useState(0);
  const [verticalValue, setVerticalValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleVerticalChange = (event: React.SyntheticEvent, newValue: number) => {
    setVerticalValue(newValue);
  };

  const basicTabsCode = `const [value, setValue] = useState(0);

<Tabs value={value} onChange={handleChange}>
  <Tab label="Item One" />
  <Tab label="Item Two" />
  <Tab label="Item Three" />
</Tabs>
<TabPanel value={value} index={0}>
  Item One Content
</TabPanel>
<TabPanel value={value} index={1}>
  Item Two Content
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three Content
</TabPanel>`;

  const tabsWithIconsCode = `<Tabs value={value} onChange={handleChange}>
  <Tab icon={<AccountCircleIcon />} label="Profile" />
  <Tab icon={<SettingsIcon />} label="Settings" />
  <Tab icon={<InfoIcon />} label="About" />
</Tabs>`;

  return (
    <ShowcaseLayout
      title="Tabs"
      description="Tabs organize content across different screens, data sets, and other interactions. They allow users to switch between related views at the same level of hierarchy."
    >
      {/* Basic Tabs */}
      <ComponentSection 
        title="Basic Tabs"
        description="Simple tabs with text labels."
      >
        <LiveExample>
          <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Overview" />
              <Tab label="Details" />
              <Tab label="Settings" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Typography>
                Overview content: This tab contains general information and summary data.
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography>
                Details content: Here you can find detailed information and specifications.
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography>
                Settings content: Configure your preferences and options here.
              </Typography>
            </TabPanel>
          </Box>
        </LiveExample>
        <CodeBlock code={basicTabsCode} title="BasicTabs.tsx" />
      </ComponentSection>

      {/* Tabs with Icons */}
      <ComponentSection 
        title="Tabs with Icons"
        description="Enhance tabs with icons for better visual identification."
      >
        <LiveExample>
          <Box sx={{ width: '100%' }}>
            <Tabs value={verticalValue} onChange={handleVerticalChange}>
              <Tab icon={<AccountCircleIcon />} label="Profile" />
              <Tab icon={<SettingsIcon />} label="Settings" />
              <Tab icon={<InfoIcon />} label="About" />
            </Tabs>
            <TabPanel value={verticalValue} index={0}>
              <Typography>
                Profile information and user details are displayed here.
              </Typography>
            </TabPanel>
            <TabPanel value={verticalValue} index={1}>
              <Typography>
                Application settings and configuration options.
              </Typography>
            </TabPanel>
            <TabPanel value={verticalValue} index={2}>
              <Typography>
                Information about the application and version details.
              </Typography>
            </TabPanel>
          </Box>
        </LiveExample>
        <CodeBlock code={tabsWithIconsCode} title="TabsWithIcons.tsx" />
      </ComponentSection>

      {/* Centered Tabs */}
      <ComponentSection 
        title="Centered Tabs"
        description="Center tabs for a more balanced layout."
      >
        <LiveExample>
          <Box sx={{ width: '100%' }}>
            <Tabs value={0} centered>
              <Tab label="Dashboard" />
              <Tab label="Analytics" />
              <Tab label="Reports" />
            </Tabs>
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography>
                Centered tabs provide a more balanced visual layout.
              </Typography>
            </Box>
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Scrollable Tabs */}
      <ComponentSection 
        title="Scrollable Tabs"
        description="Tabs that scroll when there are many items."
      >
        <LiveExample>
          <Box sx={{ width: '100%' }}>
            <Tabs 
              value={0} 
              variant="scrollable" 
              scrollButtons="auto"
              sx={{ maxWidth: 400 }}
            >
              <Tab label="Tab One" />
              <Tab label="Tab Two" />
              <Tab label="Tab Three" />
              <Tab label="Tab Four" />
              <Tab label="Tab Five" />
              <Tab label="Tab Six" />
              <Tab label="Tab Seven" />
            </Tabs>
            <Box sx={{ p: 3 }}>
              <Typography>
                Scrollable tabs are useful when you have many tab options.
              </Typography>
            </Box>
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using tabs effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use for content that's related but distinct</li>
              <li>Keep tab labels short and descriptive</li>
              <li>Maintain consistent content structure across tabs</li>
              <li>Consider using icons for better recognition</li>
              <li>Limit the number of tabs (typically 5-7)</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't use for sequential workflows (use stepper instead)</li>
              <li>Avoid tabs for unrelated content</li>
              <li>Don't nest tabs within tabs</li>
              <li>Avoid very long tab labels</li>
              <li>Don't use for primary navigation</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}