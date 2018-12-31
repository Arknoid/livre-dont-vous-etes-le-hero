/**
 * Import
 */
import React from 'react';
import PropType from 'prop-types';

/**
 * Local import
 */
import './playerStats.sass';
import PlayerCard from 'components/PlayerCard';
/**
 * Component
 */
const PlayerStats = ({ ...props }) => (
  <article>
    <PlayerCard
      name="Arknoid"
      picture="face.jpg"
      {...props}
    />
  </article>
);

PlayerStats.propTypes = {
  health: PropType.number.isRequired,
  energy: PropType.number.isRequired,
  ration: PropType.number.isRequired,
  combatSkill: PropType.number.isRequired,
  armor: PropType.number.isRequired,
};
/*
 * Export
 */
export default PlayerStats;
