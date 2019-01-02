/**
 * Import
 */

import React, { Fragment } from 'react';

/**
 * Local import
 */

import Text from 'components/Text';
import Action from 'components/Action';
import { maraisMauditData } from 'data/chapter';
import withPage from './withPage';

/**
 * Component
 */

const PageMaraisFuite = withPage((
  {
    player,
    setCurrentPage,
    addPlayerEnergy,
    rollNewDice,
    currentRollDice,
  },
) => (
  <Fragment>
    <Text>
      Vous courrez comme un dégénérer dans le marécage boueux sans regarder ou vous mettez
      les pieds...
    </Text>
    {currentRollDice === undefined && (
      <Action
        actionFunction={rollNewDice}
        actionParam={6}
        text=" Tester votre chance : score de 3 et plus sur 1d6"
      />
    )}
    {currentRollDice <= 3 && (
      <Fragment>
        <Text>
          Vous obtenez {currentRollDice} au jet de dés
        </Text>
        <Text>
          Vous vous entravez à une racine et vous roulez brutalement dans la boue.
          En vous relevant doucement vous découvrez un horrible visage baveux s'approchant de
          vous pour vous dévorer.
        </Text>
        <Action
          linkTo="maraisCombat"
          linkFunction={setCurrentPage}
          text="Affronter le monstre."
        />
      </Fragment>
    )}
    {currentRollDice > 3 && (
      <Fragment>
        <Text>
          Vous obtenez {currentRollDice} au jet de dés
        </Text>
        <Text>
          Vous fuyez de toutes vos forces.
        </Text>
        {player.energy >= 10 && (
          <Action
            linkTo="maraisFuite"
            linkFunction={setCurrentPage}
            actionFunction={addPlayerEnergy}
            actionParam={-10}
            text="Continuer de courir sans relâche (-10 en énergie)"
          />
        )}
        <Action
          linkTo="maraisCombat"
          linkFunction={setCurrentPage}
          text="Se retourner et combattre ce monstre affamé."
        />
      </Fragment>
    )}
  </Fragment>
), maraisMauditData);

/**
 * Export
 */

export default PageMaraisFuite;
