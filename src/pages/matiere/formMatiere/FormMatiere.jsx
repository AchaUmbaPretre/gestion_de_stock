import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';;

const FormMatiere = ({getUpdataOne,OnchangePut}) => {
    const navigate = useNavigate();

  return (
    <>
        <div className="formCategorie">
            <div className="formCategorie-wrapper">
                <div className="categorie-container-left">
                    <h2 className="categorie-title">Modifier une matière</h2>
                    <input type="text" name='nom' value={getUpdataOne?.nom} onChange={OnchangePut} placeholder='Entrer une emplacement...' className="categorie-input" />
                </div>
            </div>
        </div>

    </>
  )
}

export default FormMatiere;