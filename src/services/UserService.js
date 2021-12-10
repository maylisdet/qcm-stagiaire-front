import { API } from 'utils/ServiceUtils';

export default class UserService {
  static trainee_index(callback, errorCallback) {
    API.get('users?traineesOnly=true')
      .then(function (response) {
        let data = response.data;
        //TODO : Replace next line by a call to the records API
        let dataNew = data.map((obj) => ({ ...obj, records: [] }));
        callback(dataNew);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static get(userId, callback, errorCallback) {
    API.get(`users/${userId}`)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static get_records(userId, callback, errorCallback) {
    API.get(`users/${userId}/records`)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static delete(userId, callback, errorCallback) {
    API.delete(`users/${userId}`)
      .then(function (response) {
        callback();
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }
}
