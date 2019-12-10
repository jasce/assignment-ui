  // import { __fetchService } from 'src/helpers/fetch-service'
import React, { Component, Fragment } from 'react'
import Tabs from 'src/components/tabs'
import Navbar from 'src/components/navbar'
import Table from 'src/components/table'
import Modal from 'src/components/modal'
import PricingContent from 'src/components/pricing-content'
import ScheduleCampaign from 'src/components/schedule-campaign'
import { withNamespaces } from 'react-i18next';
import Localisation from 'src/components/localisation'
import {
  CAMPAIGNS,
  tabOptions,
  headerOptions,
  dummyCampaignData,
  MODALS
} from 'src/helpers/constants'

import {getActiveCampaignData} from 'src/helpers/util'
import dayjs from 'dayjs'

class Dashboard extends Component {
  state = {
    activeCampaign: CAMPAIGNS.UPCOMING
  }

  componentDidMount() {
    const localCampaignData = this.getDataFromLocalStorage();
    if(!localCampaignData) {
      this.setDataInLocalStorage(dummyCampaignData);
      this.setState({activeCampaign: CAMPAIGNS.UPCOMING});
    }
  }

  handleTabClick = (clickedTab) => {
    const {activeCampaign} = this.state
    if(activeCampaign !== clickedTab) {
      this.setState({activeCampaign: clickedTab});
    }
  }

  showModal = (selectedModal) => (selectedIdx=null) => {
    const campaignData = this.getSelectedCampaignData();
    const rowData = campaignData[selectedIdx]
    this.setState({selectedModal, rowData})
  }

  closeModal = () => {
    this.setState({selectedModal: ''})
  }

  getDataFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem('campaignData'));
  }

  setDataInLocalStorage = (data) => {
    window.localStorage.setItem('campaignData', JSON.stringify(data))
  }

  handleDateSave = (updatedDate, data) => (evt) => {
    const {name} = data;
    const localData = this.getDataFromLocalStorage();
    const campaignToUpdateIdx = localData.findIndex(i => i.name === name);
    if(campaignToUpdateIdx > -1) {
      localData[campaignToUpdateIdx].createdOn =  dayjs(updatedDate).valueOf();
    }
    this.setDataInLocalStorage(localData);
    this.closeModal()
  }

  renderModalContent = () => {
    const {t} = this.props
    const {selectedModal, rowData} = this.state
    if(selectedModal === MODALS.PRICING) {
      return (
        <PricingContent 
          data={rowData}
          t={t}
        />
      )
    } else if(selectedModal === MODALS.CALENDAR) {
      return (
        <ScheduleCampaign
          data={rowData}
          t={t}
          onDateSave={this.handleDateSave}
        />
      )
    }
    return null
  }

  getSelectedCampaignData = () => {
    const {activeCampaign} = this.state
    const localData = this.getDataFromLocalStorage();
    if(localData !== null) {
      return getActiveCampaignData(localData, activeCampaign);
    }
  }

  render() {
    const {activeCampaign} = this.state;
    const {t} = this.props;
    const campaignData = this.getSelectedCampaignData();
    const modalContent = this.renderModalContent();
    return (
      <Fragment>
        <Navbar />
        <div className='page-container'>
          <Localisation />
          <h1 className='page-title'>{t('Manage Campaigns')}</h1>
          <Tabs
            tabOptions={tabOptions}
            t={t}
            activeTab={activeCampaign}
            onTabClick={this.handleTabClick}
          />
          <Table
            headerOptions={headerOptions}
            data={campaignData || []}
            t={t}
            onPricingClick={this.showModal(MODALS.PRICING)}
            onScheduleClick={this.showModal(MODALS.CALENDAR)}
          />
        </div>
        <Modal
          show={modalContent}
          t={t}
          onCloseModal={this.closeModal}
        >
          {modalContent}
        </Modal>
      </Fragment>
    )
  }
}

export default withNamespaces()(Dashboard)
