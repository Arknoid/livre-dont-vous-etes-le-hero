/**
 * Import
 */
import React, { Fragment } from 'react';

/**
 * Local import
 */

import Text from 'components/Text';
import Link from 'components/Link';
import withPage from './withPage';

/**
 * Component
 */

const PageMarais = withPage(({ player, setCurrentPage, addPlayerEnergy }) => (
  <Fragment>
    <Text>
      C'est au détour d'un marais fumant que vous rencontrez cet affreux monstre.
    </Text>
    <Link to="maraisFuite" setPage={setCurrentPage} action={addPlayerEnergy} actionValue={-10}>
      Vous partez en courant sans vous retournez !
    </Link>
    {player.health > 50 && (
      <Link to="maraisCombat" setPage={setCurrentPage}>
        Vous êtes assez vaillant pour lui faire la peau !
      </Link>
    )}
  </Fragment>
), {
  chapter: 'Le marais maudit',
});


/**
 * Export
 */

export default PageMarais;
