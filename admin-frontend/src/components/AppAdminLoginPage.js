import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input, Button, Container, Row, Col, Form, Alert } from 'reactstrap';
import LoginService from '../services/LoginService'


class AppAdminLoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showErrors: false
        }

        this.login = this.login.bind(this)
        this.showErrors = this.showErrors.bind(this)
        this.hideErrors = this.hideErrors.bind(this)
    }

    login(e) {
        e.preventDefault()
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let validCredentials = false
        console.log(username, password)
        LoginService.sendLoginDetailsToBackend({ username, password })
            .then(response => {
                console.log(response.data)
                validCredentials = response.data
                if (validCredentials) {
                    // Go to next page
                    LoginService.saveLoginSession();
                    window.location.assign('/event-page');
                } else {
                    this.showErrors();
                }
            })
            .catch(error => {
                console.log(error)
                this.showErrors()
            });
    }

    showErrors() {
        this.setState(prevState => { return { showErrors: true } })
    }


    hideErrors() {
        this.setState(prevState => { return { showErrors: false } })
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
                            <Row>
                                <Col>
                                    <Alert color="danger" isOpen={this.state.showErrors} toggle={this.hideErrors}>
                                        Your username or password is incorrect
                                    </Alert>
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