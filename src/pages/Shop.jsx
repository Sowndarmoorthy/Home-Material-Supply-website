import React,{useState} from 'react'


import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import "../styles/shop.css"
import products from '../assets/data/products'
import ProductsList from "../components/UI/ProductList"

const Shop = () => {

  const [productsData, setProductsData] = useState(products);
  const handleFilter = e =>{
    const filterValue = e.target.value 
      if(filterValue === 'Cement'){
        const filteredProducts = products.filter(
          (item) => item.category==='Cement'
        );
        setProductsData(filteredProducts);
      }

      if(filterValue === 'Powder'){
        const filteredProducts = products.filter(
          (item) => item.category==='Powder'
        );
        setProductsData(filteredProducts);
      }
      if(filterValue === 'Pipe'){
        const filteredProducts = products.filter(
          (item) => item.category==='Pipe'
        );
        setProductsData(filteredProducts);
      }
      if(filterValue === 'Sheet'){
        const filteredProducts = products.filter(
          (item) => item.category==='Sheet'
        );
        setProductsData(filteredProducts);
      }

  };
  const handleSearch = e =>{
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchedProducts)
  }


  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                 <option>Filter By Category</option>
                  <option value="Cement">Cement</option>
                  <option value="Powder">Powder</option>
                  <option value="Pipe">Pipe</option>
                  <option value="Sheet">Sheet</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className="text-end">
              <div className='filter__widget'>
                  <select>
                  <option>Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='search__box'>
                <input type='text' placeholder='Search.......' onChange={handleSearch} />
                <span>
                  <i className="ri-search-2-line"></i>
                </span>
              </div>
            </Col>


          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length===0 ? (
              <h1 className='text-center fs-4'> No products are found!</h1>
              ) : (
                <ProductsList data={productsData} />
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop