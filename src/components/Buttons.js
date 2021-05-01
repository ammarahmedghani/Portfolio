import React from 'react'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

function Buttons() {
    return (
        <HashRouter>
            <div className="home-buttons mt-5 pt-sm-5">
                <NavLink to="/porfolio" className="button-outline">Portfolio</NavLink>
            </div>
        </HashRouter>
        
    )
}

export default Buttons
