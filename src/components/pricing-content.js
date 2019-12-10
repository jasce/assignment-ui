import React, { Component, Fragment } from 'react'
import {dummyPrices} from 'src/helpers/constants'

class PricingContent extends Component {

  renderPrices = () => {
    return dummyPrices.map(({label, value}) => (
      <div className='flex jc-space-between'>
        <p className='pricing-label'>{label}</p>
        <p className='pricing-value'>{value}</p>
      </div>
    ))
  }

  render() {
    const {
      image_url,
      name,
      region
    } = this.props.data
    const pricesJsx = this.renderPrices()
    return (
      <Fragment>
        <div className='flex ai-flex-end'>
          <img src={require(`../assets/images/${image_url}`).default} className='pricing-img' />
          <div className='m-h-10'>
            <p className='campaign-name'>{name}</p>
            <p className='table-sub-text m-0'>{region}</p>
          </div>
        </div>
        <h1 className='pricing-title'>Pricing</h1>
        <div className='pricing-wrapper'>
          {pricesJsx}
        </div>
      </Fragment>
    )
  }
} 

export default PricingContent
