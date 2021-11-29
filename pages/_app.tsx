import "../styles/globals.css";
import "../styles/index.css";
import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <Head>
                <title>YALS - Yet Another Link Shortener</title>
                <meta
                    name="description"
                    content="YALS-YetAnotherLinkShortener"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                <meta
                    name="keywords"
                    content="YALS, link shortener, short link, small link, minify url, url shortener"
                />
                <meta name="author" content="SatvikG7" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="app">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </Provider>
    );
}
export default MyApp;
