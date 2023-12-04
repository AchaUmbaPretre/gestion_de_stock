import React from 'react'
import './productSelects.scss'
import { SearchOutlined } from '@ant-design/icons';

const ProductSelects = () => {
  return (
    <>
        <div className="productSelects">
            <div className="productSelects-container">
                <select name="" id="" className="product-input-select">
                    <option value="" disabled selected>
                        Choisir un produit
                    </option>
                    <option value="">aaaaaa</option>
                </select>
                <select name="" id="" className="product-input-select">
                    <option value="" disabled selected>
                        Choisir une catégorie
                    </option>
                    <option value="">aaaaaa</option>
                </select>
                <select name="" id="" className="product-input-select">
                    <option value="" disabled selected>
                        Choisir une couleur
                    </option>
                    <option value="">aaaaaa</option>
                </select>
                <select name="" id="" className="product-input-select">
                    <option value="" disabled selected>
                        Prix
                    </option>
                    <option value="">aaaaaa</option>
                </select>
                <div className="select-btn">
                    <SearchOutlined className='select-search-btn' />
                </div>
            </div>
        </div>

    </>
  )
}

export default ProductSelects