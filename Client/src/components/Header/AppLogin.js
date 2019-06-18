
import React ,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import SessionStorageService from '../../services/SessionStorageService';
import bgColors from '../../Constants';

class AppLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: bgColors.Shadow,
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onMouseOut = name => event => {
    this.setState({ [name]: bgColors.Shadow });
  }
  onMouseOver = name => event => {
    this.setState({ [name]: bgColors.Stone });
  }


  render() {
      const responseGoogle = (response) => {
          console.log("WORKKKKKK!!!!")
          if(response.googleId === undefined){
              console.log("User did NOT login!!")
          }else {
              console.log("User Authenticated Successfuly");
              console.log(response);
              console.log(response.googleId);
              SessionStorageService.setObject("userId",response.googleId);
              window.location.assign("/my-account");
          }
      }

    return (
      <div>
        <Button onClick={this.toggle} onMouseOver={this.onMouseOver('backgroundColor')} onMouseOut={this.onMouseOut('backgroundColor')} style={{backgroundColor:this.state.backgroundColor}}>Log In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Log in options</ModalHeader>
          <ModalBody>
            <GoogleLogin
                clientId="458772893738-hp66otnn9svp5kr1jtg2ivshb398qrte.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}
}

export default AppLogin;
