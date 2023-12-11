import React from 'react'
import './productView.scss'
import { useNavigate } from 'react-router-dom'

const ProductView = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className="productView">
            <div className="product-wrapper">
                <div className="product-container-top">
                    <div className="product-left">
                        <h2 className="product-h2">Detail du produit</h2>
                        <span>Voir les details</span>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ProductView