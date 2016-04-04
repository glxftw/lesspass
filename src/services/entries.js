import request from 'axios';

export default {
  localStorage: null,
  getRequestConfig() {
    return {
      headers: {'Authorization': 'JWT ' + this.localStorage.getItem('token')}
    }
  },
  create(entry) {
    let config = this.getRequestConfig();
    return request.post('/api/entries/', entry, config)
      .then((response) => {
        return response;
      });
  },
  all(limit=20, offset=0) {
    let config = this.getRequestConfig();
    config['params'] = {
      'limit' : limit,
      'offset' : offset
    };
    return request.get(`/api/entries/`, config)
      .then((response) => {
        return response;
      });
  }
};
