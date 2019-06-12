import axios from 'axios';
import { LOCAL_BACKEND_SERVER, PRICE_LIST } from '../../src/Constants'

class BookingService {
    /**
     * Takes the seat booking information for this transaction.
     * @param {array} bookedSeats A list of JSON objects consisting of location (seat number),
     * ticketType (child, adult etc.) and price
     */
    storeSeatingInformation(bookedSeats) {
        window.sessionStorage.setItem('bookedSeats', bookedSeats);
    }

    getPricingInformation() {
        return axios.get(`${LOCAL_BACKEND_SERVER}/${PRICE_LIST}`);
    }
    sendSeatingInformation(bookedSeats) {
        return axios.post(`${LOCAL_BACKEND_SERVER}/someEndPoint`, bookedSeats);
    }
}

export default new BookingService();