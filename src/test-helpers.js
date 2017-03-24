import rivets from 'rivets';

function simulateComponent(name) {
  const component = rivets.components[name];

  let $element = document.createElement('div');
  $element.innerHTML = component.template();
  document.body.appendChild($element);

  let model = component.initialize();
  rivets.bind(document.body, model);
  return [$element, model];
}

function sendText(selector, text) {
  const $input = document.querySelector(selector);
  $input.value = text;

  const inputEvent = new Event('input');
  $input.dispatchEvent(inputEvent);
}

export { simulateComponent, sendText };
