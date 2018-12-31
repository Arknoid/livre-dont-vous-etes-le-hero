/**
 * Import
 */
import React, { Component } from 'react';

/**
 * Local import
 */

import './book.sass';
import PageMarais from 'components/pages/PageMarais';
import PageMaraisCombat from 'components/pages/PageMaraisCombat';
import PageMaraisFuite from 'components/pages/PageMaraisFuite';
import PlayerStats from 'components/PlayerStats';

/**
 * Code
 */

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        health: 100,
        energy: 100,
        ration: 10,
        inCombat: false,
        damage: 6, // rollDice
        armor: 3, // rollDice 0 to value
        combatSkill: 6,
      },
      book: {
        currentPage: 'marais',
      },
    };
    this.components = {
      marais: PageMarais,
      maraisCombat: PageMaraisCombat,
      maraisFuite: PageMaraisFuite,
    };
  }

  setInCombat = (bool) => {
    this.setState(state => ({
      player: {
        ...state.player,
        inCombat: bool,
      },
    }));
  };

  setCurrentPage = (page) => {
    this.setState({
      book: {
        currentPage: page,
      },
    });
  };

  addPlayerEnergy = (number) => {
    this.setState(state => ({
      player: {
        ...state.player,
        energy: state.player.energy + number,
      },
    }));
  };

  resetGame = () => {
    this.setState(state => ({
      player: {
        ...state.player,
        health: 100,
      },
      book: {
        currentPage: 'marais',
      },
    }));
  };

  setPlayerRation = (number) => {
    this.setState(state => ({
      player: {
        ...state.player,
        ration: state.player.ration + number,
      },
    }));
  };

  addPlayerHealth = (number) => {
    this.setState(state => ({
      player: {
        ...state.player,
        health: state.player.health + number,
      },
    }));
  };

  consumeRation = () => {
    this.setPlayerRation(-1);
    this.setState(state => ({
      player: {
        ...state.player,
        energy: 100,
      },
    }));
  };

  render() {
    const { player, book } = this.state;
    const PageComponent = this.components[book.currentPage];
    return (
      <div id="book">
        <PageComponent
          player={player}
          book={book}
          setCurrentPage={this.setCurrentPage}
          addPlayerHealth={this.addPlayerHealth}
          addPlayerEnergy={this.addPlayerEnergy}
          consumeRation={this.consumeRation}
          setInCombat={this.setInCombat}
          resetGame={this.resetGame}
        />
        <PlayerStats
          {...player}
        />
      </div>
    );
  }
}

/**
 * Export
 */
export default Book;
