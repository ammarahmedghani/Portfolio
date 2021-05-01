import React from 'react'
import {withRouter} from 'react-router';
import SideNav from './SideNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projects from './Projects';
import amazonclone from '../assets/amazonclone.PNG';
import fypdataset from '../assets/fypdataset.PNG';
import complainforum from '../assets/complainforum.PNG';

function Porfolio() {
    return (

        <div className="MyPorfolio">
            <SideNav />
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col md={2}><div><h1 className="c-black text-center fs32 tupper mt-3 mt-sm-0">Portfolio</h1></div></Col>
                </Row>
                <Row className="justify-content-center mt-5 ">
                    <Col md={3} className="text-center">
                        <a href="https://heuristic-yalow-b3fbf7.netlify.app/"><Projects title={"Amazon Clone"} name={amazonclone} details={"using React.js/Firebase"} /></a>
                    </Col>
                    <Col md={3} className="text-center mt-3 mt-sm-0">
                        <a href="https://suspicious-yalow-9bd3d7.netlify.app/"><Projects title={"FYP Dataset App"} name={fypdataset} details={"using React.js/Firebase"} /></a>
                    </Col>
                    <Col md={3} className="text-center mt-3 mt-sm-0">
                        <a href="http://complainforum.weuno.co/"><Projects title={"Complain Forum"} name={complainforum} details={"using Bootstrap/CSS3"} /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(Porfolio)
