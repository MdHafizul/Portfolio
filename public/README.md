# Portfolio Public Assets

This folder contains all public assets for the portfolio website.

## Directory Structure

```
public/
├── images/
│   ├── profile/
│   │   └── profile-photo.svg          # Profile photo placeholder
│   ├── projects/
│   │   ├── cmez-crpm.svg              # CmEZ + CRPM project image
│   │   ├── ceritha.svg                # Ceritha landing page image
│   │   └── demo-placeholder.svg       # Video demo placeholder
│   └── icons/
│       ├── check.svg                  # Check/plus icon
│       └── tick.svg                   # Checkmark icon
└── README.md                          # This file
```

## Usage

### Profile Images
- `profile/profile-photo.svg` - Used in the About section and Hero section

### Project Images
- `projects/cmez-crpm.svg` - Featured project image for CmEZ + CRPM Analytics System
- `projects/ceritha.svg` - Featured project image for Ceritha landing page
- `projects/demo-placeholder.svg` - Video placeholder for demo projects

### Icons
- `icons/check.svg` - General checkmark/plus icon
- `icons/tick.svg` - Checkmark icon for lists and features

## Adding New Images

When adding new images to this folder:

1. **Organize by category**: Place images in the appropriate subfolder
2. **Use descriptive names**: Name files clearly (e.g., `project-name.jpg`)
3. **Optimize images**: Compress images before adding them
4. **Supported formats**: 
   - Photos: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Logos/Icons: `.svg`, `.png`
   - Videos: `.mp4`, `.webm`

## Image Guidelines

### Profile Photos
- Recommended size: 400x400px minimum
- Format: Square aspect ratio
- File size: < 200KB

### Project Images
- Recommended size: 1200x800px or 16:9 aspect ratio
- Format: `.jpg`, `.png`, or `.webp`
- File size: < 500KB per image

### Icons
- Format: `.svg` preferred (scalable)
- Alternative: `.png` at 512x512px
- File size: < 50KB

## Current Placeholders

The current image files are **SVG placeholders**. Replace them with actual photos/screenshots:

### To Replace:
1. **Profile Photo** (`profile/profile-photo.svg`)
   - Add your professional headshot
   - Recommended: High-quality professional photo
   
2. **Project Screenshots** (`projects/*.svg`)
   - Add actual project screenshots or mockups
   - Show the interface or key features
   - Consider adding multiple views (desktop, mobile)

3. **Icons** (`icons/*.svg`)
   - Current icons are generic
   - Can be replaced with custom icons or keep as-is

## Integration with Portfolio

These images are referenced in various components:
- `src/sections/Hero.tsx` - Profile photo
- `src/sections/About.tsx` - About section images
- `src/sections/FeaturedProjects.tsx` - Project screenshots
- `src/components/ImagePlaceholder.tsx` - Fallback images

## Tips

- **Use WebP format** for photos when possible (better compression)
- **Lazy load images** for better performance (already implemented in components)
- **Provide alt text** in components for accessibility
- **Test responsive images** on mobile devices
- **Consider CDN** for production deployment (Netlify handles this automatically)

---

**Note**: Remember to update this README when adding or removing images from the public folder.
