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

const PageMarais = WhitPage(({ player, book, ...props }) => (
  <Fragment>
    <Text>
      C'est au détour d'un marais fumant que vous rencontrez cet affreux monstre.
    </Text>
    {player.life > 50 && (
      <Link to="maraisCombat" setPage={props.setPage}>
        Vous êtes assez vaillant pour lui faire la peau !
      </Link>
    )}
    <Link to="maraisFuite" setPage={props.setPage}>
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

export default PageMarais;
