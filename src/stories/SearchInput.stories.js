import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { SearchInput } from '../components/Common/SearchInput';

export default {
  title: 'Common/SearchInput',
  component: SearchInput
};

const Template = (args) => {
  const [inputValue, setInputValue] = useState(args.value);

  const onChangeHandler = (updatedValue) => {
    setInputValue(updatedValue);
    action('onChange')(updatedValue);
  };

  return <SearchInput {...args} onChange={onChangeHandler} value={inputValue} />
};

export const defaultSearchInput = Template.bind({});
defaultSearchInput.args = {};

export const predefinedSearchInput = Template.bind({});
predefinedSearchInput.args = {
  value: 'some value',
  label: 'Find'
};