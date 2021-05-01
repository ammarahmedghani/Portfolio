import React from 'react'
import HomeHead from './HomeHead';
import {withRouter} from 'react-router';
import SideNav from './SideNav';

function Main() {
    return (
        <div className="mainsec">
            <SideNav />
            <HomeHead />  
        </div>
    )
}

export default withRouter(Main)
