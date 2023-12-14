import { PlusOutlined, SearchOutlined, SisternodeOutlined,EyeOutlined, FilePdfOutlined, FileExcelOutlined,EditOutlined, PrinterOutlined, DeleteOutlined} from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table, Popconfirm, Popover} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config';
import axios from 'axios';

const Retour = () => {
    const DOMAIN = config.REACT_APP_SERVER_DOMAIN;
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [loading, setLoading] = useState(true);
    const [retour, setRetour] = useState([]);
    const searchInput = useRef(null);
    const scroll = { x: 400 };
    const navigate = useNavigate();

      const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
      };
      const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
      };
    
      const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div
            style={{
              padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: 'block',
              }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({
                    closeDropdown: false,
                  });
                  setSearchText(selectedKeys[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  close();
                }}
              >
                close
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1677ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{
                backgroundColor: '#ffc069',
                padding: 0,
              }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });

      const handleEdit = (id) => {
        navigate(`/retourForm/${id}`);
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`${DOMAIN}/api/vente/retour`);
          setRetour(data);
          setLoading(false)
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
    
    const handleDelete = async (id) => {
     try {
        await axios.put(`${DOMAIN}/api/peuple/clientDelete/${id}`);
          window.location.reload();
      } catch (err) {
        console.log(err);
      } 
    };
    
      const columns = [
        { title: '#', dataIndex: 'id', key: 'id', render: (text, record, index) => index + 1, width: '5%' },
        {
            title: 'Client',
            dataIndex: 'nom',
            key: 'nom',
            ...getColumnSearchProps('nom'),
        },
        {
            title: 'Produit',
            dataIndex: 'nom_produit',
            key: 'produit',
            ...getColumnSearchProps('nom_produit'),
        },
        {
            title: 'Quantité',
            dataIndex: 'quantite',
            key: 'quantite'
        },
        {
            title: 'Motif',
            dataIndex: 'motif',
            key: 'motif',
        },
        {
            title: 'Action',
            key: 'action',
            width: '15%',
            render: (text, record) => (
                
              <Space size="middle">
                <Popover title="Modifier" trigger="hover">
                  <Popconfirm
                    title="Êtes-vous sûr de vouloir modifier?"
                    onConfirm={()=> handleEdit(record.id)}
                    okText="Oui"
                    cancelText="Non"
                  >
                    <Button icon={<EditOutlined />} style={{ color: 'green' }} />
                  </Popconfirm>
                </Popover>
                <Popover title="Supprimer" trigger="hover">
                  <Popconfirm
                    title="Êtes-vous sûr de vouloir supprimer?"
                    onConfirm={() => handleDelete(record.id)}
                    okText="Oui"
                    cancelText="Non"
                  >
                    <Button icon={<DeleteOutlined />} style={{ color: 'red' }} />
                  </Popconfirm>
                </Popover>
              </Space>
            ),
          },
      ];

  return (
    <>
        <div className="products">
            <div className="product-container">
                <div className="product-container-top">
                    <div className="product-left">
                        <h2 className="product-h2">Liste des retours</h2>
                        <span>Gérer des retours</span>
                    </div>
                    <div className="product-right" onClick={() =>navigate('/retourForm')}>
                        <PlusOutlined />
                        <span className="product-btn">Ajouter un nouveau retour</span>
                    </div>
                </div>
                <div className="product-bottom">
                    <div className="product-bottom-top">
                        <div className="product-bottom-left">
                            <SisternodeOutlined className='product-icon' />
                            <div className="product-row-search">
                                <SearchOutlined className='product-icon-plus'/>
                                <input type="search" name="" id="" placeholder='Recherche...' className='product-search' />
                            </div>
                        </div>
                        <div className="product-bottom-right">
                            <FilePdfOutlined className='product-icon-pdf' />
                            <FileExcelOutlined className='product-icon-excel'/>
                            <PrinterOutlined className='product-icon-printer'/>
                        </div>
                    </div>
                    <div className="rowChart-row-table">
                        <Table columns={columns} dataSource={retour} loading={loading} scroll={scroll} pagination={{ pageSize: 5}} />
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Retour