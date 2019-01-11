/**
 * Import
 */

import React, { Component, Fragment } from "react";
import random from "random";

/**
 * Local import
 */

import "./page.sass";
import Text from "components/Text";
import Action from "components/Action";
import CharacterCard from "components/CharacterCard";

/**
 * Component
 */

const withPage = (PageComponent, chapterData) =>
  class Page extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentRollDice: undefined
      };
      this.setRollDice = this.setRollDice.bind(this);
      this.rollNewDice = this.rollNewDice.bind(this);
    }

    componentDidUpdate() {
      const { player, setPlayerDie } = this.props;
      if (player.health <= 0 && player.isDie === false) {
        setPlayerDie();
      }
    }

    setRollDice(number) {
      this.setState(state => ({
        ...state,
        currentRollDice: number
      }));
    }

    rollNewDice(dice) {
      const newRoll = random.int(1, dice);
      this.setRollDice(newRoll);
    }

    resetCurrentRollDice() {
      this.setState(state => ({
        ...state,
        currentRollDice: undefined
      }));
    }

    render() {
      const { player, consumeRation, resetGame } = this.props;
      return (
        <section className="page">
          <article className="page-chapter">
            <h1 className="page-chapter-title">{chapterData.name}</h1>
            <div
              className="page-chapter-picture"
              style={{
                backgroundImage: `url(./assets/backgrounds/${
                  chapterData.picture
                })`
              }}
            />
            <CharacterCard {...player} size="small" />
          </article>
          <article className="page-content">
            {player.health > 0 && player.energy > 0 ? (
              <PageComponent
                {...this.props}
                {...this.state}
                rollNewDice={this.rollNewDice}
                resetCurrentRollDice={() => this.resetCurrentRollDice()}
              />
            ) : (
              <Fragment>
                {player.health <= 0 && (
                  <Fragment>
                    <Text>
                      Vous succombez à vos blessures dans d&apos;horribles
                      souffrance...
                    </Text>
                    <Action actionFunction={resetGame} text="Recommencer" />
                  </Fragment>
                )}
                {player.energy <= 0 && (
                  <Fragment>
                    <Text>
                      Vous êtes épuiser et affamer, vous devez consommer une
                      ration.
                    </Text>
                    <Action
                      actionFunction={consumeRation}
                      text="Manger et se reposer."
                    />
                  </Fragment>
                )}
              </Fragment>
            )}
          </article>
        </section>
      );
    }
  };

/**
 * Export
 */
export default withPage;
