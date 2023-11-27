import './register.scss'
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

export default Register