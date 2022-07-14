import { useEffect, useState, useCallback } from 'react'

import SectionHeader from './SectionHeader'
import CourseCard from '@/Common/CourseCard'
import LoadMore from '@/Common/LoadMore'
import { getRecommend } from 'core/api'
import s from './Recommend.module.css'

const OFFSET = 10

export default function Recommend() {
  const [recommend, setRecommend] = useState({
    list: [], // 推荐课列表数据
    pageStart: 0, // 页码
    hasMore: true, //  是否有下一页
  })

  // 请求推荐课数据
  const fetchRecommend = useCallback(async () => {
    try {
      const list = await getRecommend({
        start: recommend.pageStart,
        offset: OFFSET,
      })
      // 保存数据
      setRecommend({
        list: recommend.list.concat(list), // 在已有数据列表上补充本次数据
        pageStart: recommend.pageStart + 1, // 页码+1
        hasMore: list.length === OFFSET, // 判断是否足够10条，不足意味着没有更多了。
      })
    } catch (error) {
      console.log('fetchRecommend Error', error)
    }
  }, [recommend])

  useEffect(() => {
    fetchRecommend()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section>
      <SectionHeader title="课程精选" subTitle="Course selection" />
      <div className={s.list}>
        {recommend.list.map((item) => (
          <CourseCard key={item.id} data={item} />
        ))}
      </div>
      <LoadMore hasMore={recommend.hasMore} onReachBottom={fetchRecommend} />
    </section>
  )
}
