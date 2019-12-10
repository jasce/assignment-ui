import React, { Component } from 'react'

class Tabs extends Component {

  tabClick = (clickedTab) => () => {
    const {onTabClick} = this.props;
    onTabClick(clickedTab);
  }

  renderTabs = () => {
    const {
      activeTab,
      tabOptions,
      t
    } = this.props

    return tabOptions.map(({label, value}, index) => (
      <p 
        className={`tabs-item ${activeTab === value ? 'active' : ''}`}
        key={index}
        onClick={this.tabClick(value)}
      >
        {t(label)}
      </p>
    ))
  }

  render() {
    return (
      <div className='tabs-container'>
        {this.renderTabs()}
      </div>  
    )
  }
}

export default Tabs