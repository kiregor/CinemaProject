import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import bgColors from '../../Constants';

class AppCreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: bgColors.Shadow,
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
    this.setState({ [name]: bgColors.Shadow });
  }
  onMouseOver = name => event => {
    this.setState({ [name]: bgColors.Stone });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} onMouseOver={this.onMouseOver('backgroundColor')} onMouseOut={this.onMouseOut('backgroundColor')} style={{backgroundColor:this.state.backgroundColor}}>Create Account</Button>
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