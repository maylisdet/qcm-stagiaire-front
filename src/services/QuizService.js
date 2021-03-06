import { API } from 'utils/ServiceUtils';

export default class QuizService {
  static index(callback, errorCallback) {
    API.get('quizzes')
      .then(function (response) {
        let data = response.data;
        callback(data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static get(quizId, callback, errorCallback) {
    API.get(`quizzes/${quizId}`)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static getRecords(quizId, callback, errorCallback) {
    API.get(`quizzes/${quizId}/records`)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static create(quiz, callback, errorCallback) {
    API.post('quizzes', quiz)
      .then(function (response) {
        let data = response.data;
        callback(data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static delete(quizId, callback, errorCallback) {
    API.delete(`quizzes/${quizId}`)
      .then(function (response) {
        callback();
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static patch_update(quizId, data, callback, errorCallback) {
    API.put(`quizzes/${quizId}`, data)
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }
}
