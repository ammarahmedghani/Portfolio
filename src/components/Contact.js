import React from 'react'
import {withRouter} from 'react-router';
import SideNav from './SideNav';


function Contact() {
    return (
        <div className="MyPorfolio">
            <SideNav />
            <h1 className="c-black">Contact me</h1>
        </div>
    )
}

export default withRouter(Contact)
