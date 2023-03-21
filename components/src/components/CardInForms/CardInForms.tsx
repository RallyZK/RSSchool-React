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
          <p className='form-card-desc'>Visit date: {new Date(this.props.card.date).toISOString().slice(0, 10)}</p>
          <p className='form-card-desc'>Purpose of the visit: {this.props.card.purpose}</p>
          <p className='form-card-desc'>
            Type of realEstate:{' '}
            {this.props.card.realEstate.map((el) => {
              return el.checked ? <span key={el.name}>el.name</span> : '';
            })}
          </p>
          <p className='form-card-desc'>Transfer is needed: {this.props.card.transfer}</p>
        </div>
      </div>
    );
  }
}

export default FormCard;
