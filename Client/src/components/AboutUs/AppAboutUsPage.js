import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import InstagramEmbed from './InstagramEmbed';

class AppAboutUsPage extends Component {
    render() {
        return (
            <div className='AppAboutUsPage'>
                <Container>
                    <Row>
                        <Col>
                        <InstagramEmbed/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    document.body.appendChild(script);
}
}

export default AppAboutUsPage;