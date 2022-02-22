/**
 * @author Isaac S. Mwakabira
 * 
 * Promise wrapper
 */
const Promise = function (promise) {
    return {
        get() {
            return promise
                .then(response => response)
                .catch(error => error)
        },

        intercept() {
            return promise
                .then(response => response)
                .catch(error => error)
        }
    }
}

export default Promise;