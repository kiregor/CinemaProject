
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GoogleLogin from 'react-google-login';

class AppLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  render() {

      const responseGoogle = (response) => {
          console.log("RRRRRRRResponseGoogle: "+JSON.stringify(response))}

    return (
      <div>
        <Button style={{backgroundColor:'#2A3132'}} onClick={this.toggle}>Log In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Log in</ModalHeader>
          <ModalBody>
            Add Form to log in

            <GoogleLogin
                clientId="458772893738-hp66otnn9svp5kr1jtg2ivshb398qrte.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Log in</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AppLogin;
