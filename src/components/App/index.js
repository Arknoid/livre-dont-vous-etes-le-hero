/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
import './app.sass';
import Page from 'components/Page';

/**
 * Code
 */
const book = {
  currentPage: '',
};

function App() {
  return (
    <div className="App">
      <Page book={book} />
    </div>
  );
}

/**
 * Export
 */
export default App;
