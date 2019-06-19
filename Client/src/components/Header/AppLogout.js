import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import bgColors from '../../Constants';

class AppCreateAccount extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     backgroundColor: bgColors.Shadow}

   this.logout = this.logout.bind(this);
 }

 logout(){
   window.sessionStorage.removeItem("userId");
   window.location.assign("/");
 }

 onMouseOut = name => event => {
   this.setState({ [name]: bgColors.Shadow });
 }
 onMouseOver = name => event => {
   this.setState({ [name]: bgColors.Stone });
 }


 render() {
   return (
     <div>
         <Button onClick={this.logout} onMouseOver={this.onMouseOver('backgroundColor')} onMouseOut={this.onMouseOut('backgroundColor')} style={{backgroundColor:this.state.backgroundColor, color:bgColors.Mist}}>Logout</Button>
     </div>
   );
 }
}

export default AppCreateAccount;