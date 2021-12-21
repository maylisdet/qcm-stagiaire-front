import { API } from 'utils/ServiceUtils';

export default class AuthenticationService {
  static signIn(data, callback, errorCallback) {
    API.post('/auth/signin', data)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback();
      });
  }

  static signUp(data, callback, errorCallback) {
    API.post('auth/signup', data)
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        errorCallback();
      });
  }
}
