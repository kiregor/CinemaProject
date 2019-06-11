import React, {Component} from 'react';
import { Spinner } from 'reactstrap';

class ApiFetchPoster extends Component{

    constructor(props){
        super(props);
        this.state= {
            items: [],
            isLoaded: false,
        }
    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return(
                <div className="ApiFetchPoster">
                    <ul>
                        {items.map(item => (
                            <li key={item.ID}>
                                {item.name}
                            </li>
                        ))};
                    </ul>
                </div>
            );
        }
    }


    componentDidMount() {
        fetch('./demo')
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

}


export default ApiFetchPoster;