import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Rightbar from './pages/rightbar/Rightbar';
import { FadeLoader } from 'react-spinners';
import Page404 from './pages/page404/Page404';
import { AuthContext } from './context/authContext';
import Login1 from './pages/login1/Login1';
import Register1 from './pages/register1/Register1';
import Products from './pages/products/Products';
import ProductForm from './pages/products/form/ProductForm';
import Ventes from './pages/ventes/Ventes';
import VentesForm from './pages/ventes/form/VentesForm';
import Categories from './pages/categories/Categories';
import Emplacement from './pages/emplacement/Emplacement';
import Client from './pages/client/Client';
import ClientForm from './pages/client/clientForm/ClientForm';

function App() {
/*   const { currentUser } = useContext(AuthContext); */
  const [loading, setLoading] = useState(false);

  const Layout = () => {
    return (
      <div>
        <Topbar/>
        <div className="appContainer">
          <Sidebar/>
          <div className="appOutlet">
            <Outlet />
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
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/productForm',
          element: <ProductForm />
        },
        {
          path: '/categories',
          element: <Categories />
        },
        {
          path: '/emplacement',
          element: <Emplacement />
        },
        {
          path: '/ventes',
          element: <Ventes />
        },
        {
          path: '/ventesForm',
          element: <VentesForm />
        },
        {
          path: '/clients',
          element: <Client />
        },
        {
          path: '/clientForm',
          element: <ClientForm />
        },
      ]
    },
    {
      path: '/login',
      element: <Login1 />
    },
    {
      path: '/register',
      element: <Register1 />
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