import {AUTH, REGISTRATION, LOGIN} from './types'

export function auth() {
  return {
    type: AUTH
  }
}

export function registration() {
  return {
    type: REGISTRATION
  }
}

export function login() {
  return {
    type: LOGIN
  }
}