"use client";

import React from "react";
import { 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  ListItemAvatar, 
  Avatar, 
  Divider, 
  Box, 
  Typography,
  Switch,
  IconButton,
  Checkbox
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import StarIcon from "@mui/icons-material/Star";
import SendIcon from "@mui/icons-material/Send";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function ListsShowcase() {
  const basicListCode = `<List>
  <ListItem>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
  </ListItem>
  <ListItem>
    <ListItemIcon>
      <DraftsIcon />
    </ListItemIcon>
    <ListItemText primary="Drafts" />
  </ListItem>
</List>`;

  const clickableListCode = `<List>
  <ListItemButton>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
  </ListItemButton>
  <ListItemButton>
    <ListItemIcon>
      <StarIcon />
    </ListItemIcon>
    <ListItemText primary="Starred" />
  </ListItemButton>
</List>`;

  const listWithAvatarCode = `<List>
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText 
      primary="John Doe" 
      secondary="Software Engineer"
    />
  </ListItem>
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <WorkIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText 
      primary="Jane Smith" 
      secondary="Product Manager"
    />
  </ListItem>
</List>`;

  return (
    <ShowcaseLayout
      title="Lists"
      description="Lists are continuous groups of text or images. They're ideal for displaying similar data types as rows of information."
    >
      {/* Basic List */}
      <ComponentSection 
        title="Basic List"
        description="Simple lists with icons and text."
      >
        <LiveExample>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItem>
          </List>
        </LiveExample>
        <CodeBlock code={basicListCode} title="BasicList.tsx" />
      </ComponentSection>

      {/* Clickable List */}
      <ComponentSection 
        title="Clickable List"
        description="Lists with clickable items using ListItemButton."
      >
        <LiveExample>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" secondary="25 new messages" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" secondary="12 items" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent" secondary="5 items" />
            </ListItemButton>
          </List>
        </LiveExample>
        <CodeBlock code={clickableListCode} title="ClickableList.tsx" />
      </ComponentSection>

      {/* List with Avatars */}
      <ComponentSection 
        title="List with Avatars"
        description="Lists can include avatars to represent users or entities."
      >
        <LiveExample>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary="John Doe" 
                secondary="Software Engineer"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary="Jane Smith" 
                secondary="Product Manager"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'success.main' }}>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary="Vacation Plans" 
                secondary="Summer 2024"
              />
            </ListItem>
          </List>
        </LiveExample>
        <CodeBlock code={listWithAvatarCode} title="ListWithAvatar.tsx" />
      </ComponentSection>

      {/* List with Dividers */}
      <ComponentSection 
        title="List with Dividers"
        description="Use dividers to separate list items for better visual organization."
      >
        <LiveExample>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemText 
                primary="Photos" 
                secondary="Jan 9, 2024"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText 
                primary="Work Documents" 
                secondary="Jan 7, 2024"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText 
                primary="Vacation" 
                secondary="July 20, 2023"
              />
            </ListItem>
          </List>
        </LiveExample>
      </ComponentSection>

      {/* List with Switch Controls */}
      <ComponentSection 
        title="List with Controls"
        description="Include interactive controls like switches and checkboxes in lists."
      >
        <LiveExample>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Email notifications" />
              <Switch edge="end" defaultChecked />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Push notifications" />
              <Switch edge="end" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="SMS notifications" />
              <Switch edge="end" defaultChecked />
            </ListItem>
          </List>
        </LiveExample>
      </ComponentSection>

      {/* Selectable List */}
      <ComponentSection 
        title="Selectable List"
        description="Lists with checkboxes for multi-selection."
      >
        <LiveExample>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {['React', 'Vue', 'Angular', 'Svelte'].map((value) => (
              <ListItem key={value}>
                <ListItemIcon>
                  <Checkbox edge="start" />
                </ListItemIcon>
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        </LiveExample>
      </ComponentSection>

      {/* Dense List */}
      <ComponentSection 
        title="Dense List"
        description="Compact lists for displaying more items in less space."
      >
        <LiveExample>
          <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItemButton>
          </List>
        </LiveExample>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using lists effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use for similar types of content</li>
              <li>Keep list items scannable and concise</li>
              <li>Use consistent formatting throughout</li>
              <li>Include appropriate icons for context</li>
              <li>Consider using dividers for logical grouping</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't mix very different content types</li>
              <li>Avoid overly long list items</li>
              <li>Don't use lists for complex layouts</li>
              <li>Avoid too many nested lists</li>
              <li>Don't forget about mobile usability</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}