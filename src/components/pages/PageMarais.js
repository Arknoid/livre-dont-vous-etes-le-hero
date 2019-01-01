/**
 * Import
 */
import React, { Fragment } from 'react';

/**
 * Local import
 */

import Text from 'components/Text';
import Action from 'components/Action';
import withPage from './withPage';

/**
 * Component
 */

const PageMarais = withPage(({ player, setCurrentPage, addPlayerEnergy }) => (
  <Fragment>
    <Text>
      C'est au détour d'un marais fumant que vous apercevez une étrange silhouette géante suivi d'un
      terrible grognement.
    </Text>
    <Action
      linkTo="maraisFuite"
      linkFunction={setCurrentPage}
      actionFunction={addPlayerEnergy}
      actionParam={-10}
      text="Vous partez en courant sans vous retournez ! (-10 en énergie)"
    />
    {player.health > 50 && (
      <Action
        linkTo="maraisCombat"
        linkFunction={setCurrentPage}
        text="Vous êtes assez vaillant pour lui faire la peau !"
      />
    )}
  </Fragment>
), {
  chapter: 'Le marais maudit',
});


/**
 * Export
 */

export default PageMarais;
