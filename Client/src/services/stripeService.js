import axios from 'axios';

class stripeService {

    sendStripe(booking){
        
        return axios.post(`http://localhost:8080/booking`, booking);
    }

    getSuccessStatus(){
        return axios.get(`http://localhost:8080/status`);
    }
}

export default new stripeService();