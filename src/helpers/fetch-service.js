import { BASE_URL } from 'src/helpers/constants'
import { store } from 'src/redux/store'

class Interceptor {
  /**
   * API Response
   *
   * @param {Object} response - response from fetch
   */
  handleResponse(response) {
    if (response.statusMsg) {
      store.dispatch({ type: 'SHOW_NOTIFICATION', payload: response.statusMsg })
      setTimeout(() => {
        store.dispatch({ type: 'HIDE_NOTIFICATION' })
      }, 2000)
    }

    if (response.status === '401') {
      store.dispatch({ type: 'LOGOUT' })
      localStorage.clear()
    }
  }

  /**
   * Our own fetch that logs out user
   *
   * @param {String} input - the URL to fetch
   * @param {Object} init - the additional data for the fetch
   * @returns {Promise} a promise resolved with successful fetch and rejected with unsuccessful
   */
  fetch(input, init = {}) {
    const token = localStorage.getItem('token')
    let defaults = {
      credentials: 'same-origin',
      method: 'GET',
      'content-type': 'application/json'
    }

    if (token) {
      defaults = { ...defaults, 'X-Auth': token }
    }

    const url = `${BASE_URL}/${input}`

    return window
      .fetch(url, Object.assign(defaults, init))
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.handleResponse(res)
        return res
      })
      .catch(error => {
        throw error
      })
  }
}

export const __fetchService = new Interceptor()
