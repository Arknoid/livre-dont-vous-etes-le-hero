/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */

import CharacterCard from 'components/CharacterCard';
// initial state and props
import { ogreAffame } from 'data/enemy';

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
ogreAffame);


/**
 * Export
 */

export default EnemyOgre;
