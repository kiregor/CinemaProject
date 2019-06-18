
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const BACKGROUNDCOLOR='#2A3132'
const LIGHTCOLOR='#336B87'

class AppCreateAccount extends React.Component {
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
        <Button onClick={this.toggle} onMouseOver={this.onMouseOver('listings')} onMouseOut={this.onMouseOut('listings')} style={{backgroundColor:this.state.listings}}>Create Account</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create Account</ModalHeader>
          <ModalBody>
            Add Form to create account
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Create Account</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AppCreateAccount;