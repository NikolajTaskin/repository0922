// import {createNode} from './createNode';
// import {loginForm} from '../components/loginForm';
import {hyperScript} from '../library/hyperScript';

export function generateForm(inputs = [], buttons = [], handler) {
  const inputNodes = inputs.map(inputAttributes => {
    inputAttributes.keyup = (e) => {
      inputAttributes.value = e.target.value;
    };
    return hyperScript('input', inputAttributes);
  });

  const buttonNodes = buttons.map(buttonAttributes => {
    return hyperScript('button', buttonAttributes, buttonAttributes.title);
  });

  return hyperScript(
    'form', 
    {
      class: 'form form-login',
      method: 'POST',
      submit: handler,
      click: () => console.log('yay clicked'),
      keyup: () => console.log('key was pressed')
    }, 
    ...inputNodes,
    ...buttonNodes
    );
}





// import {createNode} from "./createNode";

// export function generateForm(inputs = [], buttons = [], handler) {
//   const form = document.createElement('form');

//   inputs.forEach(inputAttributes => {
//     const inputElement = createNode('input', inputAttributes);

//   inputElement.addEventListener('change', e => {
//     inputAttributes.value = inputElement.value
//   });

//   form.append(inputElement);
// });

//   buttons.forEach(buttonAttributes => {
//     const buttonElement = createNode('button', buttonAttributes, [buttonAttributes.title]);
//     form.append(buttonElement);
// });

//   form.addEventListener('submit', handler)

//   return form;
// }


