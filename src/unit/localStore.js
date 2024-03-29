/**
 * 存储数据
 * @param {Object} data
 */
export const storeChromeData = (data) => {
  chrome.storage.local.set(data)
}

/**
 * 获取数据
 * @param {string} key
 * @return {Promise}
 */
export const getChromeData = (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(key, (value) => {
      resolve(value[key] || null)
    })
  })
}

/**
 * 清空本地存储
 */
export const clearChromeData = () => {
  chrome.storage.local.clear(() => {
    console.log('Clear all localStore.')
  })
}

/**
 * 获取所有本地存储
 * @return {Promise}
 */
export const getAllChromeData = () => {
  return getChromeData(null)
}

/**
 * 判断是否是空数据
 * @param {Object} obj
 * @return {Boolean}
 */
export const isEmptyData = (obj) => {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    for (let key in obj) {
      return false
    }
    return true
  }
  return false
}
