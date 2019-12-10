import React, { Component, Fragment } from 'react'
import dayjs from 'dayjs'

class ScheduleCampaign extends Component {

  state = {
    campainDate: dayjs()
  }

  componentDidMount () {
    const {createdOn} = this.props.data
    this.setState({campainDate: dayjs(createdOn).format('YYYY-MM-DD')})
  }

  handleDateChange = (e) => {
    this.setState({campainDate: e.target.value})
  }

  render() {
    const {data, onDateSave, t} = this.props
    const {name} = data
    const {campainDate} = this.state
    return (
      <Fragment>  
        <h1 className='pricing-title'>{t('Schedule Campaign for')} {name}</h1>  
        <p className='note'>{t('Please click save button in order to schedule the campaign!')}</p>
        <div className='schedule-wrapper'>
          <input 
            type='date'
            value={campainDate}
            onChange={this.handleDateChange}
          />
          <button className='save-button' onClick={onDateSave(campainDate, data)}>{t('Save')}</button>
        </div>
      </Fragment>
    )
  }
}

export default ScheduleCampaign
