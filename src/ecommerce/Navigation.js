import React from 'react'
import { Link } from 'react-router-dom'
import { Nav,Navbar,NavLink } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar  collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls='navbarScroll' data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav>
                <NavLink evenKey="1" as={Link} to="/">Register</NavLink>
                <NavLink evenKey="2" as={Link} to="/login">Login</NavLink>
                <NavLink evenKey="3" as={Link} to="/products">Products</NavLink>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
  )
}