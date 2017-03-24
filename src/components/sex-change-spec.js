/* eslint-env jasmine */
/* global describe, beforeEach, afterEach, it, expect */
import { simulateComponent, sendText } from '../test-helpers.js';
import './sex-change.js';

describe('Sex Change Component', () => {
  let $element, model;

  beforeEach(() => {
    [$element, model] = simulateComponent('sex-change');
  });

  afterEach(() => {
    document.body.removeChild($element);
  });

  it('Should enable users to change their sex', () => {
    sendText('input', 'F');
    expect(model.person.sex).toEqual('F');
  });
});
