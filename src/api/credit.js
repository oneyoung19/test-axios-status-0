import axios from 'axios'

const headers = {
  Token: 'FEBMGBDZDUFFAHGECABBEVACBZEBCVEYGNACECHS',
  // eslint-disable-next-line
  'source': 'H5_VC',
  'request-source': 'perbank-app',
  'Accept-Language': 'zhs-CN'
}

export default {
  getHomepage () {
    return axios.post('/cbi-crediti2c-app/virtual/card/homepage', {
      channel: '1201'
    }, {
      headers: {
        ...headers
      }
    })
  },
  getTradeList () {
    return axios.post('/cbi-crediti2c-app/card/tradeList', {
      channel: '1201'
    }, {
      headers: {
        ...headers
      }
    })
  }
}
