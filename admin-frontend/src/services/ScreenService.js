import axios from 'axios';
import { LOCAL_BACKEND_SERVER, PRICE_LIST, API_KEY, CHECK_MOVIES, GET_ALL_MOVIES, GET_SCREENS } from '../Constants'

class ScreenService {
    url;
    constructor(url) {
        this.url = url;
    }

    getAllScreens() {
        return axios.get(`${this.url}/${GET_SCREENS}`)
    }
}
export default new ScreenService(LOCAL_BACKEND_SERVER)