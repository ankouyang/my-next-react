import 'normalize.css'
import '../style/global.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Meta from '@/Common/Meta'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}
