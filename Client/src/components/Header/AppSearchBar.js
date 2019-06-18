import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Input, InputGroup, InputGroupAddon } from 'reactstrap'

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

    render() {
        return (
            <div className='searchBar bgColor'>
                <Button onClick={this.toggle}>Search</Button>
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
