/**
 * Import
 */

import React, { Component, Fragment } from "react";
import random from "random";
import PropType from "prop-types";
import styled from "styled-components";
/**
 * Local import
 */

import Text from "components/Text";
import Action from "components/Action";
import CharacterCard from "components/CharacterCard";

/**
 * Styles
 */

const PageWrapper = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Chapter = styled.article`
  @import url('https://fonts.googleapis.com/css?family=UnifrakturCook:700|UnifrakturMaguntia');
  font-family: "UnifrakturMaguntia", cursive;
  width: 50%;
  box-shadow: 0 0 15px burlywood;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 5rem;
  font-size: 3rem;
  text-shadow: 0 0 25px peru;
  &:first-letter {
    font-family: "UnifrakturCook", cursive;
    font-size: 4rem;
  }
`;

const Picture = styled.div`
  margin: 0 5rem;
  height: 50%;
  box-shadow: 0 0 65px peru;
  border: 4px solid black;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  background-image: url("/assets/backgrounds/${props => props.background}");
`;

const Content = styled.article`
  padding: 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px burlywood;
`;

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

    static propTypes = {
      player: PropType.object.isRequired,
      setPlayerDie: PropType.func.isRequired,
      consumeRation: PropType.func.isRequired,
      resetGame: PropType.func.isRequired
    };

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
        <PageWrapper>
          <Chapter>
            <Title>{chapterData.name}</Title>
            <Picture
              background={chapterData.picture}
            />
            <CharacterCard {...player} size="small" />
          </Chapter>
          <Content>
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
          </Content>
        </PageWrapper>
      );
    }
  };

/**
 * Export
 */
export default withPage;
