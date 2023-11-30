import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  AttachMoneyOutlined,
  FeedbackOutlined,
  LineChartOutlined,
  MailOutlined,
  UsergroupAddOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { AttachMoney, Home, HomeOutlined, VerifiedUserOutlined } from '@mui/icons-material';
import './sidebar.css'

const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Menu mode="inline" theme="light" className="sidebar">
       <Menu.Item key="/personnel"  title={<span className="sidebarH3">Accueil</span>} icon={<HomeOutlined style={{fontSize: "20px"}} />}  style={{ fontSize: '16px' }}>
            <Link to="/personnel">
              Accueil
            </Link>
        </Menu.Item>
      <SubMenu key="products" title={<span className="sidebarH3">Products</span>} icon={<ShoppingCartOutlined style={{fontSize: "19px"}} />}>
        <Menu.Item key="allProducts">
          <Link to="/users" className="sidebarLink">
            Products
          </Link>
        </Menu.Item>
        <Menu.Item key="categories">
          <Link to="/categories" className="sidebarLink">
            Categories
          </Link>
        </Menu.Item>
        <Menu.Item key="brands">
          <Link to="/marques" className="sidebarLink">
            Marques
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="sales" title={<span className="sidebarH3">Ventes</span>} icon={<MailOutlined style={{fontSize: "19px"}} />}>
        <Menu.Item key="salesOrders">
          <Link to="/ventes" className="sidebarLink">
            Ventes
          </Link>
        </Menu.Item>
        <Menu.Item key="invoices">
          <Link to="/factures" className="sidebarLink">
            Factures
          </Link>
        </Menu.Item>
        <Menu.Item key="quotes">
          <Link to="/citation" className="sidebarLink">
            Citation
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="purchases" title={<span className="sidebarH3">Achats</span>} icon={<ShoppingCartOutlined style={{fontSize: "19px"}}/>}>
        <Menu.Item key="purchasesOrders">
          <Link to="/achats" className="sidebarLink">
            Achats
          </Link>
        </Menu.Item>
        <Menu.Item key="purchaseOrders">
          <Link to="/bonDeCommande" className="sidebarLink">
            Bon de commande
          </Link>
        </Menu.Item>
        <Menu.Item key="purchaseReturns">
          <Link to="/retourAchat" className="sidebarLink">
            Retour d'achat
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="finance" title={<span className="sidebarH3">Finances et comptes</span>} icon={<AttachMoney style={{fontSize: "19px"}}/>}>
        <Menu.Item key="expenses">
          <Link to="/frais" className="sidebarLink">
            Frais
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="people" title={<span className="sidebarH3">Peuples</span>} icon={<UsergroupAddOutlined style={{fontSize: "19px"}}/>}>
        <Menu.Item key="clients">
          <Link to="/clients" className="sidebarLink">
            Clients
          </Link>
        </Menu.Item>
        <Menu.Item key="suppliers">
          <Link to="/fournisseurs" className="sidebarLink">
            Fournisseurs
          </Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Link to="/utilisateurs" className="sidebarLink">
            Utilisateurs
          </Link>
        </Menu.Item>
        <Menu.Item key="stores">
          <Link to="/magasins" className="sidebarLink">
            Magasins
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="reports" title={<span className="sidebarH3">Rapports</span>} icon={<FileTextOutlined style={{fontSize: "19px"}}/>}>
        <Menu.Item key="salesReport">
          <Link to="/rapportVentes" className="sidebarLink">
            Rapport des ventes
          </Link>
        </Menu.Item>
        <Menu.Item key="purchaseReport">
          <Link to="/rapportAchat" className="sidebarLink">
            Rapport d'achat
          </Link>
        </Menu.Item>
        <Menu.Item key="customerReport">
          <Link to="/rapportClient" className="sidebarLink">
            Rapport de client
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="settings" title={<span className="sidebarH3">Réglages</span>} icon={<SettingOutlined style={{fontSize: "19px"}}/>}>
        <Menu.Item key="generalSettings">
          <Link to="/reglagesGeneraux" className="sidebarLink">
            Réglages généraux
          </Link>
        </Menu.Item>
        <Menu.Item key="paymentSettings">
          <Link to="/reglagesPaiement" className="sidebarLink">
            Réglages de paiement
          </Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <Link to="/deconnexion" className="sidebarLink">
            Se déconnecter
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Sidebar;