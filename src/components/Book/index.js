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

  setCurrentPage = (page) => {
    this.setState({
      book: {
        currentPage: page,
      },
    });
  };

  setPlayerEnergy = (number) => {
    this.setState(state => ({
      player: {
        ...state.player,
        energy: state.player.energy + number,
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

  setPlayerHealth = (number) => {
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
      <div className="Book">
        <PageComponent
          player={player}
          book={book}
          setCurrentPage={this.setCurrentPage}
          setPlayerHealth={this.setPlayerHealth}
          setPlayerEnergy={this.setPlayerEnergy}
          consumeRation={this.consumeRation}
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
