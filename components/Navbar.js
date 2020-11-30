import {Nav} from 'react-bootstrap'
import SingInButton from '../components/buttons/SingInButton'


export default function Navbar() {
    return(
        <div>
           <Nav
              activeKey="/home"
              className="justify-content-left"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              
                <SingInButton />
                
            </Nav>
        </div>

    );
}