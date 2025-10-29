# Saasly - Analytics Landing Page

A modern, responsive landing page for a SaaS analytics platform with interactive features and smooth animations.

![Saasly Preview](preview.png)

## Features

### 🎨 Design & UI
- Responsive design that works on all devices
- Modern gradient color scheme
- Interactive dashboard preview card
- Smooth scroll animations and transitions
- Feature cards with hover effects
- Pricing toggle (monthly/annual) with animations
- FAQ accordion section
- Customer testimonials carousel
- Newsletter signup form
- "Trusted by" company logos section

### 🚀 Performance
- Optimized animations and transitions
- Lazy loading for testimonials
- Pre-connected fonts for faster loading
- Compressed and optimized assets
- Smooth scroll behavior

### ♿ Accessibility
- ARIA labels for interactive elements
- Skip-to-main content link
- Keyboard navigation support
- High contrast text
- Focus states for interactive elements
- Semantic HTML structure

### 🔍 SEO
- Optimized meta tags
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data
- Semantic HTML
- Descriptive alt texts

## Project Structure

```
prototype3/
│
├── index.html          # Main HTML file
├── style.css          # Styles and animations
├── script.js         # Interactive features
└── README.md        # Project documentation
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd prototype3
   ```

2. Start a local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Or using VS Code Live Server
   # Right-click index.html -> "Open with Live Server"
   ```

3. Open in your browser:
   - If using Python server: visit `http://localhost:8000`
   - If using Live Server: it will open automatically

## Interactive Features

### Dashboard Preview
- 3D tilt effect on hover
- Animated stat bars
- Real-time updates

### Pricing Toggle
- Smooth price updates
- Annual vs Monthly comparison
- Loading animations

### FAQ Section
- Expandable/collapsible answers
- Smooth animations
- Easy navigation

### Newsletter
- Form validation
- Success animations
- Error handling

### Back to Top
- Appears on scroll
- Smooth scroll to top
- Hover animations

## Customization

### Colors
Main colors are defined in CSS variables:
```css
:root {
  --bg1: #0f1b4c;
  --bg2: #3b2bd6;
  --accent: #7c3aed;
  --muted: #94a3b8;
  --card-bg: #ffffff;
  --text-dark: #0b1220;
}
```

### Animations
Key animations can be adjusted in the CSS:
- Section reveal animations
- Button hover effects
- Card interactions
- Price toggle transitions

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization
- Minify CSS and JS for production
- Optimize images
- Enable browser caching
- Use a CDN for assets

## Future Enhancements
- [ ] Add dark/light theme toggle
- [ ] Implement comparison table
- [ ] Add more interactive demos
- [ ] Enhance mobile animations
- [ ] Add more pricing features
- [ ] Implement cookie consent
- [ ] Add integration logos

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.