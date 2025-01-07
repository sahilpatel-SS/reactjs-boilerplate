import PropTypes from 'prop-types';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import './styles.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__container">
        <Sidebar />
        <main className="main-layout__content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
