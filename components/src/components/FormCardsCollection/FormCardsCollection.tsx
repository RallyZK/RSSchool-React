import './FormCardsCollection.css';
import React, { Component } from 'react';
import { allFormCards, IFormCard } from '../../utils/types';
import CardInForms from '../CardInForms';

class FormCardsCollection extends Component {
  state = {
    cards: allFormCards,
  };

  componentDidMount() {
    this.setState(allFormCards);
  }

  componentDidUpdate() {
    if (this.state.cards.length !== allFormCards.length) {
      this.setState(allFormCards);
    }
  }

  render() {
    console.log('this.props.allFormCards', allFormCards);
    return (
      <div>
        {this.state.cards.map((card: IFormCard) => (
          <>
            <h3>Card #1</h3>
            <CardInForms card={card} key={card.name} />
          </>
        ))}
      </div>
    );
  }
}

export default FormCardsCollection;
