import React, { useState  } from 'react';
import axios from 'axios';
import logo from '../assets/NEC_Logo.png'; 
import './StaffLogin.css';
import { useNavigate } from "react-router-dom";

function StaffLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      if (response.data.success) {
        alert('Successfully logged in');
        navigate('/create')
      } else {

        alert('Problem in Login')

            }
    } catch (error) {
      alert('Problem in Login' + error.message)
      }
  };


  
  return (
    <div className='allcont'>
    <nav className="navbars">
		<div className="navdiv">
			<div className="logos"><a href="#">Nandha Engineering College</a> </div>
			<ul className='ulist'>
      <li><button onClick={() => navigate('/')}>Home</button></li>
            <li><button onClick={() => navigate('/viewing')}>Blogs</button></li>
            <li><button onClick={() => navigate('/staff-login')}>Login</button></li>
			</ul>
		</div>
	</nav>
    <div className="staff-login-container">
    
      <div className="forms-container">
      <p className="titles">Login</p>
      <form onSubmit={handleLogin} className="forms">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="form-control"
            required
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="form-control"
            required
          />
         
        </div>
        
        <button type="submit" className="sign">Sign in</button>
      </form>
      
      
      </div>
      
      
    </div>
    </div>
    
  );
}

export default StaffLogin;
