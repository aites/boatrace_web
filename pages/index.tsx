import Head from 'next/head'
import Link from 'next/link'
import { Graph } from './parts/_graph'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>ボートレース集計</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">ボートレース集計</h1>
      <menu className="menu">
        <Link href="./result">
          <p className="link">過去結果詳細を見る</p>
        </Link>
      </menu>
      <p className="description">最近のレース結果</p>
      <div className="graph">
        <Graph></Graph>
      </div>
      <footer>triple-i presents</footer>

      <style jsx>{`
        .container {
          padding: 0 8px;
        }
        .graph {
          height: 600px;
        }
        .link {
          text-decoration: underline !important;
          cursor: pointer;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 8px;
          font-size: 22px;
        }

        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          height: 100%;
          padding: 0;
          margin: 0 12px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
