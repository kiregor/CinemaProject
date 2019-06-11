import axios from 'axios';

class EmailService {

    emailSent() {
        window.sessionStorage.setItem('emailSent', true);
    }

    sendEmail(sender, message){
        let queryNo = "#" + (Math.floor(Math.random() * 1000000));
        return axios.post(`http://localhost:8080/sendemail`, { sender, message, queryNo });
    }
}

export default new EmailService();