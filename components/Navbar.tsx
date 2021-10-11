import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";
const Navbar = () => {
    const [session, loading] = useSession();
    // console.log(session);

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <nav className="flex items-center flex-wrap bg-blue-400 p-3 w-full">
            <Link href="/">
                <a className="inline-flex items-center p-2 mr-4 ">
                    <span className="text-xl text-white font-bold tracking-wide">
                        YetAnotherLinkShortener
                    </span>
                </a>
            </Link>
            <button
                className=" inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
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
                                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white"
                            >
                                Sign in / Sign up
                            </a>
                        </Link>
                    ) : (
                        <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white">
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
                                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white"
                            >
                                Sign out
                            </a>
                        </Link>
                    )}
                    <Link href="/">
                        <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-500 hover:text-white">
                            About
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
