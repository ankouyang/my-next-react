import { memo } from 'react'
import s from './Suggest.module.css'

const Suggest = ({ data = [], submitSearch }) => {
  if (!data.length) return null
  return (
    <ul className={s.container}>
      {data.map((item, idx) => (
        <li
          className={`${s.suggestItem} border-b-1px`}
          key={`search-suggest-${item + idx}`}
          onClick={() => submitSearch(item)}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default memo(Suggest)
