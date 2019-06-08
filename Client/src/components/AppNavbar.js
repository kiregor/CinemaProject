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

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/' className='navbar-nav ml-auto'>QA CINEMA LOGO</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='mr-auto' navbar>
              <NavItem>
                    <NavLink href="/" color='primary'>Listings</NavLink>    
                </NavItem>
                <NavItem>
                    <NavLink href="/" color='primary'>Future Releases</NavLink>    
                </NavItem>
                <NavItem>
                    <NavLink href="/" color='primary'>Screens</NavLink>    
                </NavItem>
                <NavItem>
                    <NavLink href="/" color='primary'>Getting Here</NavLink>    
                </NavItem>
                <NavItem>
                    <NavLink href="/" color='primary'>My Account</NavLink>    
                </NavItem>          
                <NavItem>
                    <NavLink href="https://github.com/rameezjhaveri/CRUD_TODO_APP" color='primary'>Contact us</NavLink>    
                </NavItem>  
                </Nav>
                <Nav className='ml-auto' navbar>
                <NavItem>
                    <AppLogin/>    
                </NavItem>
                <NavItem>
                    <AppCreateAccount/>    
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;