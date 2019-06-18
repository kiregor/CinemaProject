
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const BACKGROUNDCOLOR='#2A3132'
const LIGHTCOLOR='#336B87'

class AppLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: BACKGROUNDCOLOR,
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onMouseOut = name => event => {
    this.setState({ [name]: BACKGROUNDCOLOR });
  }
  onMouseOver = name => event => {
    this.setState({ [name]: LIGHTCOLOR });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} onMouseOver={this.onMouseOver('listings')} onMouseOut={this.onMouseOut('listings')} style={{backgroundColor:this.state.listings}}>Log In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Log in</ModalHeader>
          <ModalBody>
            Add Form to log in
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