import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'
import carrito from '../../Img/carrito1.png'
import logo from '../../Img/logo chaupoo.png'
import './NavBar.css'

const NavBar= () => {
    return(
        <Container>
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                <NavLink to="/"  >
                    <img src={logo} className='logo mx-auto'   alt="" />
                    </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='categoria/shampoo' className= 'datos' >Shampoo </NavLink>
                        <NavLink to='categoria/serum' className= 'datos'>Serum </NavLink>
                        <NavDropdown className= 'datos' title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink to="/Cart" >
                            <img className='carrito' src={carrito} alt="" />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </Container>
    )
}

export { NavBar }