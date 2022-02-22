import Axios from 'axios';

/**
 * Application global configuration
 * 
 * @author Isaac S. Mwakabira
 */
const Config = (() => {
    // Base URLs
    const SERVICE_HEROKU_SERVER = `http://localhost:8080/v1`
    const SERVICE_DEV_SERVER = `http://localhost:8080/v1`;

    const SERVICE_HEROKU_API = Axios.create({ baseURL: SERVICE_HEROKU_SERVER });
    const SERVICE_DEV_API = Axios.create({ baseURL: SERVICE_DEV_SERVER });

    return { 
        SERVICE_HEROKU_API,
        SERVICE_DEV_API,
    }
})();

export default Config;