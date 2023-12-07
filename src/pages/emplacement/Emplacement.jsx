import { Link, useNavigate } from 'react-router-dom';
import { PlusOutlined, SearchOutlined, SisternodeOutlined,EyeOutlined, FilePdfOutlined, FileExcelOutlined,EditOutlined, PrinterOutlined, DeleteOutlined} from '@ant-design/icons';
import { Button, Input, Space, Table, Popover,Popconfirm} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import './emplacement.scss'
import axios from 'axios';
import config from '../../config';
import Swal from 'sweetalert2';

const Emplacement = () => {
    const DOMAIN = config.REACT_APP_SERVER_DOMAIN;
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [getdata, setGetData] = useState([]);
    const scroll = { x: 400 };

    const handleInputChange = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
    
      let updatedValue = fieldValue;
    
      if (fieldName === "contact_email") {
        updatedValue = fieldValue.toLowerCase();
      } else if (Number.isNaN(Number(fieldValue))) {
        updatedValue = fieldValue.charAt(0).toUpperCase() + fieldValue.slice(1);
      }
    
    setData((prev) => ({ ...prev, [fieldName]: updatedValue }));
    };

    const columns = [
        { title: '#', dataIndex: 'id', key: 'id', render: (text, record, index) => index + 1 },
        {
            title: 'Emplacement',
            dataIndex: 'nom',
            key: 'nom',
            
        },
        {
            title: 'Capacité disponible',
            dataIndex: 'capacite',
            key: 'capacite',
            
        },
        {
            title: 'Action',
            key: 'action',
            width: '10%',
            render: (text, record) => (
                
              <Space size="middle">
                <Popconfirm
                  title="Êtes-vous sûr de vouloir modifier?"
                  onConfirm={()=> handleEdit(record.id)}
                  okText="Oui"
                  cancelText="Non"
                >
                  <Button icon={<EditOutlined />} style={{ color: 'green' }} />
                </Popconfirm>
                <Popconfirm
                  title="Êtes-vous sûr de vouloir supprimer?"
                  onConfirm={() => handleDelete(record.id)}
                  okText="Oui"
                  cancelText="Non"
                >
                  <Button icon={<DeleteOutlined />} style={{ color: 'red' }} />
                </Popconfirm>
              </Space>
            ),
          },
    ];


    const handleEdit = (id) => {
        navigate(`/presenceEdit/${id}`);
    };
    
    const handleDelete = async (id) => {
     /*  try {
        await axios.delete(`${DOMAIN}/api/admin/presence/${id}`);
          window.location.reload();
      } catch (err) {
        console.log(err);
      } */
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`${DOMAIN}/api/produit/emplacement`);
          setGetData(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);

    const handleClick = async (e) => {
      e.preventDefault();

      try {
        await axios.post(`${DOMAIN}/api/produit/emplacement`,data)
          Swal.fire({
            title: 'Success',
            text: 'Emplacement créé avec succès!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          window.location.reload();
        
      } catch (error) {
        
      }
    }


  return (
    <>
        <div className="emplacements">
            <div className="categories-wrapper">
                <div className="categorie-container-top">
                    <div className="categorie-left">
                        <h2 className="categorie-h2">Emplacement</h2>
                        <span>Liste des emplacements</span>
                    </div>
                </div>
                <div className="categorie-container-bottom">
                    <div className="categorie-container-left">
                        <h2 className="categorie-title">Ajouter emplacement</h2>
                        <div className="categorie-form">
                            <label htmlFor="">Nom</label>
                            <input type="text" className="input-form" name='nom' onChange={handleInputChange} />
                        </div>
                        <div className="categorie-form">
                            <label htmlFor="">Capacité maximale</label>
                            <input type="number" className="input-form" name='capacite' onChange={handleInputChange} />
                        </div>
                        <button className="categorie-btn" onClick={handleClick} >Envoyer</button>
                    </div>
                    <div className="categorie-container-right">
                        <div className="categorie-right-top">
                            <div className="categorie-left">
                                <FilePdfOutlined className='product-icon-pdf' />
                                <FileExcelOutlined className='product-icon-excel'/>
                                <PrinterOutlined className='product-icon-printer'/>
                            </div>
                            <div className="categorie-right">
                                <input type="search" name="" id="" placeholder='Recherche...' className='categorie-search' />
                            </div>
                        </div>
                        <div className="categorie-right-bottom">
                            <Table columns={columns} dataSource={getdata} scroll={scroll} pagination={{ pageSize: 5}} />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
  )
}

export default Emplacement