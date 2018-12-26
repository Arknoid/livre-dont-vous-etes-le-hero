/**
 * Import
 */
import React from 'react';
/**
 * Local import
 */

import './link.sass';
/**
 * Component
 */
const Link = ({ to, ...rest }) => {
  function handleClick() {
    console.log(to);
  }
  return (
    <button type="button" {...rest} onClick={handleClick} />
  );
};


/*
 * Export
 */
export default Link;
