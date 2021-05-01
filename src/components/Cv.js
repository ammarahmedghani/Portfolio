import React from 'react'
import {withRouter} from 'react-router';
import SideNav from './SideNav';
import cv from '../assets/ammar2020cv3.pdf';

function Cv() {
    return (
        <div className="MyPorfolio">
            <SideNav />
            <iframe src={cv} width="100%" height="680px">
            </iframe>
        </div>
    )
}

export default withRouter(Cv)
