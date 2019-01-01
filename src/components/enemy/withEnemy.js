/**
 * Import
 */
import React, { Component, Fragment } from 'react';
import random from 'random';
import uuidv4 from 'uuid/v4';

/**
 * Local import
 */

import Text from 'components/Text';
import Action from 'components/Action';

/**
 * Component
 */
const withEnemy = (CombatComponent, enemy) => (
  class Combat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fightText: ' ',
        health: enemy.health,
        damage: enemy.damage,
        armor: enemy.armor,
        combatSkill: enemy.combatSkill,
        isDie: false,
      };
    }

    componentDidMount() {
      const { setInCombat } = this.props;

      setInCombat(true);
    }

    componentDidUpdate() {
      const { health } = this.state;
      const { setInCombat, player } = this.props;

      // Test if enemy is dead
      if (health <= 0 && player.inCombat === true) {
        this.setFightText(`Vous avez tuer ${enemy.name}`);
        // stop the fight for pop new link in the Page Components
        setInCombat(false);
        this.setEnemyDie();
      }
    }

    setEnemyDie() {
      this.setState({
        isDie: true,
      });
    }

    setFightText(message) {
      this.setState({
        fightText: message,
      });
    }

    fight() {
      const { player, addPlayerHealth } = this.props;
      const { combatSkill, damage, armor } = this.state;

      // 2d6 roll for player and enemy
      const diceRollPlayer = random.int(1, 6) + random.int(1, 6);
      const diceRollEnemy = random.int(1, 6) + random.int(1, 6);

      // adding dice rolls with combatSkill for each one to compare
      // Enemy win :
      if (diceRollEnemy + combatSkill > diceRollPlayer + player.combatSkill) {
        // calcul of the damage by diceRoll damage - diceRoll player armor
        let damageToEnemy = random.int(1, damage) - random.int(1, player.armor);
        damageToEnemy = (damageToEnemy < 0) ? 0 : damageToEnemy;
        // add damage to enemy by state
        this.setState(state => ({
          health: state.health - damageToEnemy,
        }));
        this.setFightText(`Vous touchez ${enemy.name} et lui infliger 
        ${(damageToEnemy === 0) ? 'aucun' : damageToEnemy} point(s) de dégâts`);
      }
      // Player win :
      else if (diceRollEnemy + combatSkill < diceRollPlayer + player.combatSkill) {
        // calcul of the damage by diceRoll damage - diceRoll enemy armor
        let damageToPlayer = random.int(1, player.damage) - random.int(0, armor);
        damageToPlayer = (damageToPlayer < 0) ? 0 : damageToPlayer;
        // add damage to player by a prop func
        addPlayerHealth(-damageToPlayer);
        this.setFightText(`${enemy.name} vous touche et inflige 
        ${(damageToPlayer === 0) ? 'aucun' : damageToPlayer} points de dégâts`);
      }
      // Same result:
      else {
        // No damage for each
        this.setFightText(`Vous et ${enemy.name} loupez vous attaques`);
      }
    }

    render() {
      const { player } = this.props;
      const { fightText, isDie } = this.state;
      return (
        <Fragment>
          <CombatComponent
            {...this.state}
            name={enemy.name}
          />
          <Text key={uuidv4()}>
            {fightText}
          </Text>
          {(player.inCombat === true && isDie === false) && (
            <Action
              actionFunction={() => this.fight()}
              text="Attaquer"
            />
          )}
        </Fragment>
      );
    }
  }
);


/**
 * Export
 */
export default withEnemy;
