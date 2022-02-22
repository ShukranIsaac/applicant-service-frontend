import ApplicantPortalService from '../common/portal.service'

/**
 * @author Isaac S. Mwakabira
 * 
 * User service controller
 */
class UserManager {
    /**
     * Fetch all users/resource(s) from the api
     * 
     * @returns {Promise} promise
     */
    getUsers = () => ApplicantPortalService.get(`/users`);

    /**
     * Fetch a single users/resource from the api
     * 
     * @returns {Promise} promise
     */
     getUser = (uid) => ApplicantPortalService.get(`/users/${ uid }`);
}

export default UserManager = new UserManager()