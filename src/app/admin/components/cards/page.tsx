"use client";

import React from "react";
import { 
  Card, 
  CardContent, 
  CardActions, 
  CardMedia,
  CardHeader,
  Button, 
  Typography,
  Avatar,
  IconButton,
  Box
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShowcaseLayout from "@/components/ComponentShowcase/ShowcaseLayout";
import LiveExample from "@/components/ComponentShowcase/LiveExample";
import CodeBlock from "@/components/ComponentShowcase/CodeBlock";
import ComponentSection from "@/components/ComponentShowcase/ComponentSection";

export default function CardsShowcase() {
  const basicCardCode = `<Card sx={{ maxWidth: 345 }}>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Card Title
    </Typography>
    <Typography variant="body2" color="text.secondary">
      This is a basic card with simple content.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>`;

  const mediaCardCode = `<Card sx={{ maxWidth: 345 }}>
  <CardMedia
    sx={{ height: 140 }}
    image="/static/images/cards/contemplative-reptile.jpg"
    title="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>`;

  const complexCardCode = `<Card sx={{ maxWidth: 345 }}>
  <CardHeader
    avatar={<Avatar sx={{ bgcolor: 'red.500' }}>R</Avatar>}
    action={<IconButton><MoreVertIcon /></IconButton>}
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2016"
  />
  <CardMedia
    component="img"
    height="194"
    image="/static/images/cards/paella.jpg"
    alt="Paella dish"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      This impressive paella is a perfect party dish.
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton>
      <FavoriteIcon />
    </IconButton>
    <IconButton>
      <ShareIcon />
    </IconButton>
  </CardActions>
</Card>`;

  return (
    <ShowcaseLayout
      title="Cards"
      description="Cards contain content and actions about a single subject. They're versatile components that can display a wide variety of content."
    >
      {/* Basic Card */}
      <ComponentSection 
        title="Basic Card"
        description="A simple card with content and actions."
      >
        <LiveExample>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Product Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a basic card showcasing simple content with a title and description. Perfect for displaying product information or article previews.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
              <Button size="small">Share</Button>
            </CardActions>
          </Card>
        </LiveExample>
        <CodeBlock code={basicCardCode} title="BasicCard.tsx" />
      </ComponentSection>

      {/* Media Card */}
      <ComponentSection 
        title="Media Card"
        description="Cards can include media content like images or videos."
      >
        <LiveExample>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140, bgcolor: 'grey.300' }}
              title="Sample Image"
            >
              <Box sx={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'text.secondary'
              }}>
                Image Placeholder
              </Box>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sample Article
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This card demonstrates how to include media content alongside text. Great for blog posts, news articles, or product showcases.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Read More</Button>
              <Button size="small">Share</Button>
            </CardActions>
          </Card>
        </LiveExample>
        <CodeBlock code={mediaCardCode} title="MediaCard.tsx" />
      </ComponentSection>

      {/* Complex Card */}
      <ComponentSection 
        title="Complex Card"
        description="Cards with headers, avatars, and multiple action types."
      >
        <LiveExample>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  U
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="User Post"
              subheader="December 20, 2023"
            />
            <CardMedia
              sx={{ height: 140, bgcolor: 'grey.300' }}
              title="User content"
            >
              <Box sx={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'text.secondary'
              }}>
                Content Image
              </Box>
            </CardMedia>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This is an example of a complex card with a header, avatar, media, and multiple action buttons. Perfect for social media posts or user-generated content.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton color="error">
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </LiveExample>
        <CodeBlock code={complexCardCode} title="ComplexCard.tsx" />
      </ComponentSection>

      {/* Card Variants */}
      <ComponentSection 
        title="Card Variants"
        description="Different card elevations and styles."
      >
        <LiveExample>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Card variant="outlined" sx={{ width: 200 }}>
              <CardContent>
                <Typography variant="h6">Outlined</Typography>
                <Typography variant="body2" color="text.secondary">
                  Card with outlined variant
                </Typography>
              </CardContent>
            </Card>
            
            <Card elevation={3} sx={{ width: 200 }}>
              <CardContent>
                <Typography variant="h6">Elevated</Typography>
                <Typography variant="body2" color="text.secondary">
                  Card with elevation
                </Typography>
              </CardContent>
            </Card>
            
            <Card elevation={8} sx={{ width: 200 }}>
              <CardContent>
                <Typography variant="h6">High Elevation</Typography>
                <Typography variant="body2" color="text.secondary">
                  Card with high elevation
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Clickable Card */}
      <ComponentSection 
        title="Clickable Card"
        description="Cards can be made clickable for navigation or selection."
      >
        <LiveExample>
          <Card 
            sx={{ 
              maxWidth: 345, 
              cursor: 'pointer',
              '&:hover': {
                elevation: 4,
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease-in-out'
              }
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Clickable Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This entire card is clickable. Hover over it to see the interactive effects. Perfect for navigation cards or selectable items.
              </Typography>
            </CardContent>
          </Card>
        </LiveExample>
      </ComponentSection>

      {/* Card Grid */}
      <ComponentSection 
        title="Card Grid Layout"
        description="Multiple cards in a responsive grid layout."
      >
        <LiveExample>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 2 
          }}>
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardContent>
                  <Typography variant="h6">
                    Card {item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Content for card number {item}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Action</Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </LiveExample>
      </ComponentSection>

      {/* Usage Guidelines */}
      <ComponentSection 
        title="Usage Guidelines"
        description="Best practices for using cards effectively."
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'success.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'success.dark', mb: 1, fontWeight: 600 }}>
              ✅ Do's
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Use cards for related content groupings</li>
              <li>Keep card content focused and scannable</li>
              <li>Use consistent card sizes in grids</li>
              <li>Include clear call-to-action buttons</li>
              <li>Consider loading states for dynamic content</li>
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', p: 2, bgcolor: 'error.soft', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'error.dark', mb: 1, fontWeight: 600 }}>
              ❌ Don'ts
            </Typography>
            <Typography variant="body2" component="ul" sx={{ m: 0, pl: 2.5 }}>
              <li>Don't overcrowd cards with too much content</li>
              <li>Avoid mixing different card styles inconsistently</li>
              <li>Don't make cards too narrow or too wide</li>
              <li>Avoid unclear or missing actions</li>
              <li>Don't forget about mobile responsiveness</li>
            </Typography>
          </Box>
        </Box>
      </ComponentSection>
    </ShowcaseLayout>
  );
}