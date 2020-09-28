import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import {ServerStyleSheets} from "@material-ui/styles";
import theme from '../src/theme';

class CustomDocument extends Document {
  static async getInitialProps (ctx) {
    const sheets = new ServerStyleSheets()

    const originalRenderPage = ctx.renderPage({
      enhanceApp: App => props => sheets.collect()
    })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default CustomDocument;