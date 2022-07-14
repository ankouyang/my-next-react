import Head from 'next/head'
import HomeHead from '@/p_home/HomeHead'
import Recommend from '@/p_home/Recommend'
import Talk from '@/p_home/Talk'
import { getHome } from 'core/api'

export default function Home({ home = {} }) {
  const { banner, nav } = home
  console.log(nav)
  return (
    <div>
      <Head>
        <title>精品课首页</title>
      </Head>
      <main>
        <HomeHead banner={banner} nav={nav} />
        <Talk />
        <Recommend />
      </main>
    </div>
  )
}
// 服务端渲染方法  此方法只能是在pages下面，不能用在components
export async function getServerSideProps() {
  const data = await getHome()
  return { props: { home: data } }
}
