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
/**
 * Code
 */

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        life: 100,
      },
      book: {
        currentPage: 'marais',
      },
    };
  }

  setPage = (page) => {
    this.setState({
      book: {
        currentPage: page,
      },
    });
  };

  render() {
    const { book, player } = this.state;
    return (
      <div className="App">
        {book.currentPage === 'marais' && (
          <PageMarais
            player={player}
            book={book}
            setPage={this.setPage}
          />
        )}
        {book.currentPage === 'marais-fuite' && (
          <PageMaraisFuite
            player={player}
            book={book}
            setPage={this.setPage}
          />
        )}
        {book.currentPage === 'marais-combat' && (
          <PageMaraisCombat
            player={player}
            book={book}
            setPage={this.setPage}
          />
        )}
      </div>
    );
  }
}

/**
 * Export
 */
export default Book;
