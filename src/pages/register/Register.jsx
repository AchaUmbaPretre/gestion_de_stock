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


/* import './register.scss'
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useState } from 'react';
import config from '../../config'

const Register = () => {
    const DOMAIN = config.REACT_APP_SERVER_DOMAIN
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState(null);

    const handleChange = e =>{
      setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post(`${DOMAIN}/api/auth/register`, inputs);
  
        Swal.fire({
          title: 'Success',
          text: 'Registration successful!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        
        navigate('/login');
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: error.response.data,
          icon: 'error',
          confirmButtonText: 'OK'
        });
        
        setError(error.response.data);
      }
    }

  return (
    <>
         <div className="register">
            <div className="register-wrapper">
                <div className="register-entete">
                    <img src={''} alt="" className="login-img" />
                    <h2 className="login-h2">Actions Drc</h2>
                </div>
                <form action="" className="login-form">
                    <div className="login-controle">
                        <label htmlFor="" className="login-label">Votre nom <span>*</span></label>
                        <input type="text" name='username' className="login-input" onChange={handleChange} placeholder='Nom..' />
                    </div>
                    <div className="login-controle">
                        <label htmlFor="" className="login-label">Votre e-mail <span>*</span></label>
                        <input type="text" name='email' className="login-input" onChange={handleChange} placeholder='Email..' />
                    </div>
                    <div className="login-controle">
                        <label htmlFor="" className="login-label">Mot de passe <span>*</span></label>
                        <input type="text"  name='password' className="login-input" onChange={handleChange} placeholder='Mot de passe..' />
                    </div>
                    <div className="login-rows">
                        <Link className="login-mssg" to ='/register'>Mot de passe oublié ?</Link>
                        <button className="btn-form" onClick={handleSubmit} ><CheckCircleOutlineIcon className='form-icon'/>S'inscrire</button>
                    </div>
                </form>
            </div>
        </div>


    </>
  )
}

export default Register */