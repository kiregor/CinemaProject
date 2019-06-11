import axios from 'axios';



class BookingService {
    /**
     * Takes the seat booking information for this transaction.
     * @param {array} bookedSeats A list of JSON objects consisting of location (seat number),
     * ticketType (child, adult etc.) and price
     */
    storeSeatingInformation(bookedSeats) {
        window.sessionStorage('bookedSeats', bookedSeats);
    }

    getPricingInformation() {
        return axios.get('http://localhost:8080/priceList');
    }
    sendSeatingInformation(bookedSeats) {
        return axios.post('http://localhost:8080/someEndPoint', bookedSeats);
    }
}

export default new BookingService();