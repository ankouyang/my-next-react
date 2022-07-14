import Document, { Html, Head, Main, NextScript } from 'next/document'

// 只在服务端渲染
class MyDocument extends Document {
  // 数据预请求
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* 禁止iphone点击数字自动拨号 */}
          <meta name="format-detection" content="telephone=no"></meta>
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
          {/* 网站描述信息 */}
          <meta name="keywords" content="网易,网易公开课"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          {/* 内容容器 */}
          <Main />
          {/* 插入脚本 */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
