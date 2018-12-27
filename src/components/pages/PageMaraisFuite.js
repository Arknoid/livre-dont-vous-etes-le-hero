/**
 * Import
 */
import React, { Fragment } from 'react';

/**
 * Local import
 */
import WhitPage from 'components/WhitPage';
import Text from 'components/Text';
import Link from 'components/Link';

/**
 * Component
 */

const PageMaraisFuite = WhitPage(({ player, book, ...props }) => (
  <Fragment>
    <Text>
      Vous fuyez de toute vos force.
    </Text>
    <Link to="marais-fuite" setPage={props.setPage}>
      vous partez en courant sans vous retournez !
    </Link>
  </Fragment>
), {
  title: 'Le marais',
  href: 'marais',
});

/**
 * Export
 */

export default PageMaraisFuite;
