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
const Link = (
  {
    to,
    setPage,
    action,
    actionValue,
    ...rest
  },
) => {
  const handleClick = () => {
    if (action !== undefined) {
      action(actionValue !== undefined ? actionValue : '');
    }
    if (setPage !== undefined) {
      setPage(to);
    }
  };
  return (
    <button type="button" {...rest} onClick={handleClick} />
  );
};

Link.propType = {
  setPage: PropType.func,
  to: PropType.string,
  action: PropType.func,
};

Link.defaultProps = {
  to: undefined,
  setPage: undefined,
  action: undefined,
  actionValue: undefined,
};

/*
 * Export
 */
export default Link;
