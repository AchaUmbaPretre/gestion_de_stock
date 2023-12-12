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
                            <caption>
                                Alien football stars
                            </caption>
                            <tr>
                                <th scope="col">Player</th>
                                <th scope="col">Gloobles</th>
                            </tr>
                            <tr>
                                <th scope="row">TR-7</th>
                                <td>7</td>
                            </tr>
                            <tr>
                                <th scope="row">Khiresh Odo</th>
                                <td>7</td>
                            </tr>
                            <tr>
                                <th scope="row">Mia Oolong</th>
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