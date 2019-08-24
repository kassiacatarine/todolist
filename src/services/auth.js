// import jwt from 'jsonwebtoken';
import api from './api';


export default class Auth {
  
  isAuthenticated = () => localStorage.getItem('token') !== null;
  
  getToken = () => localStorage.getItem('token');
  
  register = async (user) => {
    return api.post('/register', user);
  }
  
  login = async (user) => {
    return api.post('/login', user);
  }
}