import {describe, expect, test} from '@jest/globals';
import {start} from './main';

describe('sum module', () => {
  test('returns the string hello', () => {
    expect(start()).toBe('Hello World');
  });
});