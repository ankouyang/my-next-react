import Link from 'next/link'
import s from './History.module.css'

export default function History({ history, hotWord, deleteHistory, submitSearch }) {
  // 热门搜索单位
  const renderHotItem = (item, idx) => {
    // type = 2, 课程详情页面,
    // type = 1, 词汇
    const text = item.title.slice(0, 6)
    const prefix = '/course/detail/'
    if (item.type === 2) {
      return (
        <Link key={`hot-item-${idx}`} href={`${prefix}[id]`} as={`${prefix}${item.id}`}>
          {/* 不超过6个字 */}
          <a className={s.item}>{text}</a>
        </Link>
      )
    }
    return (
      <span key={`hot-item-${idx}`} className={s.item} onClick={() => submitSearch(text)}>
        {text}
      </span>
    )
  }

  return (
    <>
      {/* 热门搜索 */}
      {hotWord && hotWord.length > 0 ? (
        <section className={s.container}>
          <div className={s.hotHead}>热门搜索</div>
          <div className={s.content}>
            {hotWord.slice(0, 10).map((item, idx) => renderHotItem(item, idx))}
          </div>
        </section>
      ) : null}
      {/* 搜索历史 */}
      <section className={s.container}>
        <div className={`${s.historyHead} border-b-1px`}>
          <span>搜索历史</span>
          <button
            className={s.del}
            onClick={() => {
              document.activeElement.blur() // 想收起虚拟键盘吗？
              if (history.length) {
                deleteHistory()
              }
            }}>
            <img className={s.clean} src="/img/clean.png" alt="" />
          </button>
        </div>
        <div className={s.content}>
          {history
            ? history.map((item, idx) => (
                <div
                  className={`${s.list} border-b-1px`}
                  key={`history-item-${idx}`}
                  onClick={() => submitSearch(item)}>
                  {item}
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}
