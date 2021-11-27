import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
    return (
        <main className="min-w-full">
            <div className="flex flex-col items-center justify-center text-center text-white layout">
                <Image
                    className="opacity-100 rounded-3xl"
                    src="/404.gif"
                    alt="404"
                    width={1280/2.5}
                    height={842/2.5}
                    priority={true}
                />
                {/* <h1 className="m-8">Link Not Found</h1>
                <Link href="/" className="mt-4">
                    Back to Home
                </Link> */}
            </div>
        </main>
    );
}
