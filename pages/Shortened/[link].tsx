import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
// import { getSession } from "next-auth/client";

const Link: NextPage = () => {
    const router = useRouter();
    const domain = process.env.BASE_URL;
    const surl = router.query.link;

    const copy = () => {
        const slink = document.getElementById("slink");
        let link: string = slink?.innerHTML.toString()!;
        if (link) navigator.clipboard.writeText(link);
    };

    return (
        <div className="shortened">
            <div className="w-full flex md:flex-row flex-col items-center justify-evenly content-between">
                <h3 className="text-3xl mr-2 bg-red-400 rounded-md px-2 py-1">
                    Shortened Link:{" "}
                </h3>
                <h3
                    id="slink"
                    className="text-3xl bg-green-500 rounded-md px-2 py-1 my-3"
                >
                    {`${domain}/${surl}`}
                </h3>

                <button
                    className="text-2xl bg-yellow-500 rounded-md ml-2 px-3 py-1"
                    onClick={copy}
                >
                    Copy to Clipboard
                </button>
            </div>
        </div>
    );
};

export default Link;
