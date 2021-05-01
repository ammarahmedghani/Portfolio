import React from 'react'
import images from '../assets/images.jpg';

function Projects(props) {
    return (
        <div className="Projects">
            <div className="imagediv"><img className="myimg" src={props.name} alt="" />
            </div>
            <div className="projectdesc">
                <h3 className="c-black">{props.title}</h3>
                <p className="c-red">{props.details}</p>
            </div>
        </div>
    )
}

export default Projects
