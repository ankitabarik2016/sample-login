import React, { useState } from 'react';
import './Login.css'

const Loginpage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let isValid = true;

    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    if (isValid) {
      if (formData.email === 'ankitabarik2016@gmail.com' && formData.password === '123456') {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
      } else {
        setIsLoggedIn(false);
        setErrors({ login: 'Invalid email or password' });
      }
    } else {
      setErrors(errors);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  if (isLoggedIn) {
    return (
      <div className='mainContent'>
        <div className="greetings">
          <p>Hello, world!</p>
          <p>Hi, this is Ankita Barik</p>
        <button className='logoutBtn' onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
  return (
   <>
     <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        {errors.login && <span className="error-message">{errors.login}</span>}
        <button className='loginBtn' type="submit">Login</button>
      </form>
    </div>
    </>
  )
}

export default Loginpage