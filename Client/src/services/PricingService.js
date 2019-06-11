import axios from 'axios';

class PricingService {
    getPricingInformation() {
        return axios.get('http://192.168.1.102:8080/priceList');
    }
}

export default new PricingService();