// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/booccccccctstrap.min.css';
import 'tailwindcss/tailwind.css';


// Landing Page component
const LandingPage = () => {
  return (
    <div className="container mx-auto my-4">
      {/* Hero section */}
      <section className="text-center my-8">
        <h1 className="text-5xl font-bold mb-4">Missing Grade Reporting System</h1>
        <p className="text-lg mb-8">Introducing a seamless way to report missing grades.</p>
        <button className="btn btn-primary">Get Started</button>
      </section>

      {/* Overview section */}
      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">System Benefits and Key Features</h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Add more content as needed */}
      </section>

      {/* Navigation bar */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-xl font-bold">Home</Link>
          <div className="flex space-x-4">
            {/*<Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/grade-report">Grade Report</Link>
            <Link to="/missing-grade-form">Missing Grade Form</Link>
            <Link to="/instructor-contact">Instructor Contact</Link>
  <Link to="/help-and-support">Help and Support</Link>*/}
          </div>
        </div>
      </nav>

    
      {/* Footer */} 
      <footer className="bg-gray-200 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Missing Grade Reporting System. All rights reserved.</p>
          <p>Contact us at: support@example.com</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
