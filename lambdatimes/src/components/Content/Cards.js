import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map((hi, yes) => (
      <Card key = {yes} cards = {hi} />

    ))}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array
};

export default Cards;