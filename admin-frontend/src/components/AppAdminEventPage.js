import React, { Component } from 'react'
import ReactDOM from "react-dom";
import {Container, Row, Col, Button} from 'reactstrap'
import MovieService from '../services/MovieService';
import ScreenService from '../services/ScreenService';
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'
import axios from 'axios'

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
        this.submit = this.submit.bind(this)
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

    submit() {
        let movie = this.state.movieSelectedButton
        let screen = this.state.screenSelectedButton
        let date = this.state.date
        if(!movie || !screen || !date) {
            window.alert("empty fields..")
        } else {
            let len = this.state.movieSelectedButton.id.length
            let movieId = +this.state.movieSelectedButton.id[len - 1]
            len = this.state.screenSelectedButton.id.length
            let screenId = +this.state.screenSelectedButton.id[len - 1]
            axios.post("http://localhost:8080/newevent", {
                movieId: movieId + 1,
                screenId: screenId,
                eventKey: moment(this.state.date).format('YYYY-MM-DD-hh-mm') + "-2D",
                date: this.state.date
            }).then(response => {
                console.log(response)
            }).catch(error => console.log(error))
        }
        console.log(movie)
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
                            <h3>List of Movies</h3>
                            {this.state.movieDisplay}
                        </Col>
                        <Col>
                            <h3>List of Screens</h3>
                            {this.state.screenDisplay}
                        </Col>
                        <Col>
                            <h3>Datetime Picker</h3>
                            <DateTimePicker format="yy-MM-dd h:mm" onChange={this.onChange} value={this.state.date}/>
                        </Col>
                        <Col>
                            <h3>Done</h3>
                            <Button onClick={this.submit}>Submit</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AppAdminEventPage