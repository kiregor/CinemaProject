import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import AppCreateAccount from './AppLogout';
import AppLogin from './AppLogin';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppSearchBar from './AppSearchBar';

const BACKGROUNDCOLOR='#2A3132'
const LIGHTCOLOR='#336B87'

class AppNavbar extends Component {
  state = {
    isOpen: false,
    listings: BACKGROUNDCOLOR,
    future: BACKGROUNDCOLOR,
    screens: BACKGROUNDCOLOR,
    gettinghere: BACKGROUNDCOLOR,
    myaccount: BACKGROUNDCOLOR
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onMouseOut = name => event => {
    this.setState({ [name]: BACKGROUNDCOLOR });
  }
  onMouseOver = name => event => {
    this.setState({ [name]: LIGHTCOLOR });
  }

  render() {
    return (
        <Navbar className="navbar-form navbar-fixed-top" sticky={'bottom'} style={{backgroundColor:BACKGROUNDCOLOR}} dark expand='lg'>
          <Container>
            <NavbarBrand href='/' className='navbar-nav ml-auto'>QA CINEMA LOGO</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <AppSearchBar/>
                </NavItem>
                <NavItem>
                  <AppLogin/>    
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    );
  }
}

export default AppNavbar;