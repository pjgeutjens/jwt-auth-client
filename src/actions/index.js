import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types'

const API_URL = 'http://localhost:3030';

export function signinUser({email, password}) {
  return function(dispatch) {
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        // update state to authorized: true
        dispatch({ type: AUTH_USER });
        // save JWT token
        localStorage.setItem('token', response.data.token);
        // redirect to protected /feature route
        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Bad Login info'))
      })
  }
  
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
  
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}