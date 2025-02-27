import React from 'react'


import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import "../styles/shop.css"

const Shop = () => {
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className='filter__widget'>
                <select>
                 <option>Filter By Category</option>
                  <option value="Cement">Cement</option>
                  <option value="Powder">Powder</option>
                  <option value="Pipe">Pipe</option>
                  <option value="Sheet">Sheet</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className='filter__widget'>
                  <select>
                  <option>Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
            </Col>
            <Col lg='6' md='6 '>
              <div className='search__box'>
                <input type='text' placeholder='Search.......' />
                <span>
                  <i className="ri-search-2-line"></i>
                </span>
              </div>
            </Col>


          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop