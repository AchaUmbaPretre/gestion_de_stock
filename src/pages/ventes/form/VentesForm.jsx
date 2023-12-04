import React, { useState } from 'react'
import './ventesForm.scss'
import { Divider, Radio, Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sydney No. 1 Lake Park',
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
  return (
    <>
        <div className="ventesForm">
            <div className="ventes-container">
                <div className="product-container-top">
                    <div className="product-left">
                        <h2 className="product-h2">Ajouter des ventes</h2>
                        <span>Ajouter votre nouvelle vente</span>
                    </div>
                </div>
                <div className="ventes-bottom">
                    <div className="ventes-bottom-wrapper">
                        <div className="ventes-rows">
                            <div className="ventes-row">
                                <label htmlFor="">Client</label>
                                <select name="" id="" className='ventes-select'>
                                    <option value="" disabled selected>
                                        Choisir un client
                                    </option>
                                </select>
                            </div>
                            <div className="ventes-row">
                                <label htmlFor="">Livreur</label>
                                <select name="" id="" className='ventes-select'>
                                    <option value="" disabled selected>
                                        Choisir un livreur
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="ventes-row-bottom">
                        <label htmlFor="">Nom du produit</label>
                        <input type="text" placeholder='Recherche....'/>
                    </div>
                    <div className="ventes-bottom-sous">
                        <Table
                            rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                            }}
                            columns={columns}
                            dataSource={data}
                        />
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default VentesForm