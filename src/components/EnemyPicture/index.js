/**
 * Import
 */

import React from 'react';
import PropType from 'prop-types';

/**
 * Local import
 */
import './enemyPicture.sass';

/**
 * Component
 */
const EnemyPicture = (
  {
    picture,
    name,
    health,
    damage,
    armor,
    combatSkill,
  },
) => {
  const enemyImg = `./assets/enemy/${picture}`;
  return (
    <article>
      <img src={enemyImg} alt={name} />
      <div>{name}</div>
      <div>Santé : {health}</div>
      <div>Dégâts : {damage}</div>
      <div>Habilité au combat : {combatSkill}</div>
      <div>Armure : {armor}</div>
    </article>
  );
};

EnemyPicture.propTypes = {
  picture: PropType.string.isRequired,
  name: PropType.string.isRequired,
  health: PropType.number.isRequired,
  damage: PropType.number.isRequired,
  armor: PropType.number.isRequired,
  combatSkill: PropType.number.isRequired,
};

/*
 * Export
 */
export default EnemyPicture;
