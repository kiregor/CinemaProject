import axios from 'axios';
import { LOCAL_BACKEND_SERVER, SEND_MAIL } from '../../src/Constants'

class EmailService {

    emailSent() {
        window.sessionStorage.setItem('emailSent', true);
    }

    hasEmailBeenSent() {
        return window.sessionStorage.getItem('emailSent') === 'true';
    }

    sendEmail(sender, message) {
        let queryNo = "#" + (Math.floor(Math.random() * 1000000));
        return axios.post(
            `${LOCAL_BACKEND_SERVER}/${SEND_MAIL}`,
            { sender, message, queryNo });
    }
}

export default new EmailService();