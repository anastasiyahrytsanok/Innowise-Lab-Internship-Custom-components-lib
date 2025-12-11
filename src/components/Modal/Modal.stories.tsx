import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import './Modal.scss';
import { MODAL_CONTENT } from '../../constants';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button type="button" className="lib-demo-button" onClick={() => setOpen(true)}>
          {MODAL_CONTENT.BASIC.BUTTON}
        </button>

        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <h2>{MODAL_CONTENT.BASIC.TITLE}</h2>
          <p>{MODAL_CONTENT.BASIC.TEXT}</p>
        </Modal>
      </>
    );
  },
};

export const WithActions: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
      <>
        <button type="button" className="lib-demo-button" onClick={() => setOpen(true)}>
          {MODAL_CONTENT.WITH_ACTIONS.BUTTON.OPEN}
        </button>

        <Modal {...args} open={open} onClose={handleClose}>
          <h2>{MODAL_CONTENT.WITH_ACTIONS.TITLE}</h2>
          <p>{MODAL_CONTENT.WITH_ACTIONS.TEXT}</p>

          <div className="lib-demo-actions">
            <button type="button" className="lib-demo-btn-secondary" onClick={handleClose}>
              {MODAL_CONTENT.WITH_ACTIONS.BUTTON.CANCEL}
            </button>

            <button type="button" className="lib-demo-btn-primary" onClick={handleClose}>
              {MODAL_CONTENT.WITH_ACTIONS.BUTTON.CONFIRM}
            </button>
          </div>
        </Modal>
      </>
    );
  },
};
