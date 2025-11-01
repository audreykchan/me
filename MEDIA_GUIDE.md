# How to Update Portfolio Media

## Quick Overview
All project media (images and videos) is managed in one centralized file: `src/data/projects.ts`

## Where to Edit Media

Open the file: `src/data/projects.ts`

This file contains all 6 projects with their sections, text, and media. Each project has media organized by section.

## Media Structure

For each project, media is stored in the `media` array within each section:

```typescript
media: [
  {
    type: 'image' | 'video',
    src: 'URL_or_path_to_media',
    caption: 'Fig: Description of the media'
  }
]
```

## How to Add/Update Media

### For Images:
1. Open `src/data/projects.ts`
2. Find the project section you want to update (search for the project name)
3. Locate the section (Overview, Problem, Design, or Deliverables)
4. In the `media` array, update the `src` field with your image URL or local path

**Example:**
```typescript
media: [
  {
    type: 'image',
    src: '/images/prj1problem.png',  // Local file in public/images/
    caption: 'Fig: Chart comparing CLIP to other note-sharing sites'
  }
]
```

### For Videos:
1. Same process as images, but use `type: 'video'`
2. Videos will automatically play on loop and muted

**Example:**
```typescript
media: [
  {
    type: 'video',
    src: 'https://youtu.be/D1wYtTpmOc0',
    caption: 'Fig: CLIP platform demo'
  }
]
```

## Where to Store Media Files

### Option 1: Local Files (Recommended for Speed)
- Place images/videos in: `/public/images/`
- Reference them as: `/images/filename.jpg`

### Option 2: External URLs
- Use full URLs: `https://example.com/image.jpg`
- Works with any image hosting (Pexels, Unsplash, your own server, YouTube, etc.)

## Project-by-Project Media Locations

Each project has 4 sections with media spots. Here's where to find them:

### Project 1: CLIP
- **Overview**: Video demo (currently YouTube placeholder)
- **Problem**: Comparison chart image
- **Design**: Token economy diagram
- **Deliverables**: Supabase database screenshot

### Project 2: Ergonomic Laptop Stand
- **Overview**: Product showcase image
- **Problem**: Existing stands comparison
- **Design**: Joint simulation video
- **Deliverables**: Final design image

### Project 3: Supply Chain Dashboard
- **Overview**: Dashboard interface screenshot
- **Problem**: Excel spreadsheet screenshot
- **Design**: Pie chart visualization
- **Deliverables**: Final dashboard interface

### Project 4: Price Forecasting Tool
- **Overview**: Tool interface screenshot
- **Problem**: Raw transaction data image
- **Design**: Price slider interaction screenshot
- **Deliverables**: Tool interface image

### Project 5: Portable Blender
- **Overview**: Product showcase
- **Problem**: Customer reviews screenshot
- **Design**: Part diagram
- **Deliverables**: Final product image

### Project 6: Toilet Flapper
- **Overview**: Technical drawing
- **Problem**: Corroded components image
- **Design**: Patent-pending technical drawing
- **Deliverables**: Final design image

## Adding New Media

To add media to a section that doesn't have it, find this line in the project section:

```typescript
media: [
  {
    type: 'image',
    src: '/placeholder-project-name.png',
    caption: 'Fig: Description'
  }
]
```

And add your media details. The website will automatically display it.

## Video Format Support

- **Local videos**: MP4, WebM, OGG
- **External videos**: YouTube URLs, Vimeo, or direct video hosting
- All videos play silently and on loop

## Image Format Support

- **Local images**: JPG, PNG, WebP, GIF
- **External images**: Any standard web image format
- Images display at responsive sizes

## How Captions Work

The `caption` field appears below each media item. Format it as:
```
'Fig: Brief description of what the image/video shows'
```

## Testing Your Changes

After updating `src/data/projects.ts`:
1. Save the file
2. The website will automatically refresh (hot reload)
3. Navigate to the project page to see your media

## File Structure Reference

```
project/
├── public/
│   └── images/
│       ├── IMG_5941.jpg (profile picture)
│       ├── prj1.png (CLIP thumbnail)
│       ├── prj1problem.png (CLIP problem section)
│       └── (add your other project media here)
├── src/
│   ├── data/
│   │   └── projects.ts (EDIT THIS FILE to change media)
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectSection.tsx
│   │   └── MediaViewer.tsx
│   └── pages/
│       ├── HomePage.tsx
│       └── ProjectPage.tsx
```

## Common Issues & Solutions

**Media not showing?**
- Check the file path or URL is correct
- Ensure image/video file exists
- Try clearing browser cache

**Video not playing?**
- Ensure the URL is a direct video link (not a page with a video)
- Check video format is web-compatible (MP4 recommended)

**Fullscreen button not working?**
- Works automatically for all media
- Hover over media to see the expand icon
- Click to view in fullscreen overlay

## Need Help?

The media structure is simple: just find the project in `src/data/projects.ts`, locate the section, and update the `src` URL!
