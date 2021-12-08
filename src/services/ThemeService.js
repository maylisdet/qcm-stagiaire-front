import { API } from 'utils/ServiceUtils';

export default class ThemeService {
  static index(callback, errorCallback) {
    API.get('themes')
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }

  static get(themeId, callback, errorCallback) {
    API.get(`themes/${themeId}`)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        errorCallback(error);
      });
  }
}
