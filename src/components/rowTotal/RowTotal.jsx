import React from 'react'
import './rowTotal.scss'
import { CarryOutOutlined } from '@ant-design/icons';


const RowTotal = () => {
  return (
    <>
        <div className="rowTotals">
            <div className="rowTotal-wrapper">
                <div className="rowTotal">
                    <div className="rowTotal-left">
                        <CarryOutOutlined className='rowTotalIcon' style={{color: 'red'}}/>
                    </div>
                    <div className="rowTotal-right">
                        <h2>$307 144</h2>
                        <span className="rowTotal-span">Total des achats à payer</span>
                    </div>
                </div>
                <div className="rowTotal">
                    <div className="rowTotal-left">
                        <CarryOutOutlined className='rowTotalIcon' style={{color: 'red'}}/>
                    </div>
                    <div className="rowTotal-right">
                        <h2>$307 144</h2>
                        <span className="rowTotal-span">Ventes totales dues</span>
                    </div>
                </div>
                <div className="rowTotal">
                    <div className="rowTotal-left">
                        <CarryOutOutlined className='rowTotalIcon' style={{color: 'red'}}/>
                    </div>
                    <div className="rowTotal-right">
                        <h2>$307 144</h2>
                        <span className="rowTotal-span">Montant total de la vente</span>
                    </div>
                </div>
                <div className="rowTotal">
                    <div className="rowTotal-left">
                        <CarryOutOutlined className='rowTotalIcon' style={{color: 'red'}}/>
                    </div>
                    <div className="rowTotal-right">
                        <h2>$307 144</h2>
                        <span className="rowTotal-span">Total des achats à payer</span>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default RowTotal