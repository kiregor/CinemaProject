class SessionStorageService {

    setObject(obj) {
        for (let property in obj){
            window.sessionStorage.setItem(`${property}`, obj[property]);
        }
    }
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