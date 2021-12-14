import { API } from 'utils/ServiceUtils';

export default class QuestionService {
  static delete(questionId, callback, errorCallback) {
    API.delete(`/questions/${questionId}`)
      .then(function (response) {
        callback();
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static get(questionId, callback, errorCallback) {
    API.get(`/questions/${questionId}`)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static create(question, callback, errorCallback) {
    API.post('/questions', question)
      .then(function (response) {
        callback();
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }
}
