import React from 'react'
import './clientForm.scss'
import { CloudUploadOutlined  } from '@ant-design/icons';

const ClientForm = () => {
  return (
    <>
        <div className="clientForm">
          <div className="product-container">
            <div className="product-container-top">
              <div className="product-left">
                <h2 className="product-h2">Ajouter un nouveau client</h2>
                <span>Créer un nouveau client</span>
              </div>
            </div>
            <div className="product-wrapper">
              <div className="product-container-bottom">
                <div className="form-controle">
                  <label htmlFor="">Nom</label>
                  <input type="text" className="form-input"  required/>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Raison sociale</label>
                  <select name="" id="" className="form-input">
                    <option value="" disabled>Selectionnez une raison sociale</option>
                  </select>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Email</label>
                  <input type="email" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Telephone</label>
                  <input type="tel" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Ville</label>
                  <input type="number" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Adresse</label>
                  <input type="number" className="form-input" />
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

export default ClientForm