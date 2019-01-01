/**
 * Import
 */
import React, { Fragment } from 'react';

/**
 * Local import
 */
import Text from 'components/Text';
import EnemyOgre from 'components/enemy/EnemyOgre';
import Action from 'components/Action';
import withPage from './withPage';
/**
 * Component
 */

const PageMaraisCombat = withPage((
  {
    setCurrentPage,
    player,
    setInCombat,
    addPlayerHealth,
  },
) => (
  <Fragment>
    <Text>
      Vous êtes face à un ogre géant vêtu d'un simple pagne troué.
      La vision de sa bouche remplie de dents pourries
      dégoulinant de bave ainsi que son odeur nauséabonde vous retourne le ventre, mais vous devez
      l'affronter afin de ne pas finir en civet ...
    </Text>
    <EnemyOgre
      setInCombat={setInCombat}
      player={player}
      addPlayerHealth={addPlayerHealth}
    />
    {player.inCombat === false && (
      <Action
        linkTo="marais"
        linkFunction={setCurrentPage}
        text="Continuer"
      />
    )}
  </Fragment>
), {
  chapter: 'Le marais maudit',
});

/**
 * Export
 */

export default PageMaraisCombat;
