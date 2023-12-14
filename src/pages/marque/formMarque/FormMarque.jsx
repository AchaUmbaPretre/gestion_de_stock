import React from 'react'

const FormMarque = ({getUpdataOne,OnchangePut}) => {

  return (
    <>
        <div className="formCategorie">
            <div className="formCategorie-wrapper">
                <div className="categorie-container-left">
                    <h2 className="categorie-title">Modifier une marque</h2>
                    <input type="text" name='nom' value={getUpdataOne?.nom} onChange={OnchangePut} placeholder='Entrer une emplacement...' className="categorie-input" />
                </div>
            </div>
        </div>

    </>
  )
}

export default FormMarque;