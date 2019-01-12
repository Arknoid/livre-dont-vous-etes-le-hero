/**
 * Import
 */
import React from "react";
import PropType from "prop-types";
import styled from "styled-components";

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
  const Button = styled.button`
    border: none;
    font-size: 1.2rem;
    background-color: burlywood;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 3px;
    :hover {
      background-color: peru;
      box-shadow: 0 0 10px peru;
    }
  `;

  const handleClick = () => {
    if (actionFunction !== undefined) {
      actionFunction(actionParam, actionParam1, actionParam2);
    }
    if (linkFunction !== undefined) {
      linkFunction(linkTo);
    }
  };
  return (
    <Button type="button" onClick={handleClick}>
      {text}
    </Button>
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
