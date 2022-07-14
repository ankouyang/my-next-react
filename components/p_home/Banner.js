import Link from 'next/link'
import ReactSlick from 'react-slick'
import s from './Banner.module.css'

const Banner = ({ data = [] }) => {
  // 这里对只有一张图片的case做了处理
  const isSwiperable = !!(data && data.length)
  const settings = {
    arrows: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: isSwiperable,
    infinite: isSwiperable,
    swipe: isSwiperable,
    dots: isSwiperable,
    dotsClass: 'banner-dots',
    className: 'home-banners',
  }
  return (
    <section className={s.wrap}>
      {/* 轮播 */}
      <ReactSlick {...settings}>
        {data.map((item, index) => (
          <div key={`${index}-${item.courseId}`}>
            {/* 跳转链接 */}
            <Link href="/course/detail/[id]" as={`course/detail/${item.courseId}`}>
              {/* banner图片 */}
              <img src={item.img} key={index} alt={item.title} className={s.slide} />
            </Link>
          </div>
        ))}
      </ReactSlick>
      {/* 半透明渐变蒙层 */}
      <div className={s.mask}></div>
    </section>
  )
}

export default Banner
