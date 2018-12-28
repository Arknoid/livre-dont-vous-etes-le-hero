/**
 * Import
 */
import React from 'react';
import PropType from 'prop-types';

/**
 * Local import
 */
import './playerStats.sass';

/**
 * Component
 */
const PlayerStats = ({ health, energy, ration }) => (
  <article>
    <div>
      Santé: {health}
    </div>
    <div>
      Energie: {energy}
    </div>
    <div>
      Rations: {ration}
    </div>
  </article>
);

PlayerStats.propTypes = {
  health: PropType.number.isRequired,
  energy: PropType.number.isRequired,
  ration: PropType.number.isRequired,
};
/*
 * Export
 */
export default PlayerStats;
