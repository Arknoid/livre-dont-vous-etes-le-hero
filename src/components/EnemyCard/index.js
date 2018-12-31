/**
 * Import
 */

import React from 'react';
import PropType from 'prop-types';
/**
 * Local import
 */
import './enemyCard.sass';

/**
 * Component
 */
const EnemyCard = (
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
    <article className="enemyCard" style={{ backgroundImage: `url(${enemyImg})` }}>
      <div className="enemyCard-name">{name}</div>
      <div className="enemyCard-health"><span>{health}</span></div>
      <div className="enemyCard-damage"><span>1D{damage}</span></div>
      <div className="enemyCard-combat"><span>{combatSkill}</span></div>
      <div className="enemyCard-armor"><span>1D{armor}</span></div>
    </article>
  );
};

EnemyCard.propTypes = {
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
export default EnemyCard;
