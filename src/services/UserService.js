import { API } from 'utils/ServiceUtils';

export default class UserService {
  static getTrainees(callback, errorCallback) {
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

  static availableQuizzes(userId, callback, errorCallback) {
    API.get(`users/${userId}/quizzes`)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static getRecords(traineeId, callback, errorCallback) {
    API.get(`users/${traineeId}/records`)
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

  static newUser(data, callback, errorCallback) {
    API.post('users', data)
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        errorCallback();
      });
  }

  static update(userId, data, callback, errorCallback) {
    API.patch(`users/${userId}`, data)
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        errorCallback();
      });
  }
}
