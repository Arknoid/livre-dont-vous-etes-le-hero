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
import { maraisMauditData } from 'data/chapter';
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
      Vous êtes face à un ogre géant vêtu d&apos;un simple pagne troué.
      La vision de cette bouche remplie de dents pourries
      dégoulinant de bave ainsi qu&apos;une odeur nauséabonde vous retourne sérieusement le ventre,
      mais vous devez l&apos;affronter afin de ne pas finir en civet ...
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
), maraisMauditData);

/**
 * Export
 */

export default PageMaraisCombat;
