import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Rightbar from './pages/rightbar/Rightbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { FadeLoader } from 'react-spinners';
import Page404 from './pages/page404/Page404';
import { AuthContext } from './context/authContext';

function App() {
/*   const { currentUser } = useContext(AuthContext); */
  const [loading, setLoading] = useState(false);

  const Layout = () => {
    return (
      <div>
        <div className="appContainer">
          <Sidebar />
          <div className="appOutlet">
            <Topbar />
            <div className="appOutletRow">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  };

/*   const SecuriteRoute = ({ children }) => {
    if () {
      return <Navigate to="/login" />;
    }
    return children;
  }; */

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Rightbar />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/*',
      element: <Page404 />
    }
  ]);

  return (
    <div>
      {loading ? (
      <div className="spinnerContainer">
        <FadeLoader color="rgba(54, 215, 183, 1)" loading={loading} height={15} radius={2} margin={2} />
      </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;