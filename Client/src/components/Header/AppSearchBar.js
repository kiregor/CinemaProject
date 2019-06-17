import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import MovieService from '../../services/MovieService'

class AppSearchBar extends Component {
    keyPresses;
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
        this.keyPresses = 0;
        this.toggle = this.toggle.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    onKeyDown() {
        ++this.keyPresses;
        if(this.keyPresses >= 3) {
            this.keyPresses = 0;
            console.log("SEARCH!");
        }
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
                            <Input onKeyDown={this.onKeyDown}/>
                        </InputGroup>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default AppSearchBar;