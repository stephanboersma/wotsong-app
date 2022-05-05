import './button.css';

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Primary UI component for user interaction
 */
/* const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}; */

const Button = ({ label, isInverted, ...props }) => {
  const filledClassNames = [
    `bg-cornflower`,
    `hover:bg-cornflower`,
    'text-white',
  ];
  const invertedClassNames = [
    'bg-transparent',
    `hover:border-cornflower`,
    `hover:text-cornflower`,
    `text-cornflower`,
  ];

  const additionalClassNames = isInverted
    ? invertedClassNames
    : filledClassNames;

  return (
    <button
      type="button"
      className={[
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-offset-2',
        `focus:ring-cornflower`,
        'transition',
        'duration-150',
        'ease-in-out',
        'lg:text-xl',
        'lg:font-bold',
        'rounded',
        'border',
        `border-cornflower`,
        'px-4',
        'sm:px-10',
        'py-2',
        'sm:py-4',
        'text-sm',
        ...additionalClassNames,
      ]}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  isInverted: PropTypes.bool,

  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isInverted: false,
  onClick: undefined,
};

export default Button;
