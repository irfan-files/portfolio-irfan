import React from "react";
import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    debugger;
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
