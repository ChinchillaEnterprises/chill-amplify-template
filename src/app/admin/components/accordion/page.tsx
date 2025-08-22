"use client";

import React from "react";
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function AccordionShowcase() {
  const basicAccordionCode = `<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography>Panel 1</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Panel 1 content goes here.
    </Typography>
  </AccordionDetails>
</Accordion>`;

  return (
    <ShowcaseLayout
      title="Accordion"
      description="Accordions contain creation flows and allow lightweight editing of an element. They can display content in a compact way by allowing users to expand and collapse sections."
    >
      {/* Basic Accordion */}
      <ComponentSection 
        title="Basic Accordion"
        description="Simple accordion with expandable sections."
      >
        <LiveExample>
          <Box sx={{ maxWidth: 600 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>General Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Configure your general application settings here. This includes basic preferences, 
                  language settings, and default behaviors.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Privacy & Security</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Manage your privacy settings and security preferences. Control who can see your 
                  information and how your data is used.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Notifications</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Choose which notifications you want to receive and how you want to be notified. 
                  Customize email, push, and in-app notification preferences.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </LiveExample>
        <CodeBlock code={basicAccordionCode} title="BasicAccordion.tsx" />
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using accordions effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use for grouping related content</li>
              <li>Keep section titles clear and descriptive</li>
              <li>Consider default expanded state for important sections</li>
              <li>Use consistent content structure within sections</li>
              <li>Provide visual feedback for expandable sections</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't nest accordions too deeply</li>
              <li>Avoid using for critical information that should always be visible</li>
              <li>Don't use when all content should be visible at once</li>
              <li>Avoid vague or unclear section titles</li>
              <li>Don't forget about keyboard navigation</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}