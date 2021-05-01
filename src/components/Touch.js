import React from 'react'

function Touch() {
    return (
        <div className="contactme mt-sm-5">
           <div className="block-title tupper d-sm-block d-none">Get in touch</div>
           <div className="social-icons">
            <a rel="me" href="mailto:ammarghani23@gmail.com" className="button button-icon u-email" title="mail: jacek@jtom.me">
                <i className="fa fa-envelope"></i>
            </a>

            <a rel="me" href="https://www.linkedin.com/in/ammar-ahmed-ghani-9a7392182/" className="button button-icon" title="linkedin: jtompl">
                <i className="fa fa-linkedin-square"></i>
            </a>

            <a rel="me" href="https://github.com/ammarahmedghani" className="button button-icon" title="github: jtomaszewski">
                <i className="fa fa-github-square"></i>
            </a>
          </div> 
        </div>
    )
}

export default Touch
