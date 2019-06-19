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
import AppLogout from './AppLogout';
import AppSearchBar from './AppSearchBar';
import bgColors from '../../Constants';

class AppNavbar extends Component {
  state = {
    isOpen: false,
    listings: bgColors.Shadow,
    future: bgColors.Shadow,
    screens: bgColors.Shadow,
    gettinghere: bgColors.Shadow,
    myaccount: bgColors.Shadow
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onMouseOut = name => event => {
    this.setState({ [name]: bgColors.Shadow });
  }
  onMouseOver = name => event => {
    this.setState({ [name]: bgColors.Stone });
  }

  render() {
    return (
        <Navbar className="navbar-form navbar-fixed-top" sticky={'bottom'} style={{backgroundColor:bgColors.Shadow}} dark expand='lg'>
          <Container>
            <NavbarBrand href='/' className='navbar-nav ml-auto'>QA CINEMA LOGO</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='mr-auto' navbar>
                <NavItem onMouseOver={this.onMouseOver('listings')} onMouseOut={this.onMouseOut('listings')} style={{backgroundColor:this.state.listings}}>
                  <NavLink href="/Listings" color='primary'>Listings</NavLink>
                </NavItem>
                <NavItem onMouseOver={this.onMouseOver('future')} onMouseOut={this.onMouseOut('future')} style={{backgroundColor:this.state.future}}>
                  <NavLink href="/Future-Listings" color='primary'>Future Releases</NavLink>
                </NavItem>
                <NavItem onMouseOver={this.onMouseOver('screens')} onMouseOut={this.onMouseOut('screens')} style={{backgroundColor:this.state.screens}}>
                  <NavLink href="/" color='primary'>Screens</NavLink>
                </NavItem>
                <NavItem onMouseOver={this.onMouseOver('gettinghere')} onMouseOut={this.onMouseOut('gettinghere')} style={{backgroundColor:this.state.gettinghere}}>
                  <NavLink href="/getting-here" color='primary'>Getting Here</NavLink>
                </NavItem>
                <NavItem onMouseOver={this.onMouseOver('myaccount')} onMouseOut={this.onMouseOut('myaccount')} style={{backgroundColor:this.state.myaccount}}>
                  <NavLink href="/my-account" color='primary'>My Account</NavLink>
                </NavItem>
              </Nav>
              <Nav className='ml-auto' navbar>
                  <NavItem style={{marginRight:"90px"}}>
                      <AppSearchBar/>
                  </NavItem>

                  <NavItem style={{marginRight:"5px"}}>
                      <AppLogin />
                  </NavItem>
                  <NavItem >
                      <AppLogout/>
                  </NavItem>

              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    );
  }
}

export default AppNavbar;
