import {Button} from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'

export default function signInButton() {
    return(
        <Button variant="primary">
          Sign In{' '}
          <FeatherIcon icon='log-out'/>  
        </Button>
    );
}