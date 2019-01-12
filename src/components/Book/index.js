/**
 * Import
 */
import React, { Component } from "react";
import styled from "styled-components";
/**
 * Local import
 */

import PageMarais from "components/pages/PageMarais";
import PageMaraisCombat from "components/pages/PageMaraisCombat";
import PageMaraisFuite from "components/pages/PageMaraisFuite";
// For initial states
import playerData from "data/player";

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
      player: {
        isDie: false,
        inCombat: false,
        name: playerData.name,
        picture: playerData.picture,
        health: playerData.health,
        energy: playerData.energy,
        ration: playerData.ration,
        damage: playerData.damage, // rollDice
        armor: playerData.armor, // rollDice
        combatSkill: playerData.combatSkill
      },
      book: {
        currentPage: "marais"
      }
    };

    // Used for dynamic generate PageComponent
    this.components = {
      marais: PageMarais,
      maraisCombat: PageMaraisCombat,
      maraisFuite: PageMaraisFuite
    };
  }

  setInCombat = bool => {
    this.setState(state => ({
      player: {
        ...state.player,
        inCombat: bool
      }
    }));
  };

  setPlayerDie = () => {
    this.setState(state => ({
      player: {
        ...state.player,
        picture: "skull.jpg",
        isDie: true
      }
    }));
  };

  setCurrentPage = page => {
    this.setState(state => ({
      ...state,
      book: {
        currentPage: page
      }
    }));
  };

  addPlayerEnergy = number => {
    this.setState(state => ({
      player: {
        ...state.player,
        energy: state.player.energy + number
      }
    }));
  };

  resetGame = () => {
    this.setState(state => ({
      player: {
        ...state.player,
        health: 20,
        picture: "face.jpg",
        isDie: false
      },
      book: {
        currentPage: "marais"
      }
    }));
  };

  addPlayerRation = number => {
    this.setState(state => ({
      player: {
        ...state.player,
        ration: state.player.ration + number
      }
    }));
  };

  addPlayerHealth = number => {
    this.setState(state => ({
      player: {
        ...state.player,
        health: state.player.health + number
      }
    }));
  };

  consumeRation = () => {
    this.addPlayerRation(-1);
    this.setState(state => ({
      player: {
        ...state.player,
        energy: 100
      }
    }));
  };

  render() {
    const { player, book } = this.state;
    const PageComponent = this.components[book.currentPage];
    return (
      <BookWrapper>
        <PageComponent
          player={player}
          book={book}
          setCurrentPage={this.setCurrentPage}
          addPlayerHealth={this.addPlayerHealth}
          addPlayerEnergy={this.addPlayerEnergy}
          consumeRation={this.consumeRation}
          setInCombat={this.setInCombat}
          resetGame={this.resetGame}
          setPlayerDie={this.setPlayerDie}
        />
      </BookWrapper>
    );
  }
}

/**
 * Export
 */
export default Book;
