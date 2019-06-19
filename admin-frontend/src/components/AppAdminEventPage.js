import React, { Component } from 'react'
import { Container, Row, Col, Button, Jumbotron, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import MovieService from '../services/MovieService';
import ScreenService from '../services/ScreenService';
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'
import axios from 'axios'
import LoginService from '../services/LoginService';

class AppAdminEventPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movieList: [],
            screenList: [],
            screenDisplay: [],
            movieDisplay: [],
            movieSelectedButton: null,
            screenSelectedButton: null,
            adminLoggedIn: LoginService.isAdminLoggedIn(),
            date: new Date(),
            showSuccessMessage: false,
            successMessageDetails: null,
            showErrorMessage: false,
            errorMessage: ''
        }

        this.generateList = this.generateList.bind(this)
        this.toggleButton = this.toggleButton.bind(this)
        this.switchOffOtherButtons = this.switchOffOtherButtons.bind(this)
        this.onChange = this.onChange.bind(this)
        this.submit = this.submit.bind(this)
        this.showAlert = this.showAlert.bind(this)
        this.hideSuccess = this.hideSuccess.bind(this)
        this.showError = this.showError.bind(this)
        this.hideError = this.hideError.bind(this)
    }

    componentDidMount() {
        MovieService.getMoviesFromBackend()
            .then(response => {
                this.setState({ movieList: response.data })
                this.generateList("movie", "movieName");
            })
            .catch(error => console.log(error))
        ScreenService.getAllScreens()
            .then(response => {
                this.setState({ screenList: response.data })
                this.generateList("screen", "screenType");
            }).catch(error => console.log(error))
    }

    generateList(prop, field) {
        let output = []
        for (let i = 0; i < this.state[prop + "List"].length; ++i) {
            output.push(
                <Row key={i}>
                    <Button id={`button-${prop}-${i}`} onClick={((x) => (event) => this.toggleButton(x, prop))(i)}>{this.state[prop + "List"][i][field]}</Button>
                </Row>
            )
        }
        this.setState({ [prop + "Display"]: output })
    }

    toggleButton(i, prop) {
        let selectedButton = document.getElementById(`button-${prop}-${i}`)
        let classes = selectedButton.getAttribute("class")
        selectedButton.setAttribute("class", `${classes} selected`)
        this.switchOffOtherButtons(i, prop)
        this.setState({ [prop + "SelectedButton"]: selectedButton })
    }

    switchOffOtherButtons(j, prop) {
        let currentButton, classes, index
        for (let i = 0; i < this.state[prop + "List"].length; ++i) {
            if (i !== j) {
                currentButton = document.getElementById(`button-${prop}-${i}`)
                classes = currentButton.getAttribute("class")
                index = classes.indexOf(" selected") === -1 ? classes.length : classes.indexOf(" selected")
                currentButton.setAttribute("class", classes.substring(0, index))
            }
        }
    }

    onChange(date) {
        this.setState({ date })
    }

    showAlert(obj) {
        this.setState({ showSuccessMessage: true, successMessageDetails: obj });
        this.hideError()
    }

    showError(error) {
        this.setState({ showErrorMessage: true, errorMessage: error });
        this.hideSuccess();
    }

    hideSuccess() {
        this.setState({ showSuccessMessage: false });
    }

    hideError() {
        this.setState({ showErrorMessage: false });
    }

    submit() {
        let movie = this.state.movieSelectedButton
        let screen = this.state.screenSelectedButton
        let date = this.state.date
        if (!movie || !screen || !date) {
            this.showError({ message : "Some fields are empty"})
        } else {
            let movieName = movie.innerText
            let screenName = screen.innerText
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
                this.setState({ successMessageDetails: null })
                this.showAlert({
                    movieName,
                    screenName,
                    movieId: movieId + 1,
                    screenId: screenId,
                    eventKey: moment(this.state.date).format('YYYY-MM-DD-hh-mm') + "-2D",
                    date: this.state.date
                })
            }).catch(error => this.showError(error))
        }
    }

    render() {
        return (
            <div className="adminEventPage">
                {(this.state.adminLoggedIn) &&
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
                                <DateTimePicker format="yy-MM-dd h:mm" onChange={this.onChange} value={this.state.date} />
                            </Col>
                            <Col>
                                <h3>Done</h3>
                                <Row>
                                    <Button onClick={this.submit}>Submit</Button>
                                </Row>
                                <Row>
                                    <Col>
                                        <Alert isOpen={this.state.showSuccessMessage} toggle={this.hideSuccess} fade={false}>
                                            <p>
                                                Event Created:
                                           </p>
                                           {(this.state.successMessageDetails) &&
                                            <ul>
                                                <li>Movie Name : {this.state.successMessageDetails.movieName}</li>
                                                <li>Screen : {this.state.successMessageDetails.screenName}</li>
                                                <li>Movie Id : {this.state.successMessageDetails.movieId}</li>
                                                <li>Screen Id : {this.state.successMessageDetails.screenId}</li>
                                                <li>Event Key : {this.state.successMessageDetails.eventKey}</li>
                                                <li>Screen Time : {moment(this.state.successMessageDetails.date).format('DD-MM-YYYY hh:mm')}</li>
                                                {
                                                    console.log()
                                                }
                                            </ul>
                                            }
                                        </Alert>
                                        <Alert color="danger" isOpen={this.state.showErrorMessage} toggle={this.hideError} fade={false}>
                                            <p>Error: {this.state.errorMessage.message}</p>
                                        </Alert>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                }
                {(!this.state.adminLoggedIn) &&
                    <Container>
                        <Row>
                            <Jumbotron>
                                <h1 className='display-3'>You do not have the credentials to view this page.</h1>
                                <p className='lead'>This page is for admin use only.</p>
                                <hr className='my-2' />
                                <p>Please <Link to='/'>login</Link> or return to the main site.</p>
                            </Jumbotron>
                        </Row>
                    </Container>
                }
            </div>
        )
    }
}
export default AppAdminEventPage