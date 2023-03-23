import './CardInForms.css';
import React, { Component } from 'react';
import { IFormCard } from '../../utils/types';

type Props = {
  card: IFormCard;
};

class FormCard extends Component<Props> {
  render() {
    return (
      <div className='form-card'>
        <img className='form-card-img' src={this.props.card.file} alt={this.props.card.name}></img>
        <div className='form-card-content'>
          <h4>{this.props.card.name}</h4>
          <p className='form-card-desc'>
            <span className='span'>Visit date:</span> {this.props.card.date}
          </p>
          <p className='form-card-desc'>
            <span className='span'>Purpose of the visit:</span> {this.props.card.purpose}
          </p>
          <p className='form-card-desc'>
            <span className='span'>Transfer is needed:</span> {this.props.card.transfer}
          </p>
          <p className='form-card-desc'>
            <span className='span'>Interested in:</span> {this.props.card.realEstate.join(' ')}
          </p>
        </div>
      </div>
    );
  }
}

export default FormCard;
