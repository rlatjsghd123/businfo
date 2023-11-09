import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://ws.bus.go.kr/api/rest',
});
