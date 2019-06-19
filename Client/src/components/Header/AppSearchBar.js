import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import bgColors from '../../Constants';

class AppSearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  onMouseOut = name => event => {
    this.setState({ [name]: bgColors.Shadow });
  }
  onMouseOver = name => event => {
    this.setState({ [name]: bgColors.Stone });
  }

  render() {
    return (
      <div className='searchBar bgColor'>
        <Button onClick={this.toggle} onMouseOver={this.onMouseOver('backgroundColor')} onMouseOut={this.onMouseOut('backgroundColor')} style={{backgroundColor:this.state.backgroundColor}}>Search</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='searchBarModal'>
          <ModalHeader toggle={this.toggle}>Search</ModalHeader>
            <ModalBody>
              <InputGroup>
              <InputGroupAddon addonType="prepend"><Button>Search</Button></InputGroupAddon>
              <Input/>
              </InputGroup>
            </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default AppSearchBar;
