import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />  {/* ✅ This renders the nested page content */}
      </main>
    </>
  );
};

export default Layout;
