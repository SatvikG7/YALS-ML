import "../styles/globals.css";
import "../styles/index.css";
import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

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
            <Script
                id="clarity"
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "9htedwvupc");
          `,
                }}
            />
            
            <div id="app">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </Provider>
    );
}
export default MyApp;
