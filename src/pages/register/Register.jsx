import React, { useContext, useState } from 'react';
import photoIcon from './../../assets/logo doe.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone,LoginOutlined } from '@ant-design/icons';
import { AuthContext } from '../../context/authContext';
import './register.scss'
import { colors } from '@mui/material';

const { Title } = Typography;

const Register = () => {
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onFinish = async (values) => {
    try {
      navigate('/');
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-entete">
          <img src={photoIcon} alt="" className="login-img" />
        </div>
        <Form name="login-form" className="login-form" onFinish={onFinish}>
          <Form.Item
              name="nom"
              rules={[
                { required: true, message: 'Veuillez entrer votre nom.' },
                { type: 'email', message: 'Veuillez entrer un nom valide.' },
              ]}
            >
              <Input
                className='login-input'
                prefix={<UserOutlined style={{color:"gray"}}/>}
                placeholder="Email.."
          />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Veuillez entrer votre email.' },
              { type: 'email', message: 'Veuillez entrer un email valide.' },
            ]}
          >
            <Input
              className='login-input'
              prefix={<UserOutlined style={{color:"gray"}}/>}
              placeholder="Email.."
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Veuillez entrer votre mot de passe.' },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined style={{color:"gray"}} />}
              placeholder="Mot de passe.."
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              visibilityToggle
              onChange={togglePasswordVisibility}
              className='login-input'
            />
          </Form.Item>
          <div className="login-rows">
            <Button className="btn-form" htmlType="submit">
              <LoginOutlined className="form-icon" />
              S'identifier
            </Button>
          </div>
        </Form>
        <div className="form-bottom">
          <Link className="form-news" to={'/login'}>
            Retour dans la page de login !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;