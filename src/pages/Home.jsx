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
import count from "../assets/images/holo1.png"
import Clock from "../components/UI/Clock"
const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProduct, setBestSalesProduct] = useState([])
  const [powderProducts, setPowderProducts] = useState([])
  const [sheetProducts, setSheetProducts] = useState([])
  const [blocksProducts, setBlocksProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(()=>{
    const filterdTrendingProducts = products.filter
    (item => item.category ==='Best Cement');

    const filterdBestSalesProducts = products.filter
    (item => item.category ==='Pipe');

    const filterdPowderProducts = products.filter
    (item => item.category ==='Powder');

    const filterdSheetsProducts = products.filter
    (item => item.category ==='Sheet');

    const filterdBlocksProducts = products.filter
    (item => item.category ==='block');
    
    setTrendingProducts(filterdTrendingProducts);
    setBestSalesProduct(filterdBestSalesProducts);
    setPowderProducts(filterdPowderProducts);
    setSheetProducts(filterdSheetsProducts)
    setBlocksProducts(filterdBlocksProducts);

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
          <ProductList data={bestSalesProduct}/>
        </Row>
      </Container>
    </section>
    <section className='timer__count'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='clock__top-content'>
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-3'>Quality Blocks</h3>
            </div>
            <Clock />
            <button className=' buy__btn store__btn '>
              <Link to="/shop">Visit Store</Link>
            </button>
          </Col>

          <Col lg='6' md='6' className="text-end">
            <img src={count} alt='' />
          </Col>
        </Row>
      </Container>
    </section>
    <section className='new__arrivals'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>New Arrivals</h2>
          </Col>
          <ProductList data={powderProducts} />
          <ProductList data={sheetProducts} />
        </Row>
      </Container>
    </section>

    <section className='popular__category'>
    <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Popular in Category</h2>
          </Col>
          <ProductList data={blocksProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>
  );
}

export default Home
