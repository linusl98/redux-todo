import React, { PropTypes } from 'react';
import FilterLink from '../containers/FilterLink.jsx';

const propTypes = {};

const defaultProps = {};

function Footer() {
  return (
    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {' '}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {' '}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
