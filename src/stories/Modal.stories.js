import React, { useState } from 'react';

import { ModalWrapper, Modal } from '../components/Common/Modal';

export default {
  title: 'Common/Modal',
  component: Modal,
  argTypes: {
    textContent: { control: 'text' }
  }
};

const Template = ({ textContent, ...args }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  setTimeout(() => setIsModalOpened(true));

  args.children = <p style={{color: 'white', whiteSpace: 'pre-wrap', textAlign: 'center'}}>{textContent}</p>

  return <>
    <ModalWrapper />
    <Modal {...args} isModalOpened={isModalOpened}/>
  </>
};


export const modal = Template.bind({});
modal.args = {
  title: 'Test modal',
  textContent: 'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
};