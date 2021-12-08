import { API } from 'utils/ServiceUtils';

export default class QuizService {
  static index(callback, errorCallback) {
    API.get('quizzes')
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

  static get(quizId, callback, errorCallback) {
    API.get(`quizzes/${quizId}`)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }
}
