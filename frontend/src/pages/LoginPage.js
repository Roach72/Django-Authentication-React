import React, { useContext } from 'react';
import '../css/loginpage.css';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await loginUser(e); // استدعاء loginUser وتمرير المتغير e كمعامل
  };

  return (
    <div className='contant'>
      <form onSubmit={handleFormSubmit} className='form'>
        <h3 className='text'>Login Here</h3>
        <input className='input' type="text" placeholder=" Username" id="username" name="username" />
        <input className='input' type="password" placeholder=" Password" id="password" />
        <input className='btn' type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
