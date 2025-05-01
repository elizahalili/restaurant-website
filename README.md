# Gourmet Haven - Restaurant Website

A modern, responsive restaurant website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Interactive menu with category filtering
- Image gallery
- Contact form
- Smooth scrolling navigation
- Mobile-friendly navigation menu

## File Structure

```
restaurant-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── images/             # Directory for all images
```

## Setup Instructions

1. Clone or download this repository
2. Open `index.html` in your web browser
3. To customize the website:
   - Replace images in the `images` folder with your own
   - Modify the menu items in `script.js`
   - Update the contact information in `index.html`
   - Customize colors and styles in `style.css`

## Customization

### Changing Menu Items

Edit the `menuData` object in `script.js` to update menu items:

```javascript
const menuData = {
  starters: [
    {
      name: "Your Item Name",
      description: "Item description",
      price: "$XX.XX",
      image: "images/your-image.jpg",
    },
    // Add more items...
  ],
  // Add more categories...
};
```

### Changing Colors

Modify the CSS variables in `style.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --text-color: #your-color;
  --light-bg: #your-color;
  --white: #your-color;
}
```

### Adding Images

1. Place your images in the `images` folder
2. Update image paths in `index.html` and `script.js`
3. Recommended image sizes:
   - background: 1920x1080px
   - Menu items: 600x400px
   - Gallery images: 800x600px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Font Awesome for icons
- Images from [Unsplash](https://unsplash.com) (replace with your own images)
