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
    if (action !== undefined && actionValue !== undefined) {
      action(actionValue);
    }
    setPage(to);
  };
  return (
    <button type="button" {...rest} onClick={handleClick} />
  );
};

Link.propType = {
  setPage: PropType.func.isRequired,
  to: PropType.string.isRequired,
  action: PropType.func,
  actionValue: PropType.number,
};

Link.defaultProps = {
  action: undefined,
  actionValue: undefined,
};

/*
 * Export
 */
export default Link;
