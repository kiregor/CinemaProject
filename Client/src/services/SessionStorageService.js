/**
 * Helper class that wraps the window's sessionStorage object.
 */
class SessionStorageService {

    /**
     * Takes an object and stores them in the sessionStorage objects as string values.
     * @param {Object} obj - An object of values to store in the browser session.
     */
    setObject(name, obj) {
        window.sessionStorage.setItem(name, JSON.stringify(obj));
    }
    /**
     * 
     * @param {string} name - (Part of) the name of the item(s) to retrieve as an object.
     */
    getObject(name) {
        return JSON.parse(window.sessionStorage.getItem(name));
    }

    /**
     * Name of a key in the session to delete
     * @param {string} name Key to delete
     */
    clearObject(name) {
        window.sessionStorage.removeItem(name, '');
    }
}
export default new SessionStorageService();