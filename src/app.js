import {loginFromToken} from './login';
import {loginForm} from './loginForm';
import {registerForm} from './registerForm';

if (!loginFromToken()) {
  const formElement = loginForm();
  const registerFormElement = registerForm();
  document.body.append(formElement);
  document.body.append(registerFormElement);
} else {
  document.body.innerHTML = 'yay prisiloginom!';
}
