import './../products/products.scss'
import { PlusOutlined, SearchOutlined, SisternodeOutlined,EyeOutlined, FilePdfOutlined, FileExcelOutlined,EditOutlined, PrinterOutlined, DeleteOutlined} from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table, Popover,Popconfirm} from 'antd';
import photoIcon from './../../assets/logo doe.jpg'
import { Link, useNavigate } from 'react-router-dom';

const Ventes = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const scroll = { x: 400 };
    const navigate = useNavigate();

    const data = [
        {
          key: '1',
          code: '1',
          nom_produit: "Ketch",
          couleur: 'red',
          categorie: "chaussure plate",
          prix: '300',
        },
        {
          key: '2',
          code: '2',
          nom_produit: "Ketch",
          couleur: 'red',
          categorie: "chaussure plate",
          prix: '350',
        },
        {
          key: '3',
          code: '3',
          nom_produit: "Ketch",
          couleur: 'red',
          categorie: "chaussure plate",
          prix: '200',
        },
        {
          key: '4',
          code: '4',
          nom_produit: "Ketch",
          couleur: 'red',
          categorie: "chaussure plate",
          prix: '250',
        },
      ];

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
    
      const columns = [
        {
          title: 'image',
          dataIndex: 'image',
          key: 'image',
          width: '10%',
          render: (text, record) => (
            <div className="userList">
              <img src={photoIcon} alt="" className="userImg"  />
            </div>
          )
        },
        {
            title: 'Nom produit',
            dataIndex: 'nom_produit',
            key: 'code',
            width: '15%',
            ...getColumnSearchProps('couleur'),
          },
        {
          title: 'Couleur',
          dataIndex: 'couleur',
          key: 'couleur',
          width: '15%',
          ...getColumnSearchProps('couleur'),
        },
        {
            title: 'Categorie',
            dataIndex: 'categorie',
            key: 'categorie',
            width: '15%',
            ...getColumnSearchProps('categorie'),
          },
          {
            title: 'Pointure',
            dataIndex: 'pointure',
            key: 'pointure',
            ...getColumnSearchProps('pointure'),
            sorter: (a, b) => a.pointure.length - b.pointure.length,
            sortDirections: ['descend', 'ascend'],
            render: (text) => (
              <span>
                {parseFloat(text)}
              </span>
            ),
          },
        {
          title: 'Prix',
          dataIndex: 'prix',
          key: 'prix',
          ...getColumnSearchProps('prix'),
          sorter: (a, b) => a.address.length - b.address.length,
          sortDirections: ['descend', 'ascend'],
          render: (text) => (
            <span>
              {parseFloat(text).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
          ),
        },
        {
            title: 'Quantité',
            dataIndex: 'quantite',
            key: 'prix',
            ...getColumnSearchProps('prix'),
            sorter: (a, b) => a.quantite.length - b.quantite.length,
            sortDirections: ['descend', 'ascend'],
            render: (text) => (
              <span>
                {parseFloat(text).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </span>
            ),
          },
          {
            title: 'Date',
            dataIndex: 'dateEntree',
            key: 'date',
            sorter: (a, b) => a.dateEntree.length - b.dateEntree.length,
            sortDirections: ['descend', 'ascend']
          },
        {
            title: 'Action',
            key: 'action',
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
                <Link to={`/presenceListView/${record.emp1_id}`}>
                  <Button icon={<EyeOutlined />} style={{ color: 'blue' }} />
                </Link>
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

  return (
    <>
        <div className="products">
            <div className="product-container">
                <div className="product-container-top">
                    <div className="product-left">
                        <h2 className="product-h2">Liste de ventes</h2>
                        <span>Gérer vos ventes</span>
                    </div>
                    <div className="product-right" onClick={() =>navigate('/ventesForm')}>
                        <PlusOutlined />
                        <span className="product-btn">Ajouter des ventes</span>
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
                        <Table columns={columns} dataSource={data} scroll={scroll} pagination={{ pageSize: 5}} />
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Ventes