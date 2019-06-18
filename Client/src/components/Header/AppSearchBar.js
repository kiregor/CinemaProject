import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input, InputGroup, InputGroupAddon } from 'reactstrap';
const BACKGROUNDCOLOR='#2A3132'
const LIGHTCOLOR='#336B87'

class AppSearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listings: BACKGROUNDCOLOR,
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
        this.setState({ [name]: BACKGROUNDCOLOR });
    }
    onMouseOver = name => event => {
        this.setState({ [name]: LIGHTCOLOR });
    }

    render() {
        return (
            <div className='searchBar bgColor'>
                <Button onClick={this.toggle} onMouseOver={this.onMouseOver('listings')} onMouseOut={this.onMouseOut('listings')} style={{backgroundColor:this.state.listings}}>Search</Button>
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