import fetch from '@system.fetch'

export default {
  fetch (url) {
    if (!url.startsWith('http')) {
      url = 'https://locally.uieee.com' + url
    }

    return new Promise((resolve, reject) => {
      fetch.fetch({
        url: url,
        success: res => {
          try {
            resolve(JSON.parse(res.data))
          } catch (e) {
            resolve(res.data)
          }
        },
        fail: reject })
    })
  },

  getSlides () {
    return this.fetch('/slides')
  },

  getCategories () {
    return this.fetch('/categories')
  }
}
