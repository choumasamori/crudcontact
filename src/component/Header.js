import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container , Form, FormControl, Button} from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <LinkContainer to="/"><Navbar.Brand >CRUD Contact</Navbar.Brand></LinkContainer>
            </Navbar>
        </header>
    )
}

export default Header
