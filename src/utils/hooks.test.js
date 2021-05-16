import React from 'react';
import { useToggleModal } from './hooks';

const mockSetState = jest.fn();

jest.mock('react', () => {
  return {
    useState: (initialValue) => [initialValue, mockSetState]
  }
});

describe('hooks functionality', () => {
  it('should return approptiate result', () => {
    const [isModalOpened, toggleModalOpened] = useToggleModal();
    expect(isModalOpened).toBeFalsy();
    expect(typeof toggleModalOpened).toEqual('function');
  });
});

describe('hooks functionality', () => {
  it('should return approptiate result', () => {
    const [isModalOpened, toggleModalOpened] = useToggleModal();
    expect(isModalOpened).toBeFalsy();
    toggleModalOpened();
    expect(mockSetState).toBeCalledWith(!isModalOpened);
  });
});