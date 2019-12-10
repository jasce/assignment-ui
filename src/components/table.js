import React, { Component } from 'react'
import dayjs from 'dayjs'
import {getFormattedDateText} from 'src/helpers/util'

class Table extends Component {

  renderHeader = () => {
    const {headerOptions = [], t} = this.props
    return headerOptions.map((label, index) => (
      <p className='table-header-item' key={index}>
        {t(label)}
      </p>
    ))
  }

  renderDateCell = (createdOn) => {
    return (
      <div className='table-date-cell'>
        <p class='m-v-5'>{dayjs(createdOn).format('MMM YYYY, DD')}</p>
        <p class='m-v-5 table-sub-text'>{getFormattedDateText(createdOn)}</p>
      </div>
    )
  }

  handlePricingClick = (selectedIdx) => (evt) => {
    const {onPricingClick} = this.props 
    onPricingClick(selectedIdx)
  }

  handleScheduleClick = (selectedIdx) => (evt) =>{
    const {onScheduleClick} = this.props
    onScheduleClick(selectedIdx)
  }
  
  renderCampaignCell = ({image_url, name, region}) => {
    return (
      <div className='table-name-cell'>
        <div class='flex'>
          <img src={require(`../assets/images/${image_url}`).default} />
          <div className='m-h-5'>
            <p className='m-v-5'>{name}</p>
            <p className='m-v-5 table-sub-text'>{region}</p>
          </div>
        </div>
      </div>
    )
  }

  renderViewCell = (index) => {
    const {t} = this.props
    return (
      <div className='flex cur-ptr'  onClick={this.handlePricingClick(index)}>
        <img src={require('../assets/images/pricing.png').default} className='action-img'/>
        <p className='pricing-text' >{t('View Pricing')}</p>
      </div>
    )
  }

  renderActionsCell = (index) => {
    const {t} = this.props;
    return (
      <div className='flex jc-space-between'>
        <div className='action-item'>
          <img src={require('../assets/images/csv.png').default} className='action-img'/>
          <p className='pricing-text' >CSV</p>
        </div>
        <div className='action-item'>
          <img src={require('../assets/images/report.png').default} className='action-img'/>
          <p className='pricing-text' >{t('Report')}</p>
        </div>
        <div className='action-item' onClick={this.handleScheduleClick(index)}> 
          <img src={require('../assets/images/calendar.png').default} className='action-img'/>
          <p className='pricing-text' >{t('Schedule Again')}</p>
        </div>
      </div>
    )
  }

  renderRows = () => {
    const {data = [], t} = this.props
    if(!data.length) {
      return (
        <div className='flex jc-center'>
          <p className='no-campaign'>{t('No Campaign!!')}</p>
        </div>
      )
    }
    return data.map(({createdOn, name, region, image_url}, index) => (
      <div className='table-row-wrapper'>
        {this.renderDateCell(createdOn)}
        {this.renderCampaignCell({image_url, name, region})}
        {this.renderViewCell(index)}
        {this.renderActionsCell(index)}
      </div>
    ))
  }

  render() {
    return (
      <div className='table-container'>
        <div className='table-header-wrapper'>
          {this.renderHeader()}
        </div>
        <div className='table-data-wrapper'>
          {this.renderRows()}
        </div>
      </div>  
    )
  }
}

export default Table
