import axios from 'axios';
import { LOCAL_BACKEND_SERVER, CHECK_TICKETS } from '../../src/Constants'

class LoginService {
    hasLoggedIn(){
        return (window.sessionStorage.getItem('userId')!==null);
    }
    getTickets() {
        let user_id=window.sessionStorage.getItem('tokenid');
        return axios.post(`${LOCAL_BACKEND_SERVER}/${CHECK_TICKETS}`,{user_id});
    }
}

export default new LoginService();