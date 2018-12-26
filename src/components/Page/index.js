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

import './page.sass';


/**
 * Component
 */

const PageMarais = WhitPage(({ player, book }) => (
  <Fragment>
    <Text>
      C'est au détour d'un marais fumant que vous rencontrez cet affreux monstre.
    </Text>
    <Link to="marais-combat">
      Vous êtes assez vaillant pour lui faire la peau !
    </Link>
    <Link to="marais-fuite">
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
