import React, { Component } from 'react'
import i18n from 'src/i18n';
import { withNamespaces } from 'react-i18next';

class Localisation extends Component {

  changeLanguage = (locale) => () => {
    i18n.changeLanguage(locale);
  }

  render() {
    const {lng} = this.props
    return (
      <div className='localisation-container'>
        Translate: 
        <button className={`${lng === 'en' ? 'active' : ''}`} onClick={this.changeLanguage('en')}>English</button> 
        <button className={`${lng === 'de' ? 'active' : ''}`} onClick={this.changeLanguage('de')}>German</button>     
      </div>
    )
  }
}

export default withNamespaces()(Localisation)
