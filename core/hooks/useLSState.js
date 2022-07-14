import { useState, useEffect } from 'react'
import ls from 'store2'
/**
 * localStorage 同步State
 * @param {*} key 存储的键
 * @param {*} defaultVal 默认值
 */
const useLSState = (key, defaultVal = '') => {
  const [data, setData] = useState(defaultVal)
  const setter = (newData) => {
    setData(newData)
    ls.set(key, newData)
  }

  // 只有在客户端才有localstorage
  useEffect(() => {
    // ls 没有数据则使用 defaultVal初始化
    if (ls(key) === null) {
      ls.set(key, defaultVal)
      setData(defaultVal)
    } else {
      // ls 有数据则使用ls数据更新state
      setData(ls(key))
    }
  }, [])

  // 返回数据和setter
  return [data, setter]
}

export default useLSState
