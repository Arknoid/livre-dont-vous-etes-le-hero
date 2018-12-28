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

const PageMarais = WhitPage(({ player, setCurrentPage, setPlayerEnergy }) => (
  <Fragment>
    <Text>
      C'est au détour d'un marais fumant que vous rencontrez cet affreux monstre.
    </Text>
    <Link to="maraisFuite" setPage={setCurrentPage} action={setPlayerEnergy} actionValue={-10}>
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
