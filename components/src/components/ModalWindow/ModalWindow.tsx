import './ModalWindow.css';
import React, { Component } from 'react';

type ModalWindowProps = {
  isModalOpen: boolean;
};

class ModalWindow extends Component<ModalWindowProps> {
  state = {
    visibility: this.props.isModalOpen ? '' : 'display-none',
  };
  timer: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ visibility: 'display-none' });
    }, 2000);
  }

  componentDidUpdate() {
    this.timer = setTimeout(() => {
      this.setState({ visibility: 'display-none' });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.setState({ visibility: '' });
  }

  render() {
    return (
      <div className={`modal-wrapper ${this.state.visibility}`}>
        <div className='modal-img'></div>
        <h2 className='modal-title'>You information is successfully saved!</h2>
      </div>
    );
  }
}

export default ModalWindow;
