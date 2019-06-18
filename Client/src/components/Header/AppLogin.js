import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import bgColors from '../../Constants';

class AppLogin extends React.Component {
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
        <Button onClick={this.toggle} onMouseOver={this.onMouseOver('backgroundColor')} onMouseOut={this.onMouseOut('backgroundColor')} style={{backgroundColor:this.state.backgroundColor}}>Log In</Button>
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