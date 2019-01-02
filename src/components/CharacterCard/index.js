/**
 * Import
 */

import React from 'react';
import PropType from 'prop-types';

/**
 * Local import
 */

import './characterCard.sass';

/**
 * Component
 */

const CharacterCard = (
  {
    picture,
    name,
    health,
    damage,
    armor,
    combatSkill,
    energy,
    size,
  },
) => {
  const style = `characterCard characterCard--size-${size}`;
  return (
    <article className={style} style={{ backgroundImage: `url(./assets/cards/${picture})` }}>
      <div className="characterCard-name">{name}</div>
      <div className="characterCard-health"><span>{health}</span></div>
      <div className="characterCard-damage"><span>1D{damage}</span></div>
      <div className="characterCard-combat"><span>{combatSkill}</span></div>
      {armor !== undefined && (
        <div className="characterCard-armor"><span>1D{armor}</span></div>
      )}
      {energy !== undefined && (
        <div className="characterCard-energy"><span>{energy}</span></div>
      )}
    </article>
  );
};

CharacterCard.propTypes = {
  picture: PropType.string.isRequired,
  name: PropType.string.isRequired,
  health: PropType.number.isRequired,
  damage: PropType.number.isRequired,
  armor: PropType.number,
  size: PropType.oneOf(['small', 'normal', 'big']),
  energy: PropType.number,
  combatSkill: PropType.number.isRequired,
};

CharacterCard.defaultProps = {
  size: 'normal',
  energy: undefined,
  armor: undefined,
};

/*
 * Export
 */
export default CharacterCard;
