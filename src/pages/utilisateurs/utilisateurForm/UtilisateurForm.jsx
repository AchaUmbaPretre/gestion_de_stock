import React from 'react'
import { CloudUploadOutlined  } from '@ant-design/icons';
import config from '../../../config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const UtilisateurForm = () => {
  const DOMAIN = config.REACT_APP_SERVER_DOMAIN
  const [data, setData] = useState({})
  const navigate = useNavigate();

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
  return (
    <>
        <div className="clientForm">
          <div className="product-container">
            <div className="product-container-top">
              <div className="product-left">
                <h2 className="product-h2">Ajouter un nouveau utilisateur</h2>
                <span>Créer un nouveau utilisateur</span>
              </div>
            </div>
            <div className="product-wrapper">
              <div className="product-container-bottom">
                <div className="form-controle">
                  <label htmlFor="">Nom</label>
                  <input type="text" className="form-input" name='username' onChange={handleInputChange} required/>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Email</label>
                  <input type="email" className="form-input" name='email' onChange={handleInputChange}  required/>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Mot de passe</label>
                  <input type="password" className="form-input" name='password' onChange={handleInputChange}  required/>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Permission</label>
                  <select className="form-input" name='role' onChange={handleInputChange}>
                    <option value="" disabled>Selectionnez une permission</option>
                    <option value="0">Admin</option>
                    <option value="1">Utilisateur</option>
                  </select>
                </div>

              <div className="form-submit">
                <button className="btn-submit">Soumetre</button>
                <button className="btn-submit btn-annuler">Annuler</button>
              </div>
            </div>
          </div>
        </div>
        </div>

    </>
  )
}

export default UtilisateurForm