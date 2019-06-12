import axios from 'axios';
import { LOCAL_BACKEND_SERVER, PRICE_LIST } from '../../src/Constants'

class BookingService {
    url;
    constructor(url) {
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

    getPricingInformation() {
        return axios.get(`${this.url}/${PRICE_LIST}`);
    }
}

export default new BookingService(LOCAL_BACKEND_SERVER);