/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { revalidate } from '@module-federation/nextjs-mf/utils'

export default class AgentDocument extends Document {
  static async getInitialProps(ctx) {
    try {
      const initialProps = await Document.getInitialProps(ctx)
      ctx?.res?.on('finish', () => {
        revalidate().then(shouldUpdate => {
          // eslint-disable-next-line no-console
          console.log('finished sending response', shouldUpdate)
        })
      })
      return {
        ...initialProps,
      }
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en-AU">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
