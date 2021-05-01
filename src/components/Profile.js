import React from 'react'
import images from '../assets/images.jpg';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

function Profile() {
    return (
        <HashRouter>
            <NavLink to="/">
                <div className="profile">
                    <img className="rounded-circle" src={images} alt="Avatar" />
                <div className="person-content text-center mt-3">
                    <h1 className="tupper">Ammar Ahmed Ghani</h1>
                    <h2 className="tupper">Front-End Developer</h2>
                </div>
                </div>
            </NavLink>
            
        </HashRouter>
        
    )
}

export default Profile
