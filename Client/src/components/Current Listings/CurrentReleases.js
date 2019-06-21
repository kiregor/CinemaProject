import React, {Component} from 'react';
import ApiFetchPoster from './ApiFetchPoster';


class CurrentReleases extends Component {
  render() {
      return (
        <div>
            <ApiFetchPoster/>
        </div>
      );
    }
}

export default CurrentReleases;