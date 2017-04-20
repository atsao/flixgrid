import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';

const Button = props => {
  const { className, ghost, onClick, disabled } = props;
  let classes = '';

  if (ghost) {
    classes += styles['btn-ghost'];
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles['btn']} ${classes} `}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  ghost: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
