import React from "react";

import { storiesOf } from "@storybook/react";

import Book from "components/Book";
import Text from "components/Text";
import Action from "components/Action";
import CharacterCard from "components/CharacterCard";

storiesOf("Hero book", module)
  .add("Book", () => <Book />)
  .add("Action", () => <Action text={"Testing"} />)
  .add("Text", () => <Text> Testing text </Text>)
  .add("CharacterCard", () => (
    <CharacterCard
      picture="ogre2.jpg"
      name={"Ogre"}
      armor={6}
      combatSkill={6}
      damage={6}
      energy={25}
      health={50}
      size={"big"}
    />
  ));
