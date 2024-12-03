import React from 'react';
import logo from '../assets/NEC_Logo.png';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <header className="main-header">
        <img src={logo} alt="College Logo" className="college-logo" />
        <h1 className='clg-name'>NANDHA ENGINEERING COLLEGE</h1>

        {/* Navigation Bar inside Header */}
        <nav className="navbar">
          <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <a href="/view">View Blog</a>
              <a href="/staff-login">Staff Login</a>
            </div>
          </div>
        </nav>
      </header>

      <div className="container">
        <header className="jumbotron text-center">
          <h1>Welcome to the Video Blog</h1>
        </header>
   {/* Main Content Section */}
   <section className="homepage-content">
          <h2>About Our Video Blog</h2>
          
          <p>
            The Video Blog at Nandha Engineering College is a dedicated platform for students and faculty to share, watch, and discuss educational videos. This initiative aims to foster collaboration and creativity within our college community, enabling members to showcase their talents and insights through multimedia.
          </p>
          <p>
            Our platform allows users to easily upload videos, access previous posts, and engage with peers through comments and discussions. Whether you're looking to share a project, discuss a seminar, or simply showcase your creativity, our video blog provides the perfect space to connect and inspire others.
          </p>
          <h2>Features of the Video Blog</h2>
          <ul>
            <li>Easy video uploads: Share your videos in just a few clicks.</li>
            <li>Access to a wide range of content: Explore videos on various topics created by your peers.</li>
            <li>User-friendly interface: Navigate through the blog with ease and enjoy a seamless experience.</li>
            <li>Engagement opportunities: Comment on videos and interact with other users to enhance learning and collaboration.</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default HomePage;