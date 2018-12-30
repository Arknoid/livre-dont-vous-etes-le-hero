/**
 * Import
 */
import React, { Fragment } from 'react';

/**
 * Local import
 */
import Text from 'components/Text';
import EnemyOgre from 'components/enemy/EnemyOgre';
import Link from 'components/Link';
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
      Vous êtes face à un ogre géant vêtu d'un simple pagne complètement troué.
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
      <Link to="marais" setPage={setCurrentPage}>
        Suite
      </Link>
    )}
  </Fragment>
), {
  chapter: 'Le marais maudit',
});

/**
 * Export
 */

export default PageMaraisCombat;
