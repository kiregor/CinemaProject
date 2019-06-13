import axios from 'axios';

class stripeService {

    sendStripe(booking){
        
        return axios.post(`http://localhost:8080/booking`, booking);
    }
}

export default new stripeService();