import { API } from 'utils/ServiceUtils';

export default class AuthentificationService {
  static signIn(data, callback, errorCallback) {
    API.post('auth/signin', data)
      .then(function (response) {
        callback(response);
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
