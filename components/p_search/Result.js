import { memo, useState, useCallback } from 'react'
import Link from 'next/link'
import CourseCard from '@/Common/CourseCard'
import LoadMore from '@/Common/LoadMore'
import s from './Result.module.css'
import { getSearchResult } from 'core/api'

const OFFSET = 10
const Result = ({ data = [], kw = '' }) => {
  const [result, setResult] = useState({
    list: data, // 列表数据
    pageStart: 1, // 页码
    hasMore: true, //  是否有下一页
  })

  // 请求数据
  const fetchResult = useCallback(async () => {
    try {
      const list = await getSearchResult(kw, result.pageStart)
      // 保存数据
      setResult({
        list: result.list.concat(list), // 在已有数据列表上补充本次数据
        pageStart: result.pageStart + 1, // 页码+1
        hasMore: list.length === OFFSET, // 判断是否足够10条，不足意味着没有更多了。
      })
    } catch (error) {
      console.log('fetchResult Error', error)
    }
  }, [result, kw])

  if (data && data.length) {
    return (
      <section className={s.container}>
        <div className={`${s.resultTitle} border-b-1px`}>相关课程</div>
        {result.list.map((item) => (
          <CourseCard data={item} key={item.id} />
        ))}
        <LoadMore
          hasMore={result.hasMore}
          onReachBottom={fetchResult}
          customNoMoreText="我是有底线的"
        />
      </section>
    )
  }
  return (
    <section>
      <img className={s.img} src="/img/errorImage.png" alt="error" />
      <div className={s.title}>Sorry！暂时没发现您想查找的课程</div>
      <Link href="/">
        <a className={`${s.back} border-all-1px`}>返回首页</a>
      </Link>
    </section>
  )
}
export default memo(Result)
