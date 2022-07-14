import Link from 'next/link'
import s from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={s.wrapper}>
      <Link href="/search">
        <a className={s.search}>输入搜索内容</a>
      </Link>
      <Link href="/user">
        <a className={s.user} />
      </Link>
    </div>
  )
}
