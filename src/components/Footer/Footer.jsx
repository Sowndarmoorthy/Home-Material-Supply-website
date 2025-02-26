import React from 'react'
import './footer.css';

import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className="mb-4" md="6">
          <div className='logo'>
            <div> 
              <h1 className='text-white'>Yogalaxmi Industries</h1>
              <p>Since 1996</p>
            </div>
          </div>
            <p className='footer__text mt-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi vero, ad natus quis, id error porro similique animi dolores, ullam earum! Illum harum consectetur beatae laborum sapiente earum. Odio, et.
            </p>
          </Col>
          <Col lg='3' md='3' className="mb-4">
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Top Catehories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                   <Link to="#">Cements</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                   <Link to="#">Powders</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                   <Link to="#">Steels</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                   <Link to="#">Blocks</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='6' className="mb-4">
          <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                   <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                   <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                   <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                   <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                   <span><i className="ri-map-pin-line"></i></span>
                   <p>Neru nagar, Sathy Road, Punjai Puliyampatti,Erode  </p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                   <span><i className="ri-phone-line"></i></span>
                   <p>979-048-7039</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                   <span><i className="ri-mail-line"></i></span>
                   <p>sowndarmoorthy@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">Copyright {year} developed by Saravana Kumar. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    )
}

export default Footer;