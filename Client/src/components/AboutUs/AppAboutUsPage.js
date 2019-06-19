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
                        <Col>
                            <h3>
                                About us
                            </h3>
                            
                            <p>
                            FSCinema in London offers a range of content, in addition to highly anticipated blockbusters, with event cinema titles including opera, ballet, musicals, national theatre, live streaming of sporting events and concerts through to hosting Gaming championships and dedicating multiple screens to eGaming arenas.
                            </p><p>
                            FSCinema was founded by 6 entheusiastic movie lovers in London following the acquisition of QACinema in mid 2019 and is part of the largest cinema group in Europe, FS International. 
                            Over the years FS has won numerous accolades for its service and innovations, including more recently International Exhibitor of the Year at CineEurope 2019 and Cinema Exhibitor of the Year Screen, Marketing & Distribution Awards, QAConsulting Project of the Year 2019.
                            </p>
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