import { useRouter } from 'next/router'

export default function CourseDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <main>
      <h3>课程分类：{id}</h3>
    </main>
  )
}
