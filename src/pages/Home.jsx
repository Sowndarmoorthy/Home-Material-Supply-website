import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap"
import heroImg from "../assets/images/heroImg.png"
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
              <button className='buy__btn'>SHOP NOW</button>
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
