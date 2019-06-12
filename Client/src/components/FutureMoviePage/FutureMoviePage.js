import React, {Component} from 'react';

import ApiFetchMoviePoster from './ApiFetchMoviePoster';


class FutureMoviePage extends Component {
  render() {
      return (
        <div>
        Now
            <ApiFetchMoviePoster title={this.props.match.params.movietitle}/>
        </div>
      );
    }
}

export default FutureMoviePage;