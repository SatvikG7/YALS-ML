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
        <nav className="flex items-center flex-wrap bg-blue-500 p-3 w-full">
            <Link href="/">
                <a className="sm:text-xl text-base font-bold inline-flex items-center p-2 bg-yellow-300 rounded-xl">
                    <span className="text-blue-500">Y</span>
                    <span className="text-red-500">et</span>
                    <span className="text-blue-500">A</span>
                    <span className="text-red-500">nother</span>
                    <span className="text-blue-500">L</span>
                    <span className="text-red-500">ink</span>
                    <span className="text-blue-500">S</span>
                    <span className="text-red-500">hortener</span>
                    <span className="text-black mx-1">.</span>
                    <span className="text-blue-500">M</span>
                    <span className="text-red-500">inify</span>
                    <span className="text-blue-500">L</span>
                    <span className="text-red-500">ink</span>
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
                                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-blue-600 hover:text-white"
                            >
                                Sign in / Sign up
                            </a>
                        </Link>
                    ) : (
                        <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-blue-600 hover:text-white">
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
                                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-blue-600 hover:text-white"
                            >
                                Sign out
                            </a>
                        </Link>
                    )}

                    <a
                        href="https://github.com/SatvikG7/YALS-YetAnotherLinkShortener/blob/main/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-blue-600 hover:text-white"
                    >
                        About
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
