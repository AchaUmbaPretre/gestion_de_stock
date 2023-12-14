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
import Livreur from './pages/livreur/Livreur';
import LivreurForm from './pages/livreur/livreurForm/LivreurForm';
import Utilisateurs from './pages/utilisateurs/Utilisateurs';
import UtilisateurForm from './pages/utilisateurs/utilisateurForm/UtilisateurForm';
import RapportVente from './pages/rapportVente.jsx/RapportVente';
import ProductView from './pages/products/productView/ProductView';
import VenteView from './pages/ventes/venteView/VenteView';
import RetourForm from './pages/retour/retourForm/RetourForm';
import Retour from './pages/retour/Retour';
import Echange from './pages/echange/Echange';
import EchangeForm from './pages/echange/echangeForm/EchangeForm';
import Matiere from './pages/matiere/Matiere';
import Marque from './pages/marque/Marque';
import FormProduitEdit from './pages/products/formEdit/FormProduitEdit';
import FormCategorie from './pages/categories/formCategorie/FormCategorie';

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
          path: '/productView/:id',
          element: <ProductView />
        },
        {
          path: '/productForm',
          element: <ProductForm />
        },
        {
          path: '/productForm/:id',
          element: <FormProduitEdit />
        },
        {
          path: '/categories',
          element: <Categories />
        },
        {
          path: '/categories/:id',
          element: <Categories  />
        },
        {
          path: '/emplacement',
          element: <Emplacement />
        },
        {
          path: '/emplacement/:id',
          element: <Emplacement />
        },
        {
          path: '/matiere',
          element: <Matiere />
        },
        {
          path: '/matiere/:id',
          element: <Matiere />
        },
        {
          path: '/marque',
          element: <Marque />
        },
        {
          path: '/marque/:id',
          element: <Marque />
        },
        {
          path: '/ventes',
          element: <Ventes />
        },
        {
          path: '/venteView/:id',
          element: <VenteView />
        },
        {
          path: '/ventesForm',
          element: <VentesForm />
        },
        {
          path: '/ventesForm/:id',
          element: <VentesForm />
        },
        {
          path: '/retour',
          element: <Retour/>
        },
        {
          path: '/retourForm',
          element: <RetourForm />
        },
        {
          path: '/retourForm/:id',
          element: <RetourForm />
        },
        {
          path: '/echange',
          element: <Echange/>
        },
        {
          path: '/echangeForm',
          element: <EchangeForm/>
        },
        {
          path: '/echangeForm/:id',
          element: <EchangeForm/>
        },
        {
          path: '/clients',
          element: <Client />
        },
        {
          path: '/clientForm',
          element: <ClientForm />
        },
        {
          path: '/clientForm/:id',
          element: <ClientForm />
        },
        {
          path: '/livreur',
          element: <Livreur />
        },
        {
          path: '/livreurForm',
          element: <LivreurForm />
        },
        {
          path: '/livreurForm/:id',
          element: <LivreurForm />
        },
        {
          path: '/utilisateurs',
          element: <Utilisateurs/>
        },
        {
          path: '/utilisateurForm',
          element: <UtilisateurForm />
        },
        {
          path: '/rapportVentes',
          element: <RapportVente/>
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