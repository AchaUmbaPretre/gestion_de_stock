import React, { useState } from 'react'
import './ventesForm.scss'
import { Divider, Radio, Table } from 'antd';

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

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      name: record.name,
    }),
  };


const VentesForm = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [data, setData] = useState({});

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
                <h2 className="product-h2">Ajouter une nouvelle vente</h2>
                <span>Créer une nouvelle vente</span>
              </div>
            </div>
            <div className="product-wrapper">
              <div className="product-container-bottom">
                <div className="form-controle">
                  <label htmlFor="">Client</label>
                  <input type="text" className="form-input" name='client_id' onChange={handleInputChange} required/>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Livreur</label>
                  <input type="email" className="form-input" name='	livreur_id ' onChange={handleInputChange}  required/>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Produit</label>
                  <input type="password" className="form-input" name='produit_id' onChange={handleInputChange}  required/>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Quantité</label>
                  <input type="number" className="form-input" name='quantite' onChange={handleInputChange}  required/>
                </div>
                <div className="form-controle">
                  <label htmlFor="">Prix unitaire</label>
                  <input type="number" className="form-input" name='prix_unitaire' onChange={handleInputChange}  required/>
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

export default VentesForm