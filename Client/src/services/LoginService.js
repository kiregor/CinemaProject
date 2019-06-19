import axios from 'axios';
import { LOCAL_BACKEND_SERVER, GET_USER_BOOKINGS } from '../../src/Constants'

class LoginService {
    hasLoggedIn(){
        
        return (window.sessionStorage.getItem('userId')!==null);
    }
    getTickets() {
        let user_id=window.sessionStorage.getItem('userId');
        console.log(user_id);
        return axios.get(`${LOCAL_BACKEND_SERVER}/${GET_USER_BOOKINGS}/`+user_id)
    }
}

export default new LoginService();
