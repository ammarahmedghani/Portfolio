import React from 'react'
import Profile from './Profile'
import NavLinks from './NavLinks';
import Touch from './Touch';


function SideNav() {
    return (
        <div className="sidenav d-none d-sm-block">
            <Profile />
            <NavLinks />
            <Touch />
        </div>
    )
}

export default SideNav
