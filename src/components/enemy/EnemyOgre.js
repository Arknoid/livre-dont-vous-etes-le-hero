/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */

import EnemyCard from 'components/EnemyCard';
import withEnemy from './withEnemy';

/**
 * Component
 */

const EnemyOgre = withEnemy(props => (
  <EnemyCard
    picture="ogre.jpeg"
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
