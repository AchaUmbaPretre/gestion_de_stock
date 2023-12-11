import { Link, useNavigate } from 'react-router-dom';
import { FilePdfOutlined, FileExcelOutlined,EditOutlined, PrinterOutlined, DeleteOutlined} from '@ant-design/icons';
import { Button, Space, Table, Popconfirm} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import config from '../../config';
import Swal from 'sweetalert2';
import axios from 'axios';

const Matiere = () => {
    const navigate = useNavigate();
    const DOMAIN = config.REACT_APP_SERVER_DOMAIN;
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [nomMatiere, setNomMatiere] = useState();
    const [getMatiere, setGetMatiere] = useState()
    const searchInput = useRef(null);
    const scroll = { x: 400 };

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
      };
  
      const handleInputChange = (e) => {
        const value = e.target.value;
        const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        setNomMatiere(capitalizedValue);
      };

      const columns = [
        { title: '#', dataIndex: 'id', key: 'id', render: (text, record, index) => index + 1, width: '8%' },
        {
            title: 'Matiere',
            dataIndex: 'nom',
            key: 'nom',
            
        },
        {
            title: 'Action',
            key: 'action',
            width: '20%',
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

      const handleClick = async (e) => {
        e.preventDefault();

        try{
          await axios.post(`${DOMAIN}/api/produit/matiere`, {nom : nomMatiere})
          Swal.fire({
            title: 'Success',
            text: 'Categorie créé avec succès!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          window.location.reload();

        }catch(err) {
          Swal.fire({
            title: 'Error',
            text: err.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      }

      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get(`${DOMAIN}/api/produit/matiere`);
            setGetMatiere(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      const handleEdit = (id) => {
        navigate(`/matiere/${id}`);
    };
    
    const handleDelete = async (id) => {
     try {
        await axios.delete(`${DOMAIN}/api/produit/matiere/${id}`);
          window.location.reload();
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <>
        <div className="categories">
            <div className="categories-wrapper">
                <div className="categorie-container-top">
                    <div className="categorie-left">
                        <h2 className="categorie-h2">Matière</h2>
                        <span>Liste des matières</span>
                    </div>
                </div>
                <div className="categorie-container-bottom">
                    <div className="categorie-container-left">
                        <h2 className="categorie-title">Ajouter une matière</h2>
                        <input type="text" name='nom' onChange={handleInputChange} value={nomMatiere} placeholder='Entrer une matière...' className="categorie-input" />
                        <button className="categorie-btn" onClick={handleClick}>Envoyer</button>
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
                            <Table columns={columns} dataSource={getMatiere} scroll={scroll} pagination={{ pageSize: 5}} />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
  )
}

export default Matiere