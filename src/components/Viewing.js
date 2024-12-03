import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './Viewing.css';
import logo from '../assets/NEC_Logo.png';
import { useNavigate } from 'react-router-dom';

const Viewing = () => {
    const [posts, setPosts] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [selectedEventType, setSelectedEventType] = useState("All");
    const handleclick =(e)=>{
        console.log(e)
    }

    const navigate = useNavigate();
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post => 
        (selectedDepartment === "All" || post.department === selectedDepartment) &&
        (selectedEventType === "All" || post.blogType === selectedEventType)
    );

    return (
        <div className="view-post-container">
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

            <h2>View Posts</h2>

            <div className="filters">
                <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                    <option value="All">All Departments</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                </select>

                <select value={selectedEventType} onChange={(e) => setSelectedEventType(e.target.value)}>
                    <option value="All">All Event Types</option>
                    <option value="culture">Culture</option>
                    <option value="seminar">Seminar</option>
                    <option value="workshop">Workshop</option>
                </select>
            </div>

            <div className="posts-list">
                {filteredPosts.map(post => (
                    <div key={post._id} className="post">
                        <h3>{post.title}</h3>
                        <div className="video-container">
                            <ReactPlayer 
                                url={post.videoUrl}
                                width="560px"
                                height="315px"
                                controls
                            />
                        </div>
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Viewing;
