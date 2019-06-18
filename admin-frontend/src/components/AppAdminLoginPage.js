import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input, Button, Container, Row, Col, Form} from 'reactstrap';
import LoginService from '../services/LoginService'


class AppAdminLoginPage extends Component {

    constructor(props) {
        super(props);

        this.login = this.login.bind(this)
    }

    login(e) {
        e.preventDefault()
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        LoginService.sendLoginDetailsToBackend({ username, password })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="adminLoginPage">
                <div className="adminLoginBox">
                    <Container>
                        <Row>
                            <Col>
                                <h1>Login</h1>
                            </Col>
                        </Row>
                        <Form onSubmit={this.login}>
                            <Row>
                                <Col>
                                    <InputGroup size="lg">
                                        <InputGroupAddon addonType="prepend">
                                        </InputGroupAddon>
                                        <Input id="username" placeholder="Username" />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <InputGroup size="lg">
                                        <Input id="password" placeholder="Password" type="password" />
                                        <InputGroupAddon addonType="append">
                                            <Button type="submit">Login</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}

export default AppAdminLoginPage