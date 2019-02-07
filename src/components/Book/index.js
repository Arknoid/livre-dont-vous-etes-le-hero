/**
 * Import
 */
import React, { useState, useContext } from "react";
import styled from "styled-components";

/**
 * Local import
 */

import { playerContext } from "store/PlayerProvider";
import PageMarais from "components/pages/PageMarais";
import PageMaraisCombat from "components/pages/PageMaraisCombat";
import PageMaraisFuite from "components/pages/PageMaraisFuite";
import { PlayerContext } from 'store/PlayerProvider';

const Book = () => {

  /*
  * Styles
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

  /*
  * State
  */
  const [currentPage, setCurrentPage] = useState("marais");

  /*
  * Context
  */
  const context = useContext(PlayerContext);

  /*
  * Const
  */
  const components = {
    marais: PageMarais,
    maraisCombat: PageMaraisCombat,
    maraisFuite: PageMaraisFuite
  };
  const PageComponent = components[currentPage];
  const {resetPlayer} = context;
  console.log(context);

  /*
  * Functions
  */
  const resetGame = () => {
    resetPlayer();
    setCurrentPage("marais")
  };

  /*
  * Component
  */
  return (
    <BookWrapper>
      <PageComponent
        setCurrentPage={setCurrentPage}
        resetGame={resetGame}
      />
    </BookWrapper>
  )

};


/**
 * Export
 */
export default Book;
