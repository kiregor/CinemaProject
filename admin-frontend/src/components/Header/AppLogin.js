
import React from 'react';
import { Button } from 'reactstrap';
import LoginService from '../../services/LoginService';

class AppLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      adminLoggedIn: LoginService.isAdminLoggedIn()
    };
    this.toggle = this.toggle.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this)
  }

  login() {
    // Back to login page
    window.location.assign('/')
  }

  logout() {
    LoginService.removeLoginSession()
    window.location.assign('/')
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        {(!this.state.adminLoggedIn) &&
          <Button onClick={this.login} style={{ backgroundColor: '#2A3132' }}>Log In</Button>
        }
        {(this.state.adminLoggedIn) &&
          <Button onClick={this.logout} style={{ backgroundColor: '#2A3132' }}>Log Out</Button>
        }
      </div>
    );
  }
}

export default AppLogin;