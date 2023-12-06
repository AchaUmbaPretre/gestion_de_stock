import React from 'react'
import { CloudUploadOutlined  } from '@ant-design/icons';

const UtilisateurForm = () => {
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
                  <input type="text" className="form-input"  required/>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Email</label>
                  <input type="email" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Mot de passe</label>
                  <input type="password" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Permission</label>
                  <select name="" id="" className="form-input">
                    <option value="" disabled>Selectionnez une permission</option>
                    <option value="">Admin</option>
                    <option value="">Utilisateur</option>
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