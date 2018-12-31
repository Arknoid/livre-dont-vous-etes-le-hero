/**
 * Import
 */

import React from 'react';
import PropType from 'prop-types';
/**
 * Local import
 */
import './playerCard.sass';

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
    energy,
  },
) => {
  const playerImg = `./assets/player/${picture}`;
  return (
    <article className="playerCard" style={{ backgroundImage: `url(${playerImg})` }}>
      <div className="playerCard-name">{name}</div>
      <div className="playerCard-health"><span>{health}</span></div>
      <div className="playerCard-damage"><span>1D{damage}</span></div>
      <div className="playerCard-combat"><span>{combatSkill}</span></div>
      <div className="playerCard-armor"><span>1D{armor}</span></div>
      <div className="playerCard-energy"><span>{energy}</span></div>
    </article>
  );
};

EnemyCard.propTypes = {
  picture: PropType.string.isRequired,
  name: PropType.string.isRequired,
  health: PropType.number.isRequired,
  damage: PropType.number.isRequired,
  armor: PropType.number.isRequired,
  energy: PropType.number.isRequired,
  combatSkill: PropType.number.isRequired,
};

/*
 * Export
 */
export default EnemyCard;
