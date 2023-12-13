import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';
import config from '../../../config';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const FormEmplacement = ({getUpdata,getUpdataOne}) => {
    const navigate = useNavigate();

  return (
    <>
        <div className="formCategorie">
            <div className="formCategorie-wrapper">
                <div className="categorie-container-left">
                    <h2 className="categorie-title">Ajouter une categorie</h2>
                    <input type="text" name='nom_categorie' value={getUpdataOne?.nom_categorie} onChange={(e)=> getUpdata(e.target.value)} placeholder='Entrer une categorie...' className="categorie-input" />
                </div>
            </div>
        </div>

    </>
  )
}

export default FormEmplacement;