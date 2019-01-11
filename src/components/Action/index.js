/**
 * Import
 */
import React from "react";
import PropType from "prop-types";
/**
 * Local import
 */

import "./action.sass";
/**
 * Component
 */
const Action = ({
  linkTo,
  linkFunction,
  actionFunction,
  actionParam,
  actionParam1,
  actionParam2,
  text
}) => {
  const handleClick = () => {
    if (actionFunction !== undefined) {
      actionFunction(actionParam, actionParam1, actionParam2);
    }
    if (linkFunction !== undefined) {
      linkFunction(linkTo);
    }
  };
  return (
    <button className="action" type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

Action.propTypes = {
  linkFunction: PropType.func,
  linkTo: PropType.string,
  actionFunction: PropType.func,
  text: PropType.string.isRequired,
  actionParam: PropType.oneOfType([PropType.string, PropType.number]),
  actionParam1: PropType.oneOfType([PropType.string, PropType.number]),
  actionParam2: PropType.oneOfType([PropType.string, PropType.number])
};

Action.defaultProps = {
  linkTo: undefined,
  linkFunction: undefined,
  actionFunction: undefined,
  actionParam: "",
  actionParam1: "",
  actionParam2: ""
};

/*
 * Export
 */
export default Action;
