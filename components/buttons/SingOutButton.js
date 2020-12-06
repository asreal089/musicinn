import {Button} from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'

export default function signOutButton() {
    return(
        <Button variant="danger">
          Sign Out{' '}
          <FeatherIcon icon='log-out'/>  
        </Button>
    );
}