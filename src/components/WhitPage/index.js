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
const WhitPage = (WrappedComponent, setting) => {
  function Page(props) {
    console.log(props);
    return (
      <div>
        <h1>{setting.title}</h1>
        <WrappedComponent
          {...props}
        />
      </div>
    );
  }
  return Page;
};


/**
 * Export
 */
export default WhitPage;
