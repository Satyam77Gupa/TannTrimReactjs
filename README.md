# TANN TRIM - Premium Bags E-commerce

A modern React.js e-commerce application for premium bags, built to match the exact Figma design specifications.

## 🎨 Design Features

- **Exact Figma Match**: Pixel-perfect implementation of the provided Figma design
- **Premium UI**: Dark theme with elegant typography and spacing
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, animations, and smooth transitions

## 🚀 Features

### Core Functionality
- **Product Grid**: Display products with high-quality images
- **Category Navigation**: Filter products by bag categories
- **Product Actions**: Bookmark and add to cart functionality
- **Price Display**: Current price, original price, and discount information
- **Responsive Layout**: Adapts to different screen sizes

### Technical Features
- **REST API Integration**: Axios-based API service layer
- **Component Architecture**: Modular React components
- **CSS Styling**: Custom CSS matching Figma specifications
- **Image Optimization**: High-quality product images from Figma
- **Interactive States**: Hover, active, and selected states

## 🛠️ Tech Stack

- **React.js 18**: Modern React with hooks
- **Axios**: HTTP client for API requests
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Encode Sans, Comme, and Raleway fonts

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tann-trim-bags
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Project Structure

```
src/
├── components/
│   ├── Header.js                 # Navigation header
│   ├── Header.css
│   ├── CategoryNavigation.js     # Category filter bar
│   ├── CategoryNavigation.css
│   ├── ProductGrid.js            # Product display grid
│   ├── ProductGrid.css
│   ├── ProductFilter.js          # Filter controls
│   └── ProductFilter.css
├── services/
│   └── api.js                    # API service layer
├── App.js                        # Main application component
├── App.css                       # Global styles
├── index.js                      # Application entry point
└── index.css                     # Base styles
```

## 🎨 Design System

### Colors
- **Background**: `#0C0C0C` (Dark)
- **Cards**: `#141414` (Dark Gray)
- **Text**: `#E5DFD9` (Light Beige)
- **Accent**: `#2FC14F` (Green for discounts)
- **Placeholder**: `#C4C4C4` (Light Gray)

### Typography
- **Primary Font**: Encode Sans
- **Logo Font**: Comme
- **Secondary Font**: Raleway

### Spacing
- **Grid Gap**: 32px
- **Card Padding**: 10.25px
- **Section Padding**: 32px

## 🔧 API Integration

The application includes a comprehensive API service layer:

```javascript
// Example API usage
import { productAPI } from './services/api';

// Fetch all products
const products = await productAPI.getProducts();

// Fetch products by category
const backpacks = await productAPI.getProductsByCategory('backpack');

// Search products
const searchResults = await productAPI.searchProducts('metro movers');
```

## 📱 Responsive Design

- **Desktop**: 4-column grid layout
- **Tablet**: 3-column grid layout
- **Mobile**: Single column layout
- **Navigation**: Collapsible on mobile devices

## 🎯 Key Components

### Header Component
- TANN TRIM logo with custom typography
- Navigation menu (Bags, Travel, Accessories, etc.)
- Action icons (Search, User, Bookmark, Cart)

### Category Navigation
- 9 bag categories with custom SVG icons
- Horizontal scrollable layout
- Interactive hover effects

### Product Grid
- 4-column responsive grid
- Product cards with images, titles, and prices
- Bookmark and add-to-cart functionality
- Hover animations and transitions

## 🚀 Getting Started

1. **Development Mode**
   ```bash
   npm start
   ```

2. **Production Build**
   ```bash
   npm run build
   ```

3. **Run Tests**
   ```bash
   npm test
   ```

## 📸 Screenshots

The application features:
- Dark, premium design matching the Figma specifications
- High-quality product images
- Smooth animations and transitions
- Responsive layout for all devices
- Interactive product cards with hover effects

## 🔮 Future Enhancements

- User authentication and profiles
- Shopping cart functionality
- Product detail pages
- Search and filtering
- Payment integration
- Order management

## 📄 License

This project is created for demonstration purposes based on the provided Figma design.

---

**Built with ❤️ using React.js and modern web technologies**

** Using THese line to start your Project
- npm install
- npm start

