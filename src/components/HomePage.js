import React from 'react';
import logo from '../assets/NEC_Logo.png';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()
  return (
    <div className='home'>
      

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


      <div className="container">
        <header className="jumbotron text-center">
          <h1>Welcome to the VideoBlogger</h1>
        </header>
   <section className="homepage-content">
          <h2 className="left-image">About</h2>
          <hr></hr>
          
          <p>
            
The VideoBlogger at Nandha Engineering College is a dedicated platform for students and faculty to share, watch, and discuss educational videos. This initiative aims to foster collaboration and creativity within our college community, enabling members to showcase their talents and insights through multimedia.
          </p>
          <p>
            Our platform allows users to easily upload videos, access previous posts, and engage with peers through comments and discussions. Whether you're looking to share a project, discuss a seminar, or simply showcase your creativity, our video blog provides the perfect space to connect and inspire others.
          </p>
          
        </section>
      </div>
    </div>
  );
}

export default HomePage;