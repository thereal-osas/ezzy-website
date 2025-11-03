# Hero Video Setup Guide

## Overview
The hero section has been updated to use HTML5 `<video>` elements instead of static images. This provides a more dynamic and engaging user experience.

## Video Requirements

### File Location
Place your video files in the `public/videos/` directory:
```
public/
  └── videos/
      ├── hero-video.mp4
      └── hero-video.webm
```

### Video Formats
The implementation supports two video formats for cross-browser compatibility:
- **MP4 (H.264)**: Primary format, widely supported across all browsers
- **WebM (VP9)**: Alternative format for better compression and quality

### Recommended Video Specifications

#### Resolution & Aspect Ratio
- **Desktop**: 1920x1080 (16:9) or 1280x720 (16:9)
- **Mobile**: 720x1280 (9:16) or optimized for vertical viewing
- The video will automatically scale to fit the container using `object-cover`

#### File Size & Duration
- **File Size**: Keep under 5MB for optimal loading performance
- **Duration**: 10-30 seconds (loops continuously)
- **Bitrate**: 2-5 Mbps for good quality without excessive file size

#### Technical Settings
- **Frame Rate**: 30fps or 24fps
- **Codec (MP4)**: H.264
- **Codec (WebM)**: VP9 or VP8
- **Audio**: Not required (video is muted by default)

## Video Attributes

The video element includes the following attributes:

```html
<video
  autoPlay    // Starts playing automatically on page load
  loop        // Loops continuously
  muted       // Muted by default (required for autoplay)
  playsInline // Prevents fullscreen on mobile devices
>
```

### Why These Attributes?
- **autoPlay + muted**: Modern browsers require videos to be muted for autoplay to work without user interaction
- **loop**: Creates a seamless, continuous experience
- **playsInline**: Ensures the video plays inline on iOS devices instead of opening in fullscreen

## Creating Optimized Videos

### Using FFmpeg (Recommended)

#### Convert to MP4 (H.264):
```bash
ffmpeg -i input.mov -c:v libx264 -preset slow -crf 22 -vf scale=1920:1080 -an hero-video.mp4
```

#### Convert to WebM (VP9):
```bash
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -vf scale=1920:1080 -an hero-video.webm
```

#### Optimize File Size:
```bash
# For MP4 - smaller file size
ffmpeg -i input.mov -c:v libx264 -preset slow -crf 28 -vf scale=1280:720 -an hero-video.mp4

# For WebM - smaller file size
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 35 -b:v 0 -vf scale=1280:720 -an hero-video.webm
```

### Online Tools
If you don't have FFmpeg installed, you can use online converters:
- [CloudConvert](https://cloudconvert.com/)
- [Online-Convert](https://www.online-convert.com/)
- [Convertio](https://convertio.co/)

## Fallback Behavior

If a browser doesn't support the video tag or the video fails to load, a fallback placeholder will be displayed with:
- Gradient background
- Icon and text indicating the content
- Same styling as the original placeholder

## Responsive Behavior

### Mobile (< 1024px)
- Video appears above the text content
- Height: 256px (h-64)
- Rounded corners: 16px (rounded-2xl)

### Desktop (≥ 1024px)
- Video appears on the right side
- Height: 384px (h-96)
- Rounded corners: 24px (rounded-3xl)

## Styling & Animations

The video maintains all existing Framer Motion animations:
- **Initial state**: Opacity 0, scaled to 0.8
- **Animated state**: Opacity 1, scaled to 1
- **Transition**: 0.8s duration with delays for staggered appearance

## Performance Considerations

1. **Lazy Loading**: Consider implementing lazy loading for below-the-fold videos
2. **Preload**: The browser will preload metadata by default
3. **Network Awareness**: Consider detecting slow connections and showing static images instead
4. **File Size**: Keep videos under 5MB for optimal performance

## Testing Checklist

- [ ] Video plays automatically on page load
- [ ] Video loops continuously without gaps
- [ ] Video is muted (no audio plays)
- [ ] Video displays correctly on desktop (1920x1080+)
- [ ] Video displays correctly on tablet (768px - 1024px)
- [ ] Video displays correctly on mobile (< 768px)
- [ ] Fallback content displays if video fails to load
- [ ] Video doesn't cause layout shifts during loading
- [ ] Page load performance is acceptable (< 3s)

## Browser Support

The implementation is compatible with:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS 10+)
- ✅ Chrome Mobile (Android)

## Troubleshooting

### Video doesn't autoplay
- Ensure the `muted` attribute is present
- Check browser autoplay policies
- Verify video file is accessible

### Video doesn't loop smoothly
- Ensure the video has a clean loop point
- Check that the `loop` attribute is present
- Consider creating a perfect loop in video editing software

### Large file size / slow loading
- Reduce video resolution (try 1280x720 instead of 1920x1080)
- Increase compression (higher CRF value)
- Reduce video duration
- Consider using a CDN for video hosting

### Video appears stretched or cropped
- The `object-cover` class maintains aspect ratio while filling the container
- Ensure your video matches the container's aspect ratio
- Adjust video resolution if needed

## Future Enhancements

Consider implementing:
- Multiple video sources for different screen sizes
- Poster image for initial load
- Play/pause controls (optional)
- Network-aware loading (show static image on slow connections)
- Intersection Observer for lazy loading
- Video quality selection based on device capabilities

