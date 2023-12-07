import React from 'react'
import './productForm.scss'
import { CloudUploadOutlined  } from '@ant-design/icons';
import { useState } from 'react';
import Select from 'react-select';
import { useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import Swal from 'sweetalert2';

const ProductForm = () => {
  const DOMAIN = config.REACT_APP_SERVER_DOMAIN;
  const [data, setData] = useState({})
  const [getCategorie, setGetCategorie] = useState()

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
        const { data } = await axios.get(`${DOMAIN}/api/produit/categorie`);
        setGetCategorie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    try{
      await axios.post(`${DOMAIN}/api/produit/produit`, data)
      Swal.fire({
        title: 'Success',
        text: 'Categorie créé avec succès!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      window.location.reload();

    }catch(err) {
      Swal.fire({
        title: 'Error',
        text: err.message,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }



  return (
    <>
        <div className="productForm">
          <div className="product-container">
            <div className="product-container-top">
              <div className="product-left">
                <h2 className="product-h2">Ajouter un produit</h2>
                <span>Créer un nouveau produit</span>
              </div>
            </div>
            <div className="product-wrapper">
              <div className="product-container-bottom">
                <div className="form-controle">
                  <label htmlFor="">Nom du produit</label>
                  <input type="text" name='nom_produit' className="form-input" onChange={handleInputChange} />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Catégorie</label>
                  <Select
                      name="categorie"
                      options={getCategorie?.map(item => ({ value: item.id, label: item.nom_categorie }))}
                      onChange={selectedOption => handleInputChange({ target: { name: 'categorie', value: selectedOption.value } })}
                    />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Couleur</label>
                  <input type="text" name='couleur' className="form-input" onChange={handleInputChange} />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Matière</label>
                  <input type="text" name='matiere' className="form-input" onChange={handleInputChange}  />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Pointure</label>
                  <input type="number" name='pointure' className="form-input" onChange={handleInputChange}  />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Quantité</label>
                  <input type="number" name='quantite_stock' className="form-input" onChange={handleInputChange}  />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Emplacement</label>
                  <input type="text" name='emplacement' className="form-input" onChange={handleInputChange}  />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Prix</label>
                  <input type="number" name='prix' className="form-input" onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-controleFile" onClick={() => document.getElementById('file-upload').click()}>
                <label htmlFor="">Image du produit</label>
                <input type="file" name='img' className="form-input" style={{display:"none"}} lable="Profil"
                    id='file-upload'
                    accept='.jpeg, .png, .jpg' onChange={handleInputChange} />
                <div className="form-file">
                  <CloudUploadOutlined className='cloud-icon' />
                  <span>Glissez et déposez un fichier à télécharger</span>
                </div>
              </div>
              <div className="form-submit">
                <button className="btn-submit" onClick={handleClick}>Soumetre</button>
                <button className="btn-submit btn-annuler">Annuler</button>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default ProductForm