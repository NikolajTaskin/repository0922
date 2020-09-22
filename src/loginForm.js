import {generateForm} from './generateForm';

export function loginForm() {
  return generateForm(inputs, buttons);
}

const inputs = [
  {
    placeholder: 'Email',
    name: 'email',
    type: 'email'
  },
  {
    placeholder: 'Password',
    name: 'password',
    type: 'password'
  }
];

const buttons = [
  {
    type: 'submit',
    name: 'login',
    title: 'Prisijungti'
  }
];
