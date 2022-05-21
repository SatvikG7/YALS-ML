import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
const Navbar = () => {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    // console.log(session);

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <nav className="flex items-center flex-wrap bg-blue-500 p-3 w-full">
            <Link href="/" passHref>
                <Image
                    src="/logo.png"
                    alt="YALS-ML"
                    width={168}
                    height={45}
                    priority
                    quality={100}></Image>
            </Link>
            <button
                className="inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
                onClick={handleClick}>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
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
                }`}>
                <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                    {!loading && !session ? (
                        <Link href="/api/auth/signin">
                            <a
                                onClick={e => {
                                    e.preventDefault();
                                    signIn();
                                }}
                                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-blue-600 hover:text-white">
                                Sign in / Sign up
                            </a>
                        </Link>
                    ) : (
                        <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-blue-600 hover:text-white">
                            {session?.user?.name}
                        </a>
                    )}
                    {session && (
                        <Link href="/api/auth/signout">
                            <a
                                onClick={e => {
                                    e.preventDefault();
                                    signOut();
                                }}
                                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-blue-600 hover:text-white">
                                Sign out
                            </a>
                        </Link>
                    )}

                    <Link href="/about">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-blue-600 hover:text-white">
                            About
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
