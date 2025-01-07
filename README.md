# React.js Boilerplate

A modern, feature-rich boilerplate for building scalable React applications with best practices and industry standards.

## 🚀 Features

- ⚡️ **[Vite](https://vitejs.dev/)** - Lightning fast build tool
- ⚛️ **[React 18](https://reactjs.org/)** - Latest React with Hooks
- 🔄 **[Redux Toolkit](https://redux-toolkit.js.org/)** - State Management
- 🛣️ **[React Router v6](https://reactrouter.com/)** - Routing
- 🔐 **Authentication** - JWT-based auth flow
- 🌐 **[Axios](https://axios-http.com/)** - API communication with interceptors
- 🔧 **Environment Configuration** - Development/Production setup
- 📁 **Feature-based Architecture** - Scalable project structure

## 📦 Prerequisites

- Node.js (version >= 14.x)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/sahilbhuva/reactjs-boilerplate.git
cd reactjs-boilerplate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment file:
```bash
cp .env.example .env
```
Update the `.env` file with your configuration.

## 🚀 Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Create a production build:
```bash
npm run build
# or
yarn build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── assets/           # Static assets (images, fonts, etc.)
├── components/       # Shared/common components
│   ├── auth/        # Authentication related components
│   │   ├── PrivateRoute.jsx
│   │   └── PublicRoute.jsx
│   ├── layout/      # Layout components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   └── ui/          # Reusable UI components
├── features/        # Feature-based modules
│   ├── auth/        # Authentication feature
│   │   ├── components/  # Feature-specific components
│   │   │   ├── LoginForm/
│   │   │   └── RegisterForm/
│   │   ├── pages/      # Feature pages
│   │   │   ├── LoginPage/
│   │   │   └── RegisterPage/
│   │   ├── services/   # API services
│   │   │   └── auth.service.js
│   │   └── store/      # Feature-specific store
│   │       ├── auth.slice.js
│   │       └── auth.thunks.js
│   └── user/        # User management feature
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── store/
├── config/         # Configuration files
│   └── api.config.js
├── constants/      # Constants and enums
│   ├── routes.js
│   └── api.js
├── hooks/         # Custom React hooks
│   ├── useAuth.js
│   └── useForm.js
├── store/         # Redux store configuration
│   └── index.js
├── utils/         # Utility functions
│   ├── axios.js   # Axios instance & interceptors
│   ├── auth.js    # Auth helper functions
│   └── storage.js # Local storage helpers
├── App.jsx        # Root component
└── main.jsx      # Application entry point
```

### 📂 Directory Details

#### `src/assets`
Contains static files like images, fonts, and other media files used throughout the application.

#### `src/components`
Shared components used across multiple features:
- `auth/`: Authentication-related components like PrivateRoute
- `layout/`: Layout components including Navbar and Footer
- `ui/`: Reusable UI components like buttons, forms, modals

#### `src/features`
Feature-based modules following a modular architecture:
- Each feature (e.g., auth, user) has its own:
  - `components/`: Feature-specific components
  - `pages/`: Route components for the feature
  - `services/`: API service layer
  - `store/`: Redux store slices and thunks

#### `src/config`
Application configuration files:
- `api.config.js`: API endpoints and configuration

#### `src/constants`
Application-wide constants:
- `routes.js`: Route definitions
- `api.js`: API endpoints constants

#### `src/hooks`
Custom React hooks:
- `useAuth.js`: Authentication hook
- `useForm.js`: Form handling hook

#### `src/store`
Redux store configuration:
- `index.js`: Store setup with reducers and middleware

#### `src/utils`
Utility functions and helpers:
- `axios.js`: Axios instance with interceptors
- `auth.js`: Authentication helper functions
- `storage.js`: Local storage management

#### Root Files
- `App.jsx`: Main application component
- `main.jsx`: Application entry point with provider setup

### 🔄 Data Flow

1. **API Communication**:
   - Services make API calls using the axios instance
   - Interceptors handle authentication headers and errors

2. **State Management**:
   - Features have dedicated store slices
   - Thunks handle async operations
   - Components connect to store using hooks

3. **Routing**:
   - Protected routes handle authentication
   - Feature pages define main routes
   - Nested routing for complex features

## 🔐 Authentication

The boilerplate includes a complete authentication flow:
- Login/Register pages
- JWT token management
- Protected routes
- Automatic token refresh
- Axios interceptors for auth headers

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## 📚 Tech Stack

- React 18
- Redux Toolkit
- React Router v6
- Axios
- Vite
- ESLint
- Prettier

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
