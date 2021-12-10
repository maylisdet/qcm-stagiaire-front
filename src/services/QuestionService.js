import { API } from 'utils/ServiceUtils';

export default class QuizService {
  static delete(questionId, callback, errorCallback) {
    API.delete(`/api/questions/${questionId}`)
      .then(callback())
      .catch(function (error) {
        errorCallback(error);
      });
  }
}
