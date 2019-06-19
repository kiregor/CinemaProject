import axios from 'axios';
import { LOCAL_BACKEND_SERVER, PRICE_LIST, GET_USER_BOOKINGS} from '../../src/Constants'

class BookingService {
    url;
    constructor(url) {
        this.url = url;
    }

    getPricingInformation() {
        return axios.get(`${this.url}/${PRICE_LIST}`);
    }
}

export default new BookingService(LOCAL_BACKEND_SERVER);
