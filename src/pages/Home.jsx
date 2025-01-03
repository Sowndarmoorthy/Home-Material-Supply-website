import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap"
import heroImg from "../assets/images/heroImg.png"
import { motion } from 'framer-motion'
import "../styles/home.css"
const Home = () => {
  const year = new Date().getFullYear()
  return <Helmet title={"Home"}>
    
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <p className='hero__subtitle'>Trending Product in {year}</p>
              <h2>Make Your Home  More Strong and Flexible</h2>
              <p>Build a stronger, more durable home with our premium-quality construction materials. Enhance flexibility and resilience with products designed for lasting performance.</p>
              <motion.button whileTap={{scale: 1.2 }}
              className='shop_btn'><Link to='/shop'>Shop Now</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero__img'>
              <img src={heroImg} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
;}

export default Home
