# FakeStore Shop - Single Page Application

A modern, fully functional Single Page Application (SPA) built with React and Vite that integrates with the Fake Store API to display products, search functionality, and detailed product information.

## 🎯 Project Overview

This SPA demonstrates modern front-end development practices including:
- **React** with functional components and hooks
- **React Router** for client-side routing
- **API Integration** with Fake Store API
- **Responsive Design** for all device sizes
- **Dark Mode** toggle functionality
- **State Management** with React hooks and localStorage
- **Reusable Components** architecture

## 🛠️ Technology Stack

### Why React?
- **Component-based architecture**: Easy to build and maintain reusable UI components
- **Large ecosystem**: Extensive library support and community
- **Performance**: Virtual DOM for efficient rendering
- **Developer experience**: Great tooling with Vite for fast development
- **Industry standard**: Widely used in modern web development

### Technologies Used
- **React 18.2.0** - UI library
- **React Router DOM 6.20.0** - Client-side routing
- **Vite 5.0.8** - Build tool and dev server
- **Axios 1.6.2** - HTTP client for API requests
- **CSS3** - Styling with CSS variables for theming

## 📁 Folder Structure

```
SPA/
├── public/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx      # Navigation bar with theme toggle
│   │   ├── Button.jsx      # Reusable button component
│   │   ├── Card.jsx        # Product card component
│   │   ├── Loader.jsx      # Loading spinner
│   │   ├── Error.jsx       # Error message component
│   │   └── Modal.jsx       # Modal dialog component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home/welcome page
│   │   ├── Products.jsx    # Products catalog page
│   │   ├── List.jsx        # Products list view page
│   │   └── Detail.jsx      # Product detail page
│   ├── services/           # API services
│   │   └── api.js          # Fake Store API integration
│   ├── App.jsx             # Main app component with routing
│   ├── App.css             # App styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛒 API Integration

### Selected API: Fake Store API
- **API**: https://fakestoreapi.com
- **Why Fake Store API**: 
  - Free public API with no authentication required
  - Rich product data (images, prices, ratings, descriptions)
  - Well-documented and reliable
  - Multiple categories and comprehensive product information

### API Endpoints Used
1. **GET /products** - Fetch all products
2. **GET /products/{id}** - Get product details by ID
3. **GET /products/category/{category}** - Get products by category
4. **GET /products/categories** - Get all available categories

### API Service Features
- Centralized API configuration
- Error handling
- Category filtering support
- Product search functionality

## 🗺️ Routing Structure

The application uses React Router for client-side routing with four main routes:

1. **Home Page (`/`)**
   - Welcome message
   - App overview
   - Feature highlights
   - Navigation buttons

2. **Products Page (`/products`)**
   - Displays products in a grid layout
   - Search functionality
   - Category filter dropdown
   - Click on any product to view details

3. **List Page (`/list`)**
   - Alternative list view of products
   - Compact product display
   - Search and filter support

4. **Detail Page (`/products/:id`)**
   - Full product information
   - Product image
   - Price, rating, and reviews
   - Category information
   - Product description
   - Add to favorites (localStorage)
   - Back navigation

## 🧩 Components

### Reusable Components

1. **Navbar**
   - Responsive navigation
   - Active route highlighting
   - Dark mode toggle button
   - Logo and navigation links

2. **Button**
   - Multiple variants (primary, secondary, outline)
   - Disabled state support
   - Consistent styling

3. **Card**
   - Product image display
   - Title and price
   - Rating display
   - Hover effects
   - Clickable navigation

4. **Loader**
   - Animated spinner
   - Loading text
   - Centered layout

5. **Error**
   - Error message display
   - Retry button
   - User-friendly error handling

6. **Modal**
   - Modal dialog component
   - Overlay background
   - Close functionality

## 🎨 UI/UX Features

### Responsive Design
- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: 2-3 column grid
- **Desktop**: Multi-column grid with optimal spacing

### Dark Mode
- Toggle between light and dark themes
- Persists user preference in localStorage
- Smooth transitions between themes
- CSS variables for easy theme management

### Loading States
- Spinner animation during API calls
- Prevents user interaction during loading
- Clear visual feedback

### Error Handling
- User-friendly error messages
- Retry functionality
- Graceful fallbacks for missing data

## ✨ Bonus Features Implemented

1. **Search Functionality**
   - Real-time product search
   - Search by title or description
   - Search results display

2. **Category Filtering**
   - Filter products by category
   - All categories dropdown
   - Dynamic category loading

3. **Dark Mode Toggle**
   - Theme switcher in navbar
   - Persistent theme preference
   - Smooth theme transitions

4. **Favorites (localStorage)**
   - Add/remove products from favorites
   - Persists across sessions
   - Visual feedback with heart icon

5. **Multiple View Modes**
   - Grid view (Products page)
   - List view (List page)
   - Detail view (Detail page)

6. **Animations & Transitions**
   - Smooth hover effects on cards
   - Page transitions
   - Button interactions
   - Loading animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📸 Screenshots

### Home Page
- Welcome section with app description
- Feature cards highlighting key functionality
- Call-to-action buttons

### Products Page
- Grid layout of product cards
- Search bar at the top
- Category filter dropdown
- Responsive grid that adapts to screen size

### Detail Page
- Large product image
- Comprehensive product information
- Category tag
- Price and rating statistics
- Favorite button

## 🔧 State Management

### Local State (React Hooks)
- `useState` for component-level state
- `useEffect` for side effects and API calls
- `useParams` for route parameters
- `useLocation` for active route detection
- `useNavigate` for programmatic navigation

### Persistent State
- **localStorage** for:
  - Theme preference (light/dark)
  - Favorite products list

## 🎯 Key Features Explained

### API Integration
- Uses Axios for HTTP requests
- Centralized API service in `services/api.js`
- Error handling with try-catch blocks
- Loading states during API calls
- Empty state handling when no results found

### Routing
- React Router DOM for SPA navigation
- URL parameters for product details (`/products/:id`)
- Programmatic navigation with `useNavigate`
- Active route highlighting in navbar

### Component Architecture
- Separation of concerns
- Reusable components with props
- Consistent styling with CSS modules
- Responsive design patterns

## 🐛 Challenges & Solutions

### Challenge 1: API Rate Limiting
**Solution**: Implemented proper error handling and user-friendly error messages. The Fake Store API is generous with rate limits for public use.

### Challenge 2: Image Loading
**Solution**: Used product images directly from the API. Added fallback handling for missing images.

### Challenge 3: Responsive Design
**Solution**: Used CSS Grid with `auto-fill` and `minmax()` for flexible layouts. Media queries for breakpoints at 768px and 968px.

### Challenge 4: State Persistence
**Solution**: Used localStorage to persist theme and favorites across page refreshes.

### Challenge 5: Search and Filter
**Solution**: Implemented client-side filtering for search and category-based filtering with API calls.

## 📦 Build & Deploy

### Build
The project uses Vite for building:
```bash
npm run build
```
Output will be in the `dist/` folder.

### Deploy
The built files can be deployed to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect GitHub repo or deploy via CLI
- **GitHub Pages**: Configure for SPA routing

## 🔗 Live Demo

[Add your live demo URL here after deployment]

## 📝 License

This project is created for educational purposes.

## 👨‍💻 Author

Created as part of a front-end development assignment demonstrating SPA development skills.

---

**Note**: This project uses the public Fake Store API. No API key is required for this API.
