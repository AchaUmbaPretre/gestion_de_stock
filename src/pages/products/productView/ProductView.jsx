import React from 'react'
import './productView.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import config from '../../../config'
import axios from 'axios'
import { useEffect } from 'react'
import { format } from 'date-fns'
import moment from 'moment';

const ProductView = () => {
    const DOMAIN = config.REACT_APP_SERVER_DOMAIN;
    const [getProduit, setGetProduit] = useState([]);
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const id = pathname.split('/')[2]
    const {nom_produit,nom_categorie,pointure, nom_couleur,quantite_stock,prix,date_entree,description,img} = getProduit

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get(`${DOMAIN}/api/produit/produitView/${id}`);
            setGetProduit(data[0]);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      const formattedDatEntrant = moment(getProduit?.date_entree).format('DD-MM-YYYY');

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
                                <td>{nom_produit}</td>
                            </tr>
                            <tr>
                                <th scope="row">Catégorie</th>
                                <td>{nom_categorie}</td>
                            </tr>
                            <tr>
                                <th scope="row">Matière</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">Pointure</th>
                                <td>{pointure}</td>
                            </tr>
                            <tr>
                                <th scope="row">Couleur</th>
                                <td>{nom_couleur}</td>
                            </tr>
                            <tr>
                                <th scope="row">Quantité</th>
                                <td>{quantite_stock}</td>
                            </tr>
                            <tr>
                                <th scope="row">Prix</th>
                                <td>{prix} $</td>
                            </tr>
                            <tr>
                                <th scope="row">Marque</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">Emplacement</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">Date d'entrée</th>
                                <td>{formattedDatEntrant}</td>
                            </tr>
                            <tr>
                                <th scope="row">Statut</th>
                                <td>9</td>
                            </tr>
                            <tr>
                                <th scope="row">Description</th>
                                <td>{description}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="product-view-right">
                        <div className="product-img-row">
                            <img src={img} alt="" className="product-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ProductView