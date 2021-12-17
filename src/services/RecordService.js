import { API } from 'utils/ServiceUtils';

export default class RecordService {
  static index(callback, errorCallback) {
    API.get('records')
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static get(recordId, callback, errorCallback) {
    API.get(`records/${recordId}`)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static post(recordData, callback, errorCallback) {
    let newAnswers = recordData.answers.map((answer) => {
      answer.question = {
        id: answer.question_id,
      };
      delete answer.question_id;
      return answer;
    });

    recordData.answers = newAnswers;

    API.post(`records`, recordData)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }
}
