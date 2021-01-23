import axios from 'axios';

export function getExample() {
  return axios.get('test').then(({ data }) => data);
}

export function postExample(data) {
  return axios.post('test', data);
}
