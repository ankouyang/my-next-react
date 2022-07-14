import SectionHeader from './SectionHeader'
import s from './Talk.module.css'

export default function Talk() {
  return (
    <div>
      <SectionHeader title="今日公开课" subTitle="Today's public class" />
      <section className={s.recommend}>recommend Talk</section>
      <section className={s.cardWrap}>talk card</section>
    </div>
  )
}
