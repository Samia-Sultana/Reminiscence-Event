import React from 'react';
import './Footer.css';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faSkype, faTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faAngleRight, faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import wed1 from '../ProjectImage/wedding1.jpg';
import wed2 from '../ProjectImage/wedding2.jpg';
import wed3 from '../ProjectImage/wedding3.jpg';
import birth1 from '../ProjectImage/birthday1.jpg';
import corp1 from '../ProjectImage/corporate1.jpg';
import eng1 from '../ProjectImage/engagement1.jpg';

const Footer = () => {
    return (
        <div className="footer">
            <Row className="footerRow1">
                <Col>
                    <h3>About us</h3>
                    <p>On opening the tool, you'll find a rectangle in the top-right section of the tool. That's the element you're going to be applying shadows to. When this element is selected (as it is, when you first load the page) you can apply some basic styling to it</p>
                    <div className="platforms">
                        <Button className="platformBtn"><FontAwesomeIcon icon={faTwitter} /></Button>
                        <Button className="platformBtn"><FontAwesomeIcon icon={faFacebook} /></Button>
                        <Button className="platformBtn"><FontAwesomeIcon icon={faLinkedin} /></Button>
                        <Button className="platformBtn"><FontAwesomeIcon icon={faInstagram} /></Button>
                        <Button className="platformBtn"><FontAwesomeIcon icon={faSkype} /></Button>
                    </div>
                </Col>
                <Col>
                <h3>Get In Touch</h3>
                <p><FontAwesomeIcon icon={faAddressCard} /> House-17,Park Street,NYC</p>
                <p><FontAwesomeIcon icon={faPhone} /> 123-78-456</p>
                <p><FontAwesomeIcon icon={faYahoo} /> xyx@yahoo.com</p>
                </Col>
                <Col>
                    <h3>Useful Links</h3>
                    <p><FontAwesomeIcon icon={faAngleRight} /><a href="#" className="usefulLink">  Stage Decor</a></p>
                    <p><FontAwesomeIcon icon={faAngleRight} /><a href="#" className="usefulLink">  Event Theme</a></p>
                    <p><FontAwesomeIcon icon={faAngleRight} /><a href="#" className="usefulLink">  Music and More</a></p>
                    <p><FontAwesomeIcon icon={faAngleRight} /><a href="#" className="usefulLink">  Setting</a></p>
                    <p><FontAwesomeIcon icon={faAngleRight} /><a href="#" className="usefulLink">  Lights</a></p>
                    <p><FontAwesomeIcon icon={faAngleRight} /><a href="#" className="usefulLink">  Snacks and Meals</a></p>
                    <p><FontAwesomeIcon icon={faAngleRight} /><a href="#" className="usefulLink">  More staff</a></p>
                    <p><FontAwesomeIcon icon={faAngleRight} /><a href="#" className="usefulLink">  More staff</a></p>
                </Col>
                <Col>
                    <h3>Latest Projects</h3>
                    <div className="projectImage">
                        <img src={wed3} alt="" />
                        <img src={birth1} alt="" />
                        <img src={eng1} alt="" />
                        <img src={wed2} alt="" />
                    </div>
                </Col>
            </Row>
            <Row className="footerRow2">
                <p>Lorem Ipsum is simply dummy of type  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </Row>

        </div>
    );
};

export default Footer;