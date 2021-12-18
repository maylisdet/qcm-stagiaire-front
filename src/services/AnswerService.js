import { API } from 'utils/ServiceUtils';

export default class AnswerService {
  static post(answer, callback, errorCallback) {
    API.post(`answers`, answer)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static update(answerId, answer, callback, errorCallback) {
    API.patch(`/questions/${answerId}`, answer)
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }
}
