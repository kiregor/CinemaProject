import axios from 'axios';

class BookingService {
    getPricingInformation() {
        return axios.get('http://localhost:8080/priceList');
    }
    sendSeatingInformation(bookedSeats) {
        return axios.post('http://localhost:8080/someEndPoint', bookedSeats);
    }
}

export default new BookingService();