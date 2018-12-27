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
  components = {
    marais: PageMarais,
    maraisCombat: PageMaraisCombat,
    maraisFuite: PageMaraisFuite,
  };

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
    const { player, book } = this.state;
    const { currentPage } = book;
    const PageComponent = this.components[currentPage];
    return (
      <div className="Book">
        <PageComponent
          player={player}
          book={book}
          setPage={this.setPage}
        />
      </div>
    );
  }
}

/**
 * Export
 */
export default Book;
