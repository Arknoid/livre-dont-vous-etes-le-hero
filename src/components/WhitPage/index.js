/**
 * Import
 */
import React from 'react';
/**
 * Local import
 */
import './whitPage.sass';


/**
 * Component
 */
const WhitPage = (PageComponent, setting) => (

  function Page(props) {
    return (
      <div>
        <h1>{setting.title}</h1>
        <PageComponent
          {...props}
        />
      </div>
    );
  }
);


/**
 * Export
 */
export default WhitPage;
