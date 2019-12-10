export const CAMPAIGNS = {
  UPCOMING: 'Upcoming',
  LIVE: 'Live',
  PAST: 'Past'
}

export const MODALS = {
  PRICING: 'pricing',
  CALENDAR: 'calendar'
}

export const tabOptions = [
  {label: 'Upcoming Campaigns', value: CAMPAIGNS.UPCOMING},
  {label: 'Live Campaigns', value: CAMPAIGNS.LIVE},
  {label: 'Past Campaigns', value: CAMPAIGNS.PAST}
]

export const headerOptions = [
  'Date',
  'Campaign',
  'View',
  'Actions'
]

export const dummyCampaignData = [{
    "id": "1",
    "name": "Auto Chess",
    "region": "US",
    "createdOn": 1577499318000,
    "price": "Price info of Auto Chess",
    "csv": "Some CSV link for Auto Chess",
    "report": "Some report link for Auto Chess",
    "image_url":"auto-chess.png"
  },  
  {
    "id": "2",
    "name": "PUBG Mobile",
    "region": "US",
    "createdOn": 1577673018000,
    "price": "Price info of PUBG Mobile",
    "csv": "Some CSV link for PUBG Mobile",
    "report": "Some report link for PUBG Mobile",
    "image_url":"pubg.png"
  },
  {
    "id": "3",
    "name": "Flow Free",
    "region": "US",
    "createdOn": 1577759418000,
    "price": "Price info of Flow Free",
    "csv": "Some CSV link for Flow Free",
    "report": "Some report link for Flow Free",
    "image_url":"flow-free.png"
  },
  {
    "id": "4",
    "name": "Garena Free Fire...",
    "region": "US",
    "createdOn": 1575945018000,
    "price": "Price info of Garena Free Fire",
    "csv": "Some CSV link for Garena Free Fire",
    "report": "Some report link for Garena Free Fire",
    "image_url":"garena-free-fire.png"
  },
  {
    "id": "5",
    "name": "MORTAL COMBAT",
    "region": "US",
    "createdOn": 1576031418000,
    "price": "Price info of MORTAL COMBAT",
    "csv": "Some CSV link for MORTAL COMBAT",
    "report": "Some report link for MORTAL COMBAT",
    "image_url":"mortal-combat.png"
  },
  {
    "id": "6",
    "name": "Summoners War",
    "region": "US",
    "createdOn": 1576117818000,
    "price": "Price info of Summoners War",
    "csv": "Some CSV link for Summoners War",
    "report": "Some report link for Summoners War",
    "image_url":"summoners-war.png"
  },
  {
    "id": "7",
    "name": "Need for Speed No Limits",
    "region": "US",
    "createdOn": 1576204218000,   
    "price": "Price info of Need for Speed No Limits",
    "csv": "Some CSV link for Need for Speed No Limits",
    "report": "Some report link for Need for Speed No Limits",
    "image_url":"nfs.png"
  },
  {
    "id": "8",
    "name": "Shadow Fight 3",
    "region": "US",
    "createdOn": 1574644518000,
    "price": "Price info of Shadow Fight 3",
    "csv": "Some CSV link for Shadow Fight 3",
    "report": "Some report link for Shadow Fight 3",
    "image_url":"shadow-fight3.png"
  }
] 

export const dummyPrices = [
  {label: '1 Week - 1 Month ', value: '$ 100.00'},
  {label: '6 Months ', value: '$ 500.00'},
  {label: '1 Year', value: '$900.00'}  
]


