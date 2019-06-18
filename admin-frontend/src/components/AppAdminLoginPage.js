import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input, Button, Container, Row, Col } from 'reactstrap';


class AppAdminLoginPage extends Component {

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
                        <Row>
                            <Col>
                                <InputGroup size="lg">
                                    <InputGroupAddon>
                                    </InputGroupAddon>
                                    <Input placeholder="Username" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup size="lg">
                                    <Input placeholder="Password" type="password"/>
                                    <InputGroupAddon addonType="append">
                                        <Button>Login</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default AppAdminLoginPage