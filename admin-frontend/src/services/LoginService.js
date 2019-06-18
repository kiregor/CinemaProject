import axios from 'axios';
import { LOCAL_BACKEND_SERVER, ADMIN_LOGIN } from '../Constants'

class LoginService {
    url;
    constructor(url) {
        this.url = url;
    }
    sendLoginDetailsToBackend(loginDetails) {
       return axios.post(`${LOCAL_BACKEND_SERVER}/${ADMIN_LOGIN}`, loginDetails)
    }
}
export default new LoginService(LOCAL_BACKEND_SERVER);