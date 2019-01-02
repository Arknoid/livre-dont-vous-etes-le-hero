/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */

import CharacterCard from 'components/CharacterCard';
import withEnemy from './withEnemy';

/**
 * Component
 */

const EnemyOgre = withEnemy(props => (
  <CharacterCard
    picture="ogre.jpeg"
    {...props}
  />
),
{
  picture: 'ogre.jpeg',
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
