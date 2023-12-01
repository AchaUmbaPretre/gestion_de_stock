import React from 'react'
import './rowTotalDetail.scss'
import { UsergroupAddOutlined, UserOutlined, SnippetsOutlined,AuditOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';


const RowTotalDetail = () => {

  return (
    <>
        <div className="rowTotalDetail">
            <div className="rowTotalDetail-wrapper">
                <div className="rowTotalDetail-row" style={{background: 'rgba(255, 166, 0, 0.932)'}}>
                    <div className="rowTotalDetail-left">
                        <h2 className="rowTotal-h2">250</h2>
                        <span className="rowTotal-span">Clients</span>
                    </div>
                    <div className="rowTotalDetail-right">
                    <UserOutlined className='rowTotalIcon' />
                    </div>
                </div>
                <div className="rowTotalDetail-row" style={{background: 'rgb(131, 159, 241)'}}>
                    <div className="rowTotalDetail-left">
                        <h2 className="rowTotal-h2">50</h2>
                        <span className="rowTotal-span">Fournisseurs</span>
                    </div>
                    <div className="rowTotalDetail-right">
                    <UsergroupAddOutlined className='rowTotalIcon'/>
                    </div>
                </div>
                <div className="rowTotalDetail-row" style={{background: 'rgba(53, 52, 52, 0.719)'}}>
                    <div className="rowTotalDetail-left">
                        <h2 className="rowTotal-h2">150</h2>
                        <span className="rowTotal-span">Facture d'achat</span>
                    </div>
                    <div className="rowTotalDetail-right">
                        <SnippetsOutlined className='rowTotalIcon'/>
                    </div>
                </div>
                <div className="rowTotalDetail-row" style={{background: 'rgba(0, 128, 0, 0.74)'}}>
                    <div className="rowTotalDetail-left">
                        <h2 className="rowTotal-h2">90</h2>
                        <span className="rowTotal-span">Facture de vente</span>
                    </div>
                    <div className="rowTotalDetail-right">
                        <AuditOutlined className='rowTotalIcon'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RowTotalDetail