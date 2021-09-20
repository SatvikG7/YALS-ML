import "../styles/globals.css";
import '../styles/index.css'
import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <Head>
                <title>YALS</title>
                <meta
                    name="description"
                    content="YALS-YetAnotherLinkShortener"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
}
export default MyApp;
