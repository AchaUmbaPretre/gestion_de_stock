import React from 'react'
import './rowTotal.scss'
import { CarryOutOutlined, VerticalAlignBottomOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import { Money } from '@mui/icons-material';
import CountUp from 'react-countup';


const RowTotal = () => {
  return (
    <>
        <div className="rowTotals">
            <div className="rowTotal-wrapper">
                <div className="rowTotal">
                    <div className="rowTotal-left">
                        <CarryOutOutlined className='rowTotalIcon' style={{color: 'orange'}}/>
                    </div>
                    <div className="rowTotal-right">
                        <h2><CountUp end={400144}/>$</h2>
                        <span className="rowTotal-span">Total des achats à payer</span>
                    </div>
                </div>
                <div className="rowTotal">
                    <div className="rowTotal-left" style={{background: 'rgba(0, 0, 255, 0.137)'}}>
                        <Money className='rowTotalIcon' style={{color: 'blue'}}/>
                    </div>
                    <div className="rowTotal-right">
                        <h2><CountUp end={207144}/>$</h2>
                        <span className="rowTotal-span">Ventes totales dues</span>
                    </div>
                </div>
                <div className="rowTotal">
                    <div className="rowTotal-left" style={{background: 'rgba(53, 52, 52, 0.137)'}}>
                        <VerticalAlignBottomOutlined  className='rowTotalIcon' style={{color: 'rgba(53, 52, 52, 0.719)'}}/>
                    </div>
                    <div className="rowTotal-right">
                        <h2><CountUp end={607144}/>$</h2>
                        <span className="rowTotal-span">Montant total de la vente</span>
                    </div>
                </div>
                <div className="rowTotal">
                    <div className="rowTotal-left" style={{background : 'rgba(0, 128, 0, 0.164)'}}>
                        <VerticalAlignTopOutlined className='rowTotalIcon' style={{color: 'green'}}/>
                    </div>
                    <div className="rowTotal-right">
                        <h2><CountUp end={297144}/>$</h2>
                        <span className="rowTotal-span">Total des achats à payer</span>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default RowTotal