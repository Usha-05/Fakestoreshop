# Movie SPA - Single Page Application

A modern, fully functional Single Page Application (SPA) built with React and Vite that integrates with The Movie Database (TMDB) API to display popular movies, search functionality, and detailed movie information.

## 🎯 Project Overview

This SPA demonstrates modern front-end development practices including:
- **React** with functional components and hooks
- **React Router** for client-side routing
- **API Integration** with TMDB Movies API
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
│   │   ├── Card.jsx        # Movie card component
│   │   ├── Loader.jsx      # Loading spinner
│   │   └── Error.jsx       # Error message component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home/welcome page
│   │   ├── List.jsx        # Movies list page
│   │   └── Detail.jsx      # Movie detail page
│   ├── services/           # API services
│   │   └── api.js          # TMDB API integration
│   ├── App.jsx             # Main app component with routing
│   ├── App.css             # App styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎬 API Integration

### Selected API: The Movie Database (TMDB)
- **API**: https://api.themoviedb.org/3
- **Why TMDB**: 
  - Free public API with no authentication required
  - Rich movie data (posters, ratings, descriptions, metadata)
  - Well-documented and reliable
  - High-quality images and comprehensive movie information

### API Endpoints Used
1. **GET /movie/popular** - Fetch popular movies
2. **GET /movie/{id}** - Get movie details by ID
3. **GET /search/movie** - Search movies by query

### API Service Features
- Centralized API configuration
- Error handling
- Image URL helper function
- Pagination support

## 🗺️ Routing Structure

The application uses React Router for client-side routing with three main routes:

1. **Home Page (`/`)**
   - Welcome message
   - App overview
   - Feature highlights
   - Navigation buttons

2. **List Page (`/movies`)**
   - Displays popular movies in a grid
   - Search functionality
   - Pagination controls
   - Click on any movie to view details

3. **Detail Page (`/movie/:id`)**
   - Full movie information
   - Poster image
   - Ratings, genres, release date
   - Production companies
   - Budget and revenue stats
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
   - Movie poster display
   - Title and release year
   - Rating overlay
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
   - Real-time movie search
   - Search results display
   - Clear search state management

2. **Pagination**
   - Navigate through multiple pages
   - Page number display
   - Previous/Next buttons

3. **Dark Mode Toggle**
   - Theme switcher in navbar
   - Persistent theme preference
   - Smooth theme transitions

4. **Favorites (localStorage)**
   - Add/remove movies from favorites
   - Persists across sessions
   - Visual feedback with heart icon

5. **Animations & Transitions**
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

### List Page
- Grid layout of movie cards
- Search bar at the top
- Pagination controls
- Responsive grid that adapts to screen size

### Detail Page
- Large movie poster
- Comprehensive movie information
- Genre tags
- Production company details
- Budget and revenue statistics
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
  - Favorite movies list

## 🎯 Key Features Explained

### API Integration
- Uses Axios for HTTP requests
- Centralized API service in `services/api.js`
- Error handling with try-catch blocks
- Loading states during API calls
- Empty state handling when no results found

### Routing
- React Router DOM for SPA navigation
- URL parameters for movie details (`/movie/:id`)
- Programmatic navigation with `useNavigate`
- Active route highlighting in navbar

### Component Architecture
- Separation of concerns
- Reusable components with props
- Consistent styling with CSS modules
- Responsive design patterns

## 🐛 Challenges & Solutions

### Challenge 1: API Rate Limiting
**Solution**: Implemented proper error handling and user-friendly error messages. The TMDB API is generous with rate limits for public use.

### Challenge 2: Image Loading
**Solution**: Used TMDB's image CDN with different sizes. Added fallback placeholder images for missing posters.

### Challenge 3: Responsive Design
**Solution**: Used CSS Grid with `auto-fill` and `minmax()` for flexible layouts. Media queries for breakpoints at 768px and 968px.

### Challenge 4: State Persistence
**Solution**: Used localStorage to persist theme and favorites across page refreshes.

### Challenge 5: Search Debouncing
**Solution**: Implemented search on form submit and useEffect dependency to prevent excessive API calls.

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

**Note**: This project uses a public TMDB API key. For production use, consider implementing environment variables for API keys.

