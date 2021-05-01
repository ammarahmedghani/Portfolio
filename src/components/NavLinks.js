import React, { Component } from 'react'

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";



function NavLinks() {
    return (
        <HashRouter>
            <div className="nav-linkss mt-5">
            <ul>
                <li>
                    <NavLink to="/porfolio">PORTFOLIO</NavLink>
                </li>
                
                <li>
                    <NavLink to="/cv">MY CV</NavLink>
                </li>
            </ul>
        </div>

        </HashRouter>
        
    )
}

export default NavLinks
