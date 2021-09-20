import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    const [active, setActive] = useState(false);
    const [session, loading] = useSession();
    console.log(session);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="flex flex-col justify-between h-fullpage">
            <nav className="flex items-center flex-wrap bg-blue-400 p-3 ">
                <Link href="/">
                    <a className="inline-flex items-center p-2 mr-4 ">
                        <span className="text-xl text-white font-bold tracking-wide">
                            YetAnotherLinkShortener
                        </span>
                    </a>
                </Link>
                <button
                    className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
                    onClick={handleClick}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${
                        active ? "" : "hidden"
                    } w-full lg:inline-flex lg:flex-grow lg:w-auto ${
                        !session && loading ? "loading" : "loaded"
                    }`}
                >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        {!loading && !session ? (
                            <Link href="/api/auth/signin">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signIn();
                                    }}
                                    className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
                                >
                                    Sign in / Sign up
                                </a>
                            </Link>
                        ) : (
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                                {session?.user?.name}
                            </a>
                        )}
                        {session && (
                            <Link href="/api/auth/signup">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signOut();
                                    }}
                                    className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
                                >
                                    Sign out
                                </a>
                            </Link>
                        )}
                        <Link href="/">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                                About
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
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
