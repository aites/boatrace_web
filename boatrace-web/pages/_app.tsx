import React from 'react'
import Head from 'next/head';
import { AppProps } from 'next/app';
import Graph from './_graph';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>ボートレース集計結果</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <h1>ボートレース 収益表</h1>
      <Graph></Graph>
    </React.Fragment>
  )
}

export default App