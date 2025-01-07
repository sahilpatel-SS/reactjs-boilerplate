import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ROUTES } from '@constants/routes';
import Layout from '@components/layout/Layout';
import PrivateRoute from '@components/auth/PrivateRoute';
import Suspense from '@components/common/Suspense';
import ErrorBoundary from '@components/common/ErrorBoundary';
import { store } from './store';

// Lazy load components
const HomePage = lazy(() => import('@features/home/pages/HomePage/index'));
const About = lazy(() => import('@features/about/pages/AboutPage'));
const Login = lazy(() => import('@features/auth/pages/LoginPage'));
const Register = lazy(() => import('@features/auth/pages/RegisterPage'));
const Dashboard = lazy(() => import('@features/user/pages/DashboardPage'));

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Layout>
          <Suspense>
            <Routes>
              {/* Public Routes */}
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
              <Route path={ROUTES.AUTH.REGISTER} element={<Register />} />

              {/* Protected Routes */}
              <Route
                path={ROUTES.DASHBOARD.ROOT}
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
