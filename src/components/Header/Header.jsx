import React from 'react'
import { NavLink } from 'reactstrap'
import './header.css'

import logo from "../../assets/images/logo[1].jpg"
import user_icon from "../../assets/images/user-icon.png"
import { Container, Row } from "reactstrap"

const nav__links=[
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  }
]

const Header = () => {
  return (
    <Container>
      <Row>
        <div className='nav__wrapper'>
          <div className='logo'>
            <img src={logo} alt='logo' />
            <div> 
              <h1>YogaLakshimi</h1>
              <p>Since 1996</p>
            </div>
          </div>
          <div className='navigation'>
            <ul className='menu'>
              {nav__links.map((item, index)=>(
                   <li className="nav__item" key={index}>
                   <NavLink to={item.path} className={(navClass)=>
                    navClass.isActive ? "nav__active" : ""
                    }
                    >{item.display}
                    </NavLink>
                 </li>
              ))}
              {/* <li className="nav__item">
                <NavLink to='home'>Shop</NavLink>
              </li> */}
              {/* <li className="nav__item">
                <NavLink to='home'>Cart</NavLink>
              </li> */}
              
            </ul>
          </div>
          <div className='nav__icons'>
            <span className='fav__icon'><i class="ri-heart-line"></i></span>
            <span className='cart__icon'>
              <i class="ri-shopping-bag-line"></i>
            </span>
            <span><img src={user_icon} alt='' /></span>
          </div>
          <div className='mobile_menu'>
            <span>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Header