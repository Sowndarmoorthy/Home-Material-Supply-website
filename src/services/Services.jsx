import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'

const Services = () => {
  return <section className="services">
    <Container>
        <Row>
            <Col lg='3' md='4'></Col>
             <div className="service__item">
                <span><i class="ri-truck-line"></i></span>
                <div>
                    <h3>Km based Shipping</h3>
                    <p>Based on vechile and Based on Kelometers deliver fee.</p>
                </div>
             </div>
        </Row>
    </Container>

  </section>

}

export default Services