import React, { useState } from 'react';
import logo from '../assets/NEC_Logo.png';
import './CreateBlog.css';
import { useNavigate } from 'react-router-dom';


function CreateBlog() {
    const [title, setTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [description, setDescription] = useState('');
    const [blogType, setBlogType] = useState('');
    const [department, setDepartment] = useState(''); 
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const blogData = { title, videoUrl, description, blogType, department };

        try {
            const response = await fetch('https://videoblogger-1.onrender.com/create-blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blogData),
            });

            const result = await response.json();
            if (result.success) {
                alert('Blog post created successfully');
                setTitle('');
                setVideoUrl('');
                setDescription('');
                setBlogType('');
                setDepartment(''); 
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error submitting blog post:', error);
            alert('Failed to create blog post');
        }
    };

    return (
        <div className='creatine'>
        <nav className="navbars">
		<div className="navdiv">
			<div className="logos"><a href="#">Nandha Engineering College</a> </div>
			<ul className='ulist'>
            <li><button onClick={() => navigate('/')}>Home</button></li>
            <li><button onClick={() => navigate('/viewing')}>Blogs</button></li>
            <li><button onClick={() => navigate('/staff-login')}>Logout</button></li>
			</ul>
		</div>
	</nav>
        <div className="create-post-container">
           
            
            <div className="form-wrapper">
                <h2>Create a New Blog</h2>
                <form onSubmit={handleSubmit} className="post-form">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter the title"
                        required
                    />

                    <label>Video URL</label>
                    <input
                        type="url"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        placeholder="Enter video URL"
                        required
                    />

                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter a description"
                        rows="4"
                        required
                    ></textarea>

                    <label>Type of Blog</label>
                    <select
                        value={blogType}
                        onChange={(e) => setBlogType(e.target.value)}
                        required
                    >
                        <option value="">Select type</option>
                        <option value="workshop">Workshop</option>
                        <option value="culture">Culture</option>
                        <option value="seminar">Seminar</option>
                        <option value="other">Other Activities</option>
                    </select>

                    <label>Department</label>
                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    >
                        <option value="">Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                        <option value="CSE (IOT)">CSE (IOT)</option>
                    </select>

                    <button type="submit" className="submit-button">Post</button>
                </form>
            </div>
        </div>


        
        </div>
    );
}

export default CreateBlog;
