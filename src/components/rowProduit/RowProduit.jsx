import './rowProduit.scss'
import { SearchOutlined,MoreOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table, Popover } from 'antd';
import { Link } from 'react-router-dom';
import photoIcon from './../../assets/logo doe.jpg'

const data = [
  {
    key: '1',
    code: '1',
    produit: "Ketch",
    prix: '300',
  },
  {
    key: '2',
    code: '2',
    produit: "Ketch",
    prix: '350',
  },
  {
    key: '3',
    code: '3',
    produit: "Ketch",
    prix: '200',
  },
  {
    key: '4',
    code: '4',
    produit: "Ketch",
    prix: '250',
  },
];

const RowProduit = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const scroll = { x: 400 };

  const content = (
    <div className='popOverSous' style={{display: 'flex', flexDirection: "column", gap: "10px"}}>
      <Link>Liste des produits</Link>
      <Link>Ajouter un produit</Link>
    </div>
  )

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

  const columns = [
    { title: '#', dataIndex: 'id', key: 'id', render: (text, record, index) => index + 1 },
    {
      title: 'image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => (
        <div className="userList">
          <img src={photoIcon} alt="" className="userImg"  />
        </div>
      )
    },
    {
      title: 'Produits',
      dataIndex: 'produit',
      key: 'produit',
      ...getColumnSearchProps('produits'),
    },
    {
      title: 'Prix',
      dataIndex: 'prix',
      key: 'prix',
      sorter: (a, b) => a.prix.length - b.prix.length,
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
  ];


  return (
    <>
        <div className="rowProduit">
            <div className="rowProduit-wrapper">
                <div className="rowChart-title">
                    <h3>Produits récemment ajoutés</h3>
                    <div className="rowChart-right">
                      <Popover content={content}>
                        <MoreOutlined  style={{color: 'rgb(1, 35, 138)', cursor: 'pointer' }}/>
                      </Popover>
                    </div>
                </div>
                <div className="rowChart-row-table">
                  <Table columns={columns} dataSource={data} scroll={scroll} pagination={{ pageSize: 3}} />
                </div>
            </div>
        </div>
    </>
  )
}

export default RowProduit