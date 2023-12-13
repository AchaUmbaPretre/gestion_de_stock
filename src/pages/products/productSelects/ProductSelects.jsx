import React, { useEffect, useRef, useState } from 'react';
import './productSelects.scss'
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import config from './../../../config';
import Select from 'react-select';

const ProductSelects = () => {
    const DOMAIN = config.REACT_APP_SERVER_DOMAIN;
    const [produit, setProduit] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    

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

  console.log(data)

  return (
    <>
        <div className="productSelects">
            <div className="productSelects-container">
                <Select
                    className="product-input-select"
                    name='produit_id'
                    options={produit?.map(item => ({ value: item.produit_id, label: item.nom_produit }))}
                    onChange={selectedOption => handleInputChange({ target: { name: 'produit_id', value: selectedOption.value } })}
                    placeholder="Choisir un produit"
                />
                 <Select
                    className="product-input-select"
                    name='categorie'
                    options={produit?.map(item => ({ value: item.categorie, label: item.nom_categorie }))}
                    onChange={selectedOption => handleInputChange({ target: { name: 'categorie', value: selectedOption.value } })}
                    placeholder="Choisir une categorie"
                />
                <Select
                    className="product-input-select"
                    name='couleur'
                    options={produit?.map(item => ({ value: item.couleur, label: item.nom_couleur }))}
                    onChange={selectedOption => handleInputChange({ target: { name: 'couleur', value: selectedOption.value } })}
                    placeholder="Choisir une couleur"
                />
                <Select
                    className="product-input-select"
                    name='prix'
                    options={produit?.map(item => ({ value: item.prix, label: item.prix }))}
                    onChange={selectedOption => handleInputChange({ target: { name: 'prix', value: selectedOption.value } })}
                    placeholder="Prix"
                />
                <div className="select-btn">
                    <SearchOutlined className='select-search-btn' />
                </div>
            </div>
        </div>

    </>
  )
}

export default ProductSelects