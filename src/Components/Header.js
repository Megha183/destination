import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar  variant="dark" style={{ backgroundColor: ' rgb(219, 80, 133)' }}>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/sD764jmk/icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Travel Desinations
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header