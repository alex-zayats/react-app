import React from 'react';
import { useToggleModal } from './hooks';

jest.mock('react', () => {
  return { 
    useState: (initialValue) => {
      let stateValue = initialValue;

      return [initialValue, (value) => stateValue = stateValue];
    }
  }
});

describe('hooks functionality', () => {

  it('should return approptiate result', () => {
    const [isModalOpened, toggleModalOpened] = useToggleModal();
    expect(isModalOpened).toBeFalsy();
    expect(typeof toggleModalOpened).toEqual('function');
  });
});