/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */

import EnemyPicture from 'components/EnemyPicture';
import withEnemy from './withEnemy';

/**
 * Component
 */

const EnemyOgre = withEnemy(props => (
  <EnemyPicture
    picture="ogre.png"
    {...props}
  />
),
{
  name: "l'ogre affamé",
  health: 20,
  damage: 8,
  armor: 2,
  combatSkill: 7,
});


/**
 * Export
 */

export default EnemyOgre;
