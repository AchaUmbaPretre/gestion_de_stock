import React from 'react'
import './productForm.scss'
import { CloudUploadOutlined  } from '@ant-design/icons';

const ProductForm = () => {
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
                  <input type="text" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Catégorie</label>
                  <select name="" id="" className="form-input">
                    <option value="" disabled>Selectionnez une categorie</option>
                  </select>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Couleur</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Matière</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Pointure</label>
                  <input type="number" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Quantité</label>
                  <input type="number" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Emplacement</label>
                  <input type="number" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Prix</label>
                  <input type="number" className="form-input" />
                </div>
                <div className="form-controle">
                  <label htmlFor="">Date entrée</label>
                  <input type="date" className="form-input" />
                </div>
              </div>
              <div className="form-controleFile">
                  <label htmlFor="">Image du produit</label>
                  <input type="file" className="form-input" style={{display:"none"}} />
                  <div className="form-file">
                    <CloudUploadOutlined />
                    <span>Glissez et déposez un fichier à télécharger</span>
                  </div>
                </div>
              </div>
          </div>
        </div>

    </>
  )
}

export default ProductForm