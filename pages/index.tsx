import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className="home-container">
            <Head>
                <title>YALS</title>
                <meta
                    name="description"
                    content="YALS-YetAnotherLinkShortener"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full">
                <h1 className="text-center text-2xl md:text-4xl">
                    Welcome to YetAnotherLinkShortener
                </h1>
            </main>
            <section className="w-full">
                <form
                    className="w-full flex md:flex-row flex-col items-center justify-evenly content-between"
                    action="/api/post/"
                    method="POST"
                >
                    <input
                        className="md:4/5 bg-green-500 placeholder-green-800 rounded-md h-14"
                        type="url"
                        name="url"
                        id="url"
                        placeholder="your link goes here"
                        required
                    />
                    <input
                        className="md:w-1/5 bg-yellow-500 rounded-md h-14 "
                        type="submit"
                        value="Generate Shorted Link"
                    />
                </form>
            </section>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;
