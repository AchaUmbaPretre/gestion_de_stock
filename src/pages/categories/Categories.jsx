import React from 'react'
import { useNavigate } from 'react-router-dom';
import './categories.scss'

const Categories = () => {
    const navigate = useNavigate();

  return (
    <>
        <div className="categories">
            <div className="categories-wrapper">
                <div className="categorie-container-top">
                    <div className="categorie-left">
                        <h2 className="categorie-h2">Cateegorie</h2>
                    </div>
                </div>
                <div className="categorie-container-bottom">
                    <div className="categorie-container-left">
                        <h2 className="categorie-title">Ajouter categorie</h2>
                        <input type="text"  className="categorie-input" />
                        <button className="categorie-btn">Envoyer</button>
                    </div>
                    <div className="categorie-container-right">
                        BBB
                    </div>
                </div>

            </div>
        </div>

    </>
  )
}

export default Categories