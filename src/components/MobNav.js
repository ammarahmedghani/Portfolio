import React from 'react'
import Hamburger from './Hamburger';
import Touch from './Touch';


function MobNav() {
    return (
        <div className="mobnav d-flex justify-content-between align-items-center px-3 d-sm-none d-block">
            <Touch />
            <Hamburger />
        </div>
    )
}

export default MobNav
