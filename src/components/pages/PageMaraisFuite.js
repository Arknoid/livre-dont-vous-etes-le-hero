/**
 * Import
 */

import React, { Fragment } from 'react';
import random from 'random';

/**
 * Local import
 */

import Text from 'components/Text';
import Link from 'components/Link';
import withPage from './withPage';

/**
 * Component
 */

const PageMaraisFuite = withPage(({ player, setCurrentPage, addPlayerEnergy }) => {
  const diceRoll = random.int(1, 6);
  return (
    <fragment>
      {(diceRoll >= 5) ? (
        <Fragment>
          <Text>
            Vous vous entravez à une racine et vous roulez brutalement à terre.
            En vous relevant doucement vous découvrez cette horrible visage baveux s'approchant de
            vous pour vous dévorer.
          </Text>
          <Link to="maraisCombat" setPage={setCurrentPage}>
            Affronter le monstre.
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <Text>
            Vous fuyez de toutes vos forces.
          </Text>
          {player.energy > 10 && (
            <Link to="maraisFuite" setPage={setCurrentPage} action={addPlayerEnergy} actionValue={-10}>
              Continuer de courir sans relâche (-10 en énergie)
            </Link>
          )}
          <Link to="maraisCombat" setPage={setCurrentPage}>
            Se retourner et combattre le monstre affamé.
          </Link>
        </Fragment>
      )}
    </fragment>
  );
}, {
  chapter: 'Le marais maudit',
});

/**
 * Export
 */

export default PageMaraisFuite;
