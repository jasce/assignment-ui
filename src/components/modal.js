import React, { Component } from 'react'

class Modal extends Component {
  render() {
    const {show, onCloseModal, t} = this.props;
    return (
      <div className={`modal ${show ? '' : 'modal-none'}`}>
        <div className='modal-overlay' onClick={onCloseModal}></div>
        <div className='modal-body'>
          {this.props.children}
          <div className='modal-footer'>
            <button class='modal-btn-close' onClick={onCloseModal}>{t('Close')}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
