import {CAMPAIGNS} from './constants'
import dayjs from 'dayjs'

/**
   * Handlers for checking the date for each type of Campaign
   * @param {DateObject} input for every campaign method- date object to check
   * 
   * @returns {Boolean} if date lies in the range
*/

const campaignHandlers = {
  [CAMPAIGNS.UPCOMING]: (date) => dayjs().isBefore(dayjs(date), 'day'),
  [CAMPAIGNS.LIVE]: (date) => dayjs().isSame(dayjs(date), 'day'),
  [CAMPAIGNS.PAST]: (date) => dayjs().isAfter(dayjs(date), 'day'),
}

export const getActiveCampaignData = (data=[], selectedCampaign) => {
  return data.filter(({createdOn}) => {
    return campaignHandlers[selectedCampaign](createdOn);
  })
}

/**
   * Function for outputting the date in text format
   * @param {DateObject} input for every campaign method- date object to check
   * 
   * @returns {String} eg: 3 days ago
*/
export const getFormattedDateText = (date) => {
  const dateToCheck = dayjs(date);
  const currentDate = dayjs();
  const diff = Math.abs(currentDate.diff(dateToCheck, 'day'));
  if(currentDate.isSame(dateToCheck, 'day')) {
    return `Live`
  } else if(currentDate.isBefore(dateToCheck, 'day')) {
    return `${diff} days ahead`
  } else if(currentDate.isAfter(dateToCheck, 'day')) {
    return `${diff} days ago`
  }
}
