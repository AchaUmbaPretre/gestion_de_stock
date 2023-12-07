import React, { useState } from 'react'
import './ventesForm.scss'
import { Divider, Radio, Table } from 'antd';
import Select from 'react-select';
import { useEffect } from 'react';
import config from '../../../config';
import axios from 'axios';

const columns = [
    {
      title: 'Nom du produit',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Quantité',
      dataIndex: 'age',
    },
    {
      title: 'Prix',
      dataIndex: 'address',
    },
    {
        title: 'Total',
        dataIndex: 'address',
      },
  ];


const VentesForm = () => {
    const DOMAIN = config.REACT_APP_SERVER_DOMAIN;
    const [selectionType, setSelectionType] = useState('checkbox');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [client, setClient] = useState([]);
    const [livreur, setLivreur] = useState([]);
    const [produit, setProduit] = useState([]);

    const handleInputChange = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
    
      let updatedValue = fieldValue;
    
      if (fieldName === "contact_email") {
        updatedValue = fieldValue.toLowerCase();
      } else if (Number.isNaN(Number(fieldValue))) {
        updatedValue = fieldValue.charAt(0).toUpperCase() + fieldValue.slice(1);
      }
    
    setData((prev) => ({ ...prev, [fieldName]: updatedValue }));
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`${DOMAIN}/api/produit`);
          setProduit(data);
          setLoading(false)
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`${DOMAIN}/api/peuple`);
          setClient(data);
          setLoading(false)
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`${DOMAIN}/api/peuple/livreur`);
          setLivreur(data);
          setLoading(false)
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);

  return (
    <>
        <div className="clientForm">
          <div className="product-container">
            <div className="product-container-top">
              <div className="product-left">
                <h2 className="product-h2">Ajouter une nouvelle vente</h2>
                <span>Créer une nouvelle vente</span>
              </div>
            </div>
            <div className="product-wrapper">
              <div className="product-container-bottom">
                <div className="form-controle">
                  <label htmlFor="">Client</label>
                  <Select
                    name='client_id'
                    options={client?.map(item => ({ value: item.id, label: item.nom }))}
                    onChange={selectedOption => handleInputChange({ target: { name: 'client_id', value: selectedOption.value } })}
                  />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Livreur</label>
                  <Select
                    name='livreur_id'
                    options={livreur?.map(item => ({ value: item.id, label: item.nom }))}
                    onChange={selectedOption => handleInputChange({ target: { name: 'livreur_id', value: selectedOption.value } })}
                  />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Produit</label>
                  <Select
                    name='livreur_id'
                    options={produit?.map(item => ({ value: item.id, label: item.nom_produit }))}
                    onChange={selectedOption => handleInputChange({ target: { name: 'produit_id', value: selectedOption.value } })}
                  />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Quantité</label>
                  <input type="number" className="form-input" name='quantite' onChange={handleInputChange}  required/>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Prix unitaire</label>
                  <input type="number" className="form-input" name='prix_unitaire' onChange={handleInputChange}  required/>
                </div>
            </div>
            <div className="form-submit">
                <button className="btn-submit">Soumetre</button>
                <button className="btn-submit btn-annuler">Annuler</button>
              </div>
          </div>
        </div>
        </div>

    </>
  )
}

export default VentesForm