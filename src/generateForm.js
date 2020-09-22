import {createNode} from "./createNode";

export function generateForm(inputs, buttons) {
  const form = document.createElement('form');

  inputs.forEach(inputAttributes => {
    const inputElement = createNode('input', inputAttributes);
    form.append(inputElement);
});

  buttons.forEach(button => {
    const buttonElement = createNode('button', buttonAttributes);
    buttonElement.innerHTML = button.title;
    form.append(buttonElement);
});

  return form;
}


