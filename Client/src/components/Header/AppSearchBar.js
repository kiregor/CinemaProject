import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Input, InputGroup, InputGroupAddon, ListGroup, ListGroupItem } from 'reactstrap'
import MovieService from '../../services/MovieService';
import bgColors from '../../Constants';


class AppSearchBar extends Component {

  presses;
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      showResults: false,
      searchResults: [],
      searchInput: ''
    }
    this.presses = 0
    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.populateResults = this.populateResults.bind(this)
    this.clearResults = this.clearResults.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
        modal: !prevState.modal
    }))
  }
  onMouseOut = name => event => {
    this.setState({ [name]: bgColors.Shadow });
  }
  onMouseOver = name => event => {
    this.setState({ [name]: bgColors.Stone });
  }

  onChange(e) {
    let input = e.target.value;
    this.setState({searchInput: input});
    if(input.length !== 0 && input.length % 3 === 0) {
      MovieService.getMoviesFromBackend()
      .then(response => {
        this.populateResults(input, response.data);
      })
      .catch(error => {
        console.log(error)
      })
        
    } else if(input.length === 0) {
      this.clearResults();
    }
  }

  populateResults(searchTerm, movieList) {
    let results = [];
    let movieLowerCase;
    movieList = movieList.sort((movieA, movieB) => movieA.movieName.localeCompare(movieB.movieName));
    for(let i = 0; i < movieList.length; ++i) {
      movieLowerCase = movieList[i].movieName;
      movieLowerCase = Array.prototype.map.call(movieLowerCase, str => str.toLowerCase()).join("")
      if(movieLowerCase.indexOf(searchTerm) !== -1){
        results.push(<ListGroupItem key={i} tag='a' href={`/listings/${movieLowerCase}`}>{movieList[i].movieName}</ListGroupItem>);
      }
    }
    if(results.length > 0) { 
      this.setState({showResults: true})
    } else {
      this.setState({showResults: false})
    }
    this.setState({searchResults: results});
  }

  clearResults() {
    this.setState({showResults: false, searchResults: []});
  }

  render() {
    return (
      <div className='searchBar bgColor'>
        <Button onClick={this.toggle} onMouseOver={this.onMouseOver('backgroundColor')} onMouseOut={this.onMouseOut('backgroundColor')} style={{backgroundColor:this.state.backgroundColor, color:bgColors.Mist}}>Search</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='searchBarModal'>
          <ModalHeader toggle={this.toggle}>Search</ModalHeader>
          <ModalBody>
            <InputGroup>
              <InputGroupAddon addonType="prepend"><Button style={{backgroundColor:bgColors.Stone}}>Search</Button></InputGroupAddon>
              <Input onChange={this.onChange} value={this.state.searchInput}/>
            </InputGroup>
            {
              (this.state.showResults) && 
              <>
                <ListGroup flush>
                  {this.state.searchResults}
                </ListGroup>
              </>
            }
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default AppSearchBar;
