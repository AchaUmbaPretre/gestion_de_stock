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
import { AttachMoney, FeedbackRounded, HomeOutlined} from '@mui/icons-material';
import './sidebar.css'

const { SubMenu, Item } = Menu;

const Sidebar = () => {
  return (
    <Menu mode="vertical" theme="light" className="sidebar">
      <Item key="/personnel"  title={<span className="sidebarH3">Accueil</span>} icon={<HomeOutlined style={{ fontSize: '25px', color: 'rgb(1, 35, 138)' }} />}>
        <Link to="/personnel" style={{fontSize: "16px", color: 'rgb(1, 35, 138)'}}>
          Accueil
        </Link>
      </Item>
      <SubMenu key="products" title={<span className="sidebarH3">Products</span>} icon={<ShoppingCartOutlined style={{ fontSize: '20px', color: 'rgb(1, 35, 138)' }} />}>
        <Item key="allProducts">
          <Link to="/users" className="sidebarLink">
            Products
          </Link>
        </Item>
        <Item key="categories">
          <Link to="/categories" className="sidebarLink">
            Categories
          </Link>
        </Item>
        <Item key="brands">
          <Link to="/marques" className="sidebarLink">
            Marques
          </Link>
        </Item>
      </SubMenu>

      <SubMenu key="sales" title={<span className="sidebarH3">Ventes</span>} icon={<MailOutlined style={{ fontSize: '20px', color: 'rgb(1, 35, 138)' }} />}>
        <Item key="salesOrders">
          <Link to="/ventes" className="sidebarLink">
            Ventes
          </Link>
        </Item>
        <Item key="invoices">
          <Link to="/factures" className="sidebarLink">
            Factures
          </Link>
        </Item>
        <Item key="quotes">
          <Link to="/citation" className="sidebarLink">
            Citation
          </Link>
        </Item>
      </SubMenu>

      <SubMenu key="purchases" title={<span className="sidebarH3">Achats</span>} icon={<ShoppingCartOutlined style={{ fontSize: '20px', color: 'rgb(1, 35, 138)' }}/>}>
        <Item key="purchasesOrders">
          <Link to="/achats" className="sidebarLink">
            Achats
          </Link>
        </Item>
        <Item key="purchaseOrders">
          <Link to="/bonDeCommande" className="sidebarLink">
            Bon de commande
          </Link>
        </Item>
        <Item key="purchaseReturns">
          <Link to="/retourAchat" className="sidebarLink">
            Retour d'achat
          </Link>
        </Item>
      </SubMenu>

      <SubMenu key="finance" title={<span className="sidebarH3">Finances et comptes</span>} icon={<AttachMoney style={{ fontSize: '20px', color: 'rgb(1, 35, 138)' }}/>}>
        <Item key="expenses">
          <Link to="/frais" className="sidebarLink">
            Frais
          </Link>
        </Item>
      </SubMenu>

      <SubMenu key="people" title={<span className="sidebarH3">Peuples</span>} icon={<UsergroupAddOutlined style={{ fontSize: '20px', color: 'rgb(1, 35, 138)' }}/>}>
        <Item key="clients">
          <Link to="/clients" className="sidebarLink">
            Clients
          </Link>
        </Item>
        <Item key="suppliers">
          <Link to="/fournisseurs" className="sidebarLink">
            Fournisseurs
          </Link>
        </Item>
        <Item key="users">
          <Link to="/utilisateurs" className="sidebarLink">
            Utilisateurs
          </Link>
        </Item>
        <Item key="stores">
          <Link to="/magasins" className="sidebarLink">
            Magasins
          </Link>
        </Item>
      </SubMenu>

      <SubMenu key="reports" title={<span className="sidebarH3">Rapports</span>} icon={<FileTextOutlined style={{ fontSize: '20px', color: 'rgb(1, 35, 138)' }}/>}>
        <Item key="salesReport">
          <Link to="/rapportVentes" className="sidebarLink">
            Rapport de ventes
          </Link>
        </Item>
        <Item key="purchaseReport">
          <Link to="/rapportAchats" className="sidebarLink">
            Rapport d'achats
          </Link>
        </Item>
        <Item key="expenseReport">
          <Link to="/rapportFrais" className="sidebarLink">
            Rapport de frais
          </Link>
        </Item>
      </SubMenu>

      <SubMenu key="settings" title={<span className="sidebarH3">Paramètres</span>} icon={<SettingOutlined style={{ fontSize: '20px', color: 'rgb(1, 35, 138)' }}/>}>
        <Item key="generalSettings">
          <Link to="/parametresGeneraux" className="sidebarLink">
            Paramètres généraux
          </Link>
        </Item>
        <Item key="userSettings">
          <Link to="/parametresUtilisateur" className="sidebarLink">
            Paramètres utilisateur
          </Link>
        </Item>
      </SubMenu>

      <Item key="logout" icon={<LogoutOutlined style={{ fontSize: '20px', color: 'rgb(1, 35, 138)'}}/>}>
        <Link to="/logout" className="sidebarLink" style={{ color: 'rgb(1, 35, 138)'}}>
          Déconnexion
        </Link>
      </Item>
    </Menu>
  );
};

export default Sidebar;