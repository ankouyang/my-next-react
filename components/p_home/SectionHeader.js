import s from './SectionHeader.module.css'

export default function SectionHead({ title = '', subTitle = '' }) {
  return (
    <header className={s.header}>
      <div className={s.title}>
        <h4>{title}</h4>
        <h5>{subTitle}</h5>
      </div>
      <a href="/">查看更多</a>
    </header>
  )
}
