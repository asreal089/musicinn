import {Navbar,Nav} from 'react-bootstrap'
import SingInButton from './buttons/SingInButton'


export default function MyNavbar() {
    return(
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/musicians">Music-Inn</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/features">Quem Somos</Nav.Link>
                  <Nav.Link href="/favorites">Favoritos</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/myaccount">Sua Conta</Nav.Link>
                  <SingInButton />
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>

    );
}