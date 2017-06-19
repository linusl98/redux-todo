import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

function Link({ active, children, onClick }) {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
