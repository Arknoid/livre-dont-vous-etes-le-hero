/**
 * Import
 */

import React from "react";
import styled from "styled-components";

/**
 * Component
 */

const Text = props => {
  const P = styled.p`
    margin: 1.5rem 0;
    font-size: 1.3rem;
    letter-spacing: 2px;
    ::first-letter {
      text-transform: capitalize;
      font-size: 1.5rem;
    }
  `;
  return <P {...props} />;
};

/*
 * Export
 */

export default Text;
