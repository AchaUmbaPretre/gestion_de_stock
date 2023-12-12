import React from 'react'
import './productView.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import config from '../../../config'
import axios from 'axios'
import { useEffect } from 'react'

const ProductView = () => {
    const DOMAIN = config.REACT_APP_SERVER_DOMAIN;
    const [getProduit, setGetProduit] = useState([]);
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const id = pathname.split('/')[2]

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get(`${DOMAIN}/api/produit/produitView/${id}`);
            setGetProduit(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

  return (
    <>
        <div className="productView">
            <div className="product-wrapper">
                <div className="product-container-top">
                    <div className="product-left">
                        <h2 className="product-h2">Detail du produit</h2>
                        <span>Voir les details</span>
                    </div>
                </div>
                <div className="product-bottom">
                    <div className="product-view-left">
                        <table>
                            <tr>
                                <th scope="col">Titre</th>
                                <th scope="col">Détail</th>
                            </tr>
                            <tr>
                                <th scope="row">Produit</th>
                                <td>7</td>
                            </tr>
                            <tr>
                                <th scope="row">Catégorie</th>
                                <td>7</td>
                            </tr>
                            <tr>
                                <th scope="row">Matière</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">Couleur</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">Quantité</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">Prix</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">Marque</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">Status</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">Description</th>
                                <td>9</td>
                            </tr>
                        </table>
                    </div>
                    <div className="product-view-right">R</div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ProductView