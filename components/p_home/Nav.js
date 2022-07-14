import Link from 'next/link'
import ReactSlick from 'react-slick'
import s from './Nav.module.css'
const Nav = ({ data = [] }) => {
  // 这里对只有一张图片的case做了处理
  const isSwiperable = !!(data && data.length)
  const settings = {
    arrows: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: isSwiperable,
    infinite: isSwiperable,
    swipe: isSwiperable,
    dots: isSwiperable,
    dotsClass: 'nav-dots',
    className: 'nav-banners',
  }

  let result = []
  for (let i = 0; i < data.length; i += 8) {
    result.push(data.slice(i, i + 8))
  }
  const list = result || []
  return (
    <section className={s.nav}>
      {/* 轮播 */}
      <ReactSlick {...settings}>
        {list.map((item1, index1) => (
          <div className={s.yhlWx} key={index1}>
            {item1.map((item, index) => (
              <a key={`${index}-${item.courseId}`} className={s.navDiv}>
                {/* 跳转链接 */}
                <Link href="/course/detail/[id]" as={`course/detail/${item.courseId}`}>
                  {/* nav icon 图片 */}
                  <img src={item.img} key={index} alt={item.title} className={s.slide} />
                </Link>
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        ))}
      </ReactSlick>
    </section>
  )
}

export default Nav
