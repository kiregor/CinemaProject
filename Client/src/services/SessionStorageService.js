/**
 * Helper class that wraps the window's sessionStorage object.
 */
class SessionStorageService {

    /**
     * Takes an object and stores them in the sessionStorage objects as string values.
     * @param {Object} obj - An object of values to store in the browser session.
     */
    setObject(obj) {
        for (let property in obj){
            window.sessionStorage.setItem(`${property}`, obj[property]);
        }
    }
    /**
     * 
     * @param {string} name - (Part of) the name of the item(s) to retrieve as an object.
     */
    getObject(name) {
        let res = {};
        for (let property in window.sessionStorage){
            if(property.indexOf(name) !== -1){
                res[property] = window.sessionStorage.getItem(property);
            }
        }
        return res;
    }
}
export default new SessionStorageService();