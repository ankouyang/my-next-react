import { memo, useState } from 'react'
import Link from 'next/link'
import s from './CourseCard.module.css'
import icTeacher from 'public/img/teacher1.png'
import CountDown from './CountDown'

/*
 * 0 没有促销，1 有促销
 *
 * 0 没有促销显示：原价，数量
 * 1 促销显示：
 *     1.促销期间：原价，数量，促价价格，倒计时
 *     2.促销结束/未开始： 原价，数量，
 */
const CourseCard = ({ data = {} }) => {
  const {
    courseTitle = '',
    id = '',
    categoryName = '',
    courseTime = '',
    lessonNum = '',
    teacherList = [],
    saleType,
    saleEndTime,
    price = '',
    salePrice = '',
    courseSaleNum = 0,
  } = data
  const [countDownFinished, setCountDownFinished] = useState(false) // 倒计时结束

  const renderSimplePrice = (p) => (
    <span className={s.price}>
      <span className={s.ico}>¥</span>
      {p}
    </span>
  )

  const renderPomotion = () => {
    // 促销ing
    if (saleType === 1 && !countDownFinished) {
      return (
        <div className={s.promoCont}>
          {/* 价格 */}
          <div>
            {/* 划线原价 */}
            <span className={s.deleted}>
              <span className={s.ico}>¥</span>
              {price}
            </span>
            {/* 促销价 */}
            {renderSimplePrice(salePrice)}
          </div>
          {/* 倒计时 */}
          <div className={s.desc}>
            剩<CountDown end={saleEndTime} onEnd={() => setCountDownFinished(true)} />
            &nbsp;恢复原价
          </div>
        </div>
      )
    }
    // 普通卡片
    return (
      <div className={s.promoCont}>
        {/* 价格 */}
        <div>{price === 0 ? <span className={s.price}>免费</span> : renderSimplePrice(price)}</div>
        {/* 购买数量 */}
        <div className={s.desc}>已有{courseSaleNum}人购买</div>
      </div>
    )
  }

  return (
    <Link href="/course/detail/[id]" as={`/course/detail/${id}`}>
      {/* 物理1px边框 */}
      <a className={`${s.card} border-b-1px`}>
        {/* 标题 */}
        <h5>
          <span className={s.categoryTag}>{categoryName}</span>
          <span className={s.title}>{courseTitle}</span>
        </h5>
        {/* 开课时间 */}
        <div className={s.time}>
          <span>开课时间:&nbsp;&nbsp;{courseTime || '随到随学'}</span>
          <span className={s.lessonNum}>{lessonNum}课时</span>
        </div>
        {/* 课程信息 */}
        <div className={s.footer}>
          {/* 教师 */}
          <div className={s.teacherCont}>
            {/* 最多展示3名 */}
            {teacherList && teacherList.length > 0
              ? teacherList.slice(0, 3).map((teacher, idx) => (
                  <div key={`teacher-${idx}-${teacher.id}`} className={s.teacherBox}>
                    <div className={s.imgWrapper}>
                      {/* 教师头像（圆） */}
                      <img
                        className={s.avatar}
                        src={teacher.img || icTeacher}
                        alt="teacher_avatar"
                      />
                      {/* 半透明覆盖式的圆边框 */}
                      <div className={s.avatarBorder} />
                    </div>
                    <span>{teacher.name}</span>
                  </div>
                ))
              : null}
          </div>
          {/* 价格/数量/优惠 */}
          {renderPomotion()}
        </div>
      </a>
    </Link>
  )
}

export default memo(CourseCard)
