export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
  },
  DASHBOARD: {
    ROOT: '/dashboard',
    PROFILE: '/dashboard/profile',
    SETTINGS: '/dashboard/settings',
  },
  // Add more routes as needed
};

// Helper function to generate path with parameters
export const generatePath = (path, params = {}) => {
  let generatedPath = path;
  Object.keys(params).forEach(key => {
    generatedPath = generatedPath.replace(`:${key}`, params[key]);
  });
  return generatedPath;
};
