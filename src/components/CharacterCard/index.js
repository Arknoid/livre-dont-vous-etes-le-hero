/**
 * Import
 */

import React from "react";
import PropType from "prop-types";
import styled from "styled-components";

/**
 * Component
 */

const CharacterCard = ({
  picture,
  name,
  health,
  damage,
  armor,
  combatSkill,
  energy,
  size
}) => {
  const CardWrapper = styled.article`
    @import url('https://fonts.googleapis.com/css?family=Charm:400,700');
    width: ${props => {
      if (props.size === 'small') return "10rem";
      else if (props.size === 'normal') return "15rem";
      else if (props.size === 'big') return "20rem";
    }};
    height: ${props => {
      if (props.size === 'small') return "10rem";
      else if (props.size === 'normal') return "15rem";
      else if (props.size === 'big') return "20rem";
    }};
    font-family: "Charm", cursive;
    position: relative;
    border: 8px solid black;
    box-shadow: 0 0 15px black;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    margin: 0 auto;
    font-weight: bold;
    color: white;
    background-image: url("/assets/cards/${props => props.background}");
    &:hover {
      cursor: pointer;
    }
  `;

  const Name = styled.div`
    position: absolute;
    display: flex;
    text-transform: capitalize;
    border-radius: 10px;
    padding: 0.2rem 0.5rem;
    font-size: 1.4rem;
    top: -16px;
    left: -8px;
    background-color: black;
    box-shadow: 0 0 10px black;
  `;

  const Health = styled.div`
    position: absolute;
    display: flex;
    width: 3rem;
    height: 3rem;
    font-size: 1.8rem;
    background: url("/assets/interface/health.png");
    background-size: 100% 100%;
    border-radius: 50px;
    bottom: -1.6rem;
    right: -1.8rem;
    span {
      padding-top: 0.5rem;
      margin: auto;
    }
  `;

  const Damage = styled.div`
    position: absolute;
    display: flex;
    text-align: center;
    height: 5rem;
    width: 5rem;
    font-size: 1.4rem;
    background: url("/assets/interface/attack.png");
    background-size: 100% 100%;
    bottom: -2.5rem;
    left: -2.5rem;
    span {
      padding-top: 0.4rem;
      margin: auto;
    }
  `;

  const Combat = styled.div`
    position: absolute;
    display: flex;
    text-align: center;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.4rem;
    background: url("/assets/interface/combat.png");
    background-size: 100% 100%;
    bottom: 2rem;
    left: -1.5rem;
    span {
      padding-top: 0.4rem;
      margin: auto;
    }
  `;

  const Armor = styled.div`
    position: absolute;
    display: flex;
    right: -1.5rem;
    bottom: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
    background: url("/assets/interface/defence.png");
    background-size: 100% 100%;
    span {
      padding-bottom: 0.5rem;
      margin: auto;
    }
  `;
  const Energy = styled.div`
    position: absolute;
    display: flex;
    right: -1.5rem;
    top: -1.4rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.6rem;
    background: url("/assets/interface/energy.png");
    background-size: 100% 100%;
    span {
      margin: auto;
    }
  `;

  return (
    <CardWrapper
      size={size}
      background={picture}
    >
      <Name>{name}</Name>
      <Health>
        <span>{health}</span>
      </Health>
      <Damage>
        <span>1D{damage}</span>
      </Damage>
      <Combat>
        <span>{combatSkill}</span>
      </Combat>
      {armor !== undefined && (
        <Armor>
          <span>1D{armor}</span>
        </Armor>
      )}
      {energy !== undefined && (
        <Energy>
          <span>{energy}</span>
        </Energy>
      )}
    </CardWrapper>
  );
};

CharacterCard.propTypes = {
  picture: PropType.string.isRequired,
  name: PropType.string.isRequired,
  health: PropType.number.isRequired,
  damage: PropType.number.isRequired,
  armor: PropType.number,
  size: PropType.oneOf(["small", "normal", "big"]),
  energy: PropType.number,
  combatSkill: PropType.number.isRequired
};

CharacterCard.defaultProps = {
  size: "normal",
  energy: undefined,
  armor: undefined
};

/*
 * Export
 */
export default CharacterCard;
