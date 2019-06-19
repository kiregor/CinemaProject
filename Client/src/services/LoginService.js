import axios from 'axios';
import { LOCAL_BACKEND_SERVER, GET_USER_BOOKINGS } from '../../src/Constants'

class LoginService {
    hasLoggedIn(){
        
        return (window.sessionStorage.getItem('userId')!==null);
    }
    getTickets() {
        let user_id=window.sessionStorage.getItem('userId');
        console.log(user_id);
        axios.post(`${LOCAL_BACKEND_SERVER}/${GET_USER_BOOKINGS}`,{user_id})
            .then(response => {
                console.log(response);
            } )
    }
}

export default new LoginService();
