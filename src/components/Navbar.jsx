import { useEffect, useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo1 from '../assets/image/logo.svg'
import navIcon1 from '../assets/image/nav-icon1.svg'
import navIcon2 from '../assets/image/nav-icon2.svg'
import navIcon3 from '../assets/image/nav-icon3.svg'
import navIcon4 from '../assets/image/nav-icon4.svg'

import React from 'react'
import { Link } from 'react-scroll'

function NavBar () {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, seScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true)
      } else {
        seScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = value => {
    setActiveLink(value)
  }

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo1} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#Skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#Projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/poojapithva'>
                <img src={navIcon1} alt='1' />
              </a>
              <a href='https://www.facebook.com/pooja.pithva.96/'>
                <img src={navIcon2} alt='2' />
              </a>
              <a href='https://www.instagram.com/_pooojjaa/'>
                <img src={navIcon3} alt='3' />
              </a>
              <a href='https://github.com/pooh8012?tab=repositories'>
                <img src={navIcon4} alt='3' />
              </a>
            </div>
            <Link
              to='connect'
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            />
            <button className='vvd' onClick={() => console.log('connect')}>
              {' '}
              <span>Let's connect.</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
