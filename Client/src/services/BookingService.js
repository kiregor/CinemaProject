import axios from 'axios';

const LOCAL_BACKEND_SERVER = 'http://localhost:8080';

class BookingService {
    url;
    constructor(url){
        this.url = url;
    }
    /**
     * Takes the seat booking information for this transaction.
     * @param {array} bookedSeats A list of JSON objects consisting of location (seat number),
     * ticketType (child, adult etc.) and price
     */
    storeSeatingInformation(bookedSeats) {
        window.sessionStorage.setItem('bookedSeats', bookedSeats);
    }

    async getPricingInformation() {
        return axios.get(`${this.url}/priceList`);
    }
    sendSeatingInformation(bookedSeats) {
        return axios.post(`${this.url}/someEndPoint`, bookedSeats);
    }
}

export default new BookingService(LOCAL_BACKEND_SERVER);