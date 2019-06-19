import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import DateTabs from './AppDateTabs';
import './poster.css'
import axios from 'axios';
import {API_KEY} from '../../Constants';

// BASE URL FOR POSTER -->  http://image.tmdb.org/t/p/w500$
// BASE URL FOR YOUTUBE VIDEO --> https://www.youtube.com/watch/?v=


var bgColors = { "Mist": "#90afc5",
                    "Stone": "#336b87",
                    "Shadow": "#2a3132",
                    "Autumn": "#763626",
};

const styles = {
  header: {
  },
  well: {
    boxShadow: `10px 10px 10px ${bgColors.Mist}`,
    padding:0
  },
};

const styles2 = {
  header: {
  },
  well: {
    boxShadow: `0px 3px 0px 0px ${bgColors.Autumn}`,
    padding:0
  },
};


class MovieDisplay extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            dataReceived: [],
            title: this.props.title,
            id: this.props.id,
            dateTabs: null,
            ageRating: []
        }
    this.Api=API_KEY
    }

    componentWillMount = (e) => {
        console.log(this.state.id)
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}/release_dates?api_key=${this.Api}`)
        .then(data => data.json())
        .then(data => {
        console.log(data);
        for (let i=0; i < data.results.length; i++){
            if (data.results[i].iso_3166_1 == 'GB'){
                this.setState({
                    ageRating : data.results[i].release_dates[0].certification,
                    isLoaded:true
                }) 
                if (this.state.ageRating == ''){
                    this.setState({ageRating:'NA'})
                }
            }
        this.setState({isLoaded:true})
        }   
        this.setState({isLoaded:true})  
        console.log(this.state.ageRating);
        })
    }


    componentDidMount(){
        axios.post('http://localhost:8080/getevents' , {
            movieName:this.state.title,
            imdbId:this.state.id
        }) 
        .then(response => {
            console.log(response);
            this.state.dataReceived = response.data;
        this.setState({dateTabs:<DateTabs data={this.state.dataReceived}/>} )
        })
        .catch(error => console.log(error))
    }    
        
    render() {
        return (
            
            <Container>
                <Row>
                    <Col style ={styles.well}>
                    <img style ={styles.well} src={`http://image.tmdb.org/t/p/w1280${this.props.image}`} alt="Movie Poster" style={{width:"100%", height:"100%"}} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div  style={{fontSize: 35}}>{this.props.title}</div>
                    </Col>                
                </Row>
                <Row>
                    <Col>
                    <   div style={{fontSize: 22}}> <a style={{color: bgColors.Shadow}} >Release Date : {this.props.releasedate} </a></div>
                        <br/>
                        <div style={{fontSize: 18}}> <a style={{color: bgColors.Autumn}}> Rating : {this.props.rating}/10 </a></div>
                        <br/>
                        {this.state.ageRating}
                    </Col>

                    <Col >
                    <div style ={styles.header} style={{fontSize: 18}}> <a style={{color: bgColors.Shadow}}> {this.props.overview} </a></div>
                    </Col>    

                </Row>
                <Row>
                    <Col style ={styles2.well} >
                        <div style ={styles2.header}style={{fontSize: 35}}><a style={{color: bgColors.Shadow}}> Upcoming Showings </a></div>
                    </Col>                
                </Row>
                <Row>
                    <Col  sm={{ size: 7, order: 2, offset: 0 }}>
                        {this.state.dateTabs}
                    </Col>
                    
                </Row>
            </Container>
        )   
    }
}
export default MovieDisplay;
export var bgColors;