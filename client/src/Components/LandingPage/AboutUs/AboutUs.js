import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutUs.css';
import Team1 from '../TeamImage/team.jpg';
import Team2 from '../TeamImage/team2.jpg';

const AboutUs = () => {
    return (
        <Row className="aboutUs">
            <Col className="teamImages">
                <div>
                <img src={Team1} alt="" id="team1" style={{ width: '500px', height: '700px', objectFit: 'contain' }} />
                <img src={Team2} alt="" id="team2" style={{ width: '300px', height: '550px', objectFit: 'contain' }} />
                </div>
            </Col>
            <Col className="teamInfo">
                <div>
                    <h1>THE TEAM</h1>
                    <p>O add another shadowand ↓ buttons at the top-left. Select the first shadow again by clicking it in column on the left. To update the element's own styles, select it by clicking the button labelled "element" along the top.</p>
                    <Button variant="success" className="moreButton">More</Button>
                </div>
            </Col>

        </Row>
    );
};

export default AboutUs;