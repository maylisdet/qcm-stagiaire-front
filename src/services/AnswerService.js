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
}
