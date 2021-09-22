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
                <title>YALS</title>
                <meta
                    name="description"
                    content="YALS-YetAnotherLinkShortener"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div  id="app">
                <Navbar  />
                <Component {...pageProps} />
                <Footer />
            </div>
        </Provider>
    );
}
export default MyApp;
