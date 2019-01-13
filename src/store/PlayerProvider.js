import React, { createContext, Component } from "react";
import PropTypes from "prop-types";
import playerData from "data/player";

export const PlayerContext = createContext({
  player: {},
  setInCombat: () => {},
  setPlayerDie: () => {},
  addPlayerEnergy: () => {},
  addPlayerHealth: () => {},
  addPlayerRation: () => {},
  consumeRation: () => {},
  resetPlayer: () => {},
});

const initializePlayer = {
  isDie: false,
  inCombat: false,
  name: playerData.name,
  picture: playerData.picture,
  health: playerData.health,
  energy: playerData.energy,
  ration: playerData.ration,
  damage: playerData.damage, // rollDice
  armor: playerData.armor, // rollDice
  combatSkill: playerData.combatSkill
};

class PlayerProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  state = {
    player: {
      ...initializePlayer,
    },
    setInCombat: bool => this.setState(state => ({
      player: {
        ...state.player,
        inCombat: bool
      }
    })),
    setPlayerDie: () => this.setState(state => ({
      player: {
        ...state.player,
        picture: "skull.jpg",
        isDie: true
      }
    })),
    addPlayerEnergy: number => this.setState(state => ({
        player: {
          ...state.player,
          energy: state.player.energy + number
        }
      })),
    addPlayerHealth: number => this.setState(state => ({
          player: {
            ...state.player,
            health: state.player.health + number
          }
        })),
    addPlayerRation: number => this.setState(state => ({
      player: {
        ...state.player,
        ration: state.player.ration + number
      }
    })),
    consumeRation: () => this.setState(state => ({
      player: {
        ...state.player,
        energy: 100
      }
    })),
    resetPlayer: () => this.setState(() => ({
      player: {
        ...initializePlayer
      },
    })),
  };

  render() {
    return (
      <PlayerContext.Provider value={this.state}>
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}

export const withPlayer = Component => props => (
  <PlayerContext.Consumer>
    {store => <Component {...props} {...store} />}
  </PlayerContext.Consumer>
);

export default PlayerProvider;
