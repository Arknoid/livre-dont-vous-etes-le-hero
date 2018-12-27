/**
 * Import
 */
import React from 'react';
import PropType from 'prop-types';
/**
 * Local import
 */

import './link.sass';
/**
 * Component
 */
const Link = ({ to, setPage, ...rest }) => {
  return (
    <button type="button" {...rest} onClick={() => (setPage(to))} />
  );
};

Link.propType = {
  setPage: PropType.func.isRequired,
  to: PropType.string.isRequired,
};

/*
 * Export
 */
export default Link;
