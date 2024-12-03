import React from 'react';
import './ViewBlog.css'; 
import cultureImage from '../assets/culture.jpg'; 
import workshopImage from '../assets/workshop.jpg'; 
import seminarImage from '../assets/seminar.png'; 
import activitiesImage from '../assets/activities.jpg'; 

function ViewBlog() {
  return (
    <div className="view-blog-container">
      <header className="view-blog-header text-center">
        <h1>Blogs</h1>
        <p>Explore the latest updates and events at Nandha Engineering College</p>
      </header>

      <section className="blog-section culture">
        <h2>Culture</h2>
        <img src={cultureImage} alt="Culture Events" className="blog-image" />
        <div className="blog-content">
          <p>
            Our college celebrates a rich cultural heritage through various events like festivals, cultural nights, and art exhibitions. Students actively participate in showcasing their talents and celebrating diversity.
          </p>
          <a href="/culture-activities" className="btn btn-success">View Culture Events</a>
        </div>
      </section>

      <section className="blog-section workshop">
        <h2>Workshops</h2>
        <img src={workshopImage} alt="Workshops" className="blog-image" />
        <div className="blog-content">
          <p>
            We organize various workshops to enhance skills and knowledge in different fields, from technical skills to soft skills. Join us to learn from industry experts and enhance your career prospects.
          </p>
          <a href="/workshop-activities" className="btn btn-success">View Workshops</a>
        </div>
      </section>

      <section className="blog-section seminar">
        <h2>Seminars</h2>
        <img src={seminarImage} alt="Seminars" className="blog-image" />
        <div className="blog-content">
          <p>
            Regular seminars are held to provide insights into current trends and developments in various fields. Our guest speakers include professionals from diverse backgrounds sharing their expertise.
          </p>
          <a href="/seminar-activities" className="btn btn-success">View Seminars</a>
        </div>
      </section>

      <section className="blog-section other-activities">
        <h2>Other Activities</h2>
        <img src={activitiesImage} alt="Other Activities" className="blog-image" />
        <div className="blog-content">
          <p>
            Beyond academics, our college engages students in various activities like sports, clubs, and social service initiatives, fostering all-around development and teamwork.
          </p>
          <a href="/other-activities" className="btn btn-success">View Other Activities</a>
        </div>
      </section>
    </div>
  );
}

export default ViewBlog;
