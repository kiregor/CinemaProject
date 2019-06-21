import axios from 'axios';
import { LOCAL_BACKEND_SERVER, ADMIN_LOGIN } from '../Constants'

class LoginService {
    LOGGED_IN = 'loggedIn'
    url;
    constructor(url) {
        this.url = url;
    }
    sendLoginDetailsToBackend(loginDetails) {
       return axios.post(`${LOCAL_BACKEND_SERVER}/${ADMIN_LOGIN}`, loginDetails)
    }
    saveLoginSession() {
        window.sessionStorage.setItem(this.LOGGED_IN, 'true')
    }
    removeLoginSession() {
        window.sessionStorage.removeItem(this.LOGGED_IN)
    }
    isAdminLoggedIn() {
        return !!window.sessionStorage.getItem(this.LOGGED_IN)
    }
}
export default new LoginService(LOCAL_BACKEND_SERVER);