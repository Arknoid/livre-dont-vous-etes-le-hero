/**
 * Import
 */
import React, { Component } from "react";

/**
 * Local import
 */
import Book from "components/Book";
import PlayerProvider from "store/PlayerProvider";

/**
 * Component
 */

class App extends Component {
  render() {
    return (
      <main>
        <PlayerProvider>
          <Book />
        </PlayerProvider>
      </main>
    );
  }
}

App.propTypes = {};

export default App;
