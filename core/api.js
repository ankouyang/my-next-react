import request from './request'

const baseUrl = 'http://146.56.216.208/api'
// 搜索结果
export const getSearchResult = (kw = '', start = 0) =>
  request.get(`${baseUrl}/result`, {
    params: {
      kw,
      start,
    },
  })

// 搜索建议
export const getSearchSuggest = (kw = '') =>
  request.get(`${baseUrl}/suggest`, {
    params: {
      kw,
    },
  })

// 热门词汇
export const getHotWord = () => request.get(`${baseUrl}/hotword`)

// 首页
export const getHome = () => request.get(`${baseUrl}/next/home`)

// 首页推荐
export const getRecommend = (params) => request.get(`${baseUrl}/recommend`, { params })
