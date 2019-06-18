import React, { Component } from 'react'
import ReactDOM from "react-dom";
import {Container, Row, Col, Button} from 'reactstrap'
import MovieService from '../services/MovieService';
import ScreenService from '../services/ScreenService';
import DateTimePicker from 'react-datetime-picker'

class AppAdminEventPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            movieList : [],
            screenList: [],
            screenDisplay: [],
            movieDisplay : [],
            movieSelectedButton : null,
            screenSelectedButton: null,
            date: new Date()
        }
        MovieService.getMoviesFromBackend()
        .then(response => {
            this.setState({ movieList : response.data })
            this.generateList("movie", "movieName");
        })
        .catch(error => console.log(error))
        ScreenService.getAllScreens()
        .then(response => {
            this.setState({screenList : response.data})
            this.generateList("screen", "screenType");
        }).catch(error => console.log(error))
        this.generateList = this.generateList.bind(this)
        this.toggleButton = this.toggleButton.bind(this)
        this.switchOffOtherButtons = this.switchOffOtherButtons.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    generateList(prop, field) {
        let output = []
        for(let i = 0; i < this.state[prop + "List"].length; ++i) {
            output.push(
                <Row key={i}>
                    <Button id={`button-${prop}-${i}`} onClick={((x) => (event) => this.toggleButton(x, prop))(i)}>{this.state[prop + "List"][i][field]}</Button>
                </Row>
            )
        } 
        this.setState({ [prop + "Display"] : output })
    }

    toggleButton(i, prop) {
        let selectedButton = document.getElementById(`button-${prop}-${i}`)
        let classes = selectedButton.getAttribute("class")
        selectedButton.setAttribute("class", `${classes} selected`)
        this.switchOffOtherButtons(i, prop)
        this.setState({[prop + "SelectedButton"] : selectedButton})
    }

    switchOffOtherButtons(j, prop){
        let currentButton, classes, index
        for(let i = 0; i < this.state[prop + "List"].length; ++i) {
            if(i !== j) {
                currentButton = document.getElementById(`button-${prop}-${i}`)
                classes = currentButton.getAttribute("class")
                index = classes.indexOf(" selected") === -1 ? classes.length : classes.indexOf(" selected")
                currentButton.setAttribute("class", classes.substring(0, index))
            }
        }
    }

    onChange(date) {
        this.setState({date})
    }

    render() {
        const date = '1990-06-05', 
        format = 'YYYY-MM-DD',
        inputFormat = 'DD/MM/YYYY',
        mode = 'date';
        return (
            <div className="adminEventPage">
                <Container>
                    <Row>
                        <Col>
                            <h1>List of Movies</h1>
                            {this.state.movieDisplay}
                        </Col>
                        <Col>
                            <h1>List of Screens</h1>
                            {this.state.screenDisplay}
                        </Col>
                        <Col>
                            <h1>Datetime Picker</h1>
                            <DateTimePicker onChange={this.onChange} value={this.state.date}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AppAdminEventPage