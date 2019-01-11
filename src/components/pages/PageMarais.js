/**
 * Import
 */

/**
 * Local import
 */
import React, { Fragment } from "react";
import Text from "components/Text";
import Action from "components/Action";
import { maraisMauditData } from "data/chapter";
import withPage from "./withPage";

/**
 * Component
 */

const PageMarais = withPage(
  ({ setCurrentPage, addPlayerEnergy }) => (
    <Fragment>
      <Text>
        C&apos;est au détour d&apos;un marais fumant que vous apercevez une
        étrange silhouette géante suivi d&apos;un terrible grognement.
      </Text>
      <Action
        linkTo="maraisFuite"
        linkFunction={setCurrentPage}
        actionFunction={addPlayerEnergy}
        actionParam={-10}
        text="Vous partez en courant sans vous retournez ! (-10 en énergie)"
      />
      <Action
        linkTo="maraisCombat"
        linkFunction={setCurrentPage}
        text="Vous vous sentez assez vaillant pour lui faire la peau !"
      />
    </Fragment>
  ),
  maraisMauditData
);

/**
 * Export
 */

export default PageMarais;
