import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap"
import heroImg from "../assets/images/heroImg.png"
import { motion } from 'framer-motion'
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'
import products from "../assets/data/products"
import "../styles/home.css"
const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(()=>{
    const filterdProducts = products.filter
    (item => item.category ==='Best Cement');

    setTrendingProducts(filterdProducts);
  },[]);




  return(
     <Helmet title={"Home"}>
    
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

    <Services />
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductList data={trendingProducts}/>
        </Row>
      </Container>
    </section>
    <section className='best__sales'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Best Sales</h2>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  );
}

export default Home
