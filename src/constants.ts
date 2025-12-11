export const BUTTON_TEXT = {
  VARIANT: {
    TEXT: 'Text',
    CONTAINED: 'Contained',
    OUTLINED: 'Outlined',
  },
  SIZE: {
    SMALL: 'Small',
    MEDIUM: 'Medium',
    LARGE: 'Large',
  },
  DISABLED: 'Disabled',
} as const;

export const INPUT_TEXT = {
  LABEL: {
    NAME: 'Name',
    EMAIL: 'Email',
    PASSWORD: 'Password',
  },
  PLACEHOLDER: {
    NAME: 'Enter your name',
    EMAIL: 'Enter your email',
    PASSWORD: 'Enter your password',
  },
  HELPER_TEXT: {
    EMAIL: 'We will not share your email.',
    EMAIL_ERROR: 'Invalid email address',
  },
} as const;

export const BUTTON_PROPS_TEXT = {
  BUTTON: {
    VARIANT: {
      TEXT: 'text',
      CONTAINED: 'contained',
      OUTLINED: 'outlined',
    },
    SIZE: {
      SMALL: 'small',
      MEDIUM: 'medium',
      LARGE: 'large',
    },
  },
} as const;

export const CHECKBOX_TEXT = {
  LABEL: {
    LABEL: 'Label',
    CHECKED: 'Checked',
    REQUIRED: 'Required',
    WITH_HELPER_TEXT: 'With helper text',
    ACCEPT_TERMS: 'Accept terms',
    CONTROLLED_CHECKBOX: 'Controlled checkbox',
  }
} as const;

export const SELECT_TEXT = {
  OPTION: {
    VALUE: {
      10: 'Ten',
      20: 'Twenty',
      30: 'Thirty',
      40: 'Forty',
      50: 'Fifty',
      60: 'Sixty',
    },
    TEXT: {
      SELECT: 'Select...',
      TEN: 'Ten',
      TWENTY: 'Twenty',
      THIRTY: 'Thirty',
      FORTY: 'Forty',
      FIFTY: 'Fifty',
      SIXTY: 'Sixty',
    },
  },
  LABEL: {
    AGE: 'Age',
  },
  HELPER_TEXT: {
    PLEASE_SELECT: 'Please select your age',
    REQUIRED: 'Required',
  },
} as const;

export const MODAL_CONTENT = {
  BASIC: {
    BUTTON: 'Open modal',
    TITLE: 'Basic modal',
    TEXT: 'This is a simple modal content.',
  },
  WITH_ACTIONS: {
    BUTTON: {
      OPEN: 'Open modal with actions',
      CONFIRM: 'Confirm',
      CANCEL: 'Cancel',
    },
    TITLE: 'Modal title',
    TEXT: 'Here you can place some meaningful explanation or confirmation text. Use the buttons below to simulate primary/secondary actions.',
  },
};
