/**
 * Import
 */
import React, { Component } from "react";
import styled from "styled-components";

/**
 * Local import
 */

import { playerContext } from "store/PlayerProvider";
import PageMarais from "components/pages/PageMarais";
import PageMaraisCombat from "components/pages/PageMaraisCombat";
import PageMaraisFuite from "components/pages/PageMaraisFuite";
import { PlayerContext } from 'store/PlayerProvider';

/**
 * Style
 */

const BookWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lora');
  font-family: 'Lora', serif;
  width: 80vw;
  height: 90vh;
  margin: 3rem auto;
  border: 8px solid sienna;
  box-shadow: 0 0 35px black;
  border-radius: 3px;
  background-color: bisque;
`;

/**
 * Code
 */

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "marais"
    };

    // Used for dynamic generate PageComponent
    this.components = {
      marais: PageMarais,
      maraisCombat: PageMaraisCombat,
      maraisFuite: PageMaraisFuite
    };
  }

  setCurrentPage = page => {
    this.setState(state => ({
      ...state,
      currentPage: page
    }));
  };

  resetGame = () => {
    const {resetPlayer} = this.context;
    resetPlayer();
    this.setState(() => ({
      currentPage: "marais"
    }));
  };

  render() {
    const { currentPage } = this.state;
    const PageComponent = this.components[currentPage];
    return (
      <BookWrapper>
        <PageComponent
          {...this.context}
          setCurrentPage={this.setCurrentPage}
          resetGame={this.resetGame}
        />
      </BookWrapper>
    );
  }

}
Book.contextType = PlayerContext;
/**
 * Export
 */
export default Book;
