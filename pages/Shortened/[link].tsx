import type { NextPage } from "next";
import styles from "../../styles/Shortened.module.css";
import { useRouter } from "next/dist/client/router";
import { getSession } from "next-auth/client";
const Link: NextPage = () => {
    const router = useRouter();
    const surl = router.query.link;
    const copy = () => {
        const slink = document.getElementById("slink");
        let link: string = slink?.innerHTML.toString()!;
        if (link) navigator.clipboard.writeText(link);
    };
    return (
        <div className="shortened">
            <div className="flex">
                <h3 className="text-3xl">Shortened Link: </h3>
                <h3 id="slink" className="text-3xl">
                    http://localhost:3000/Shortened/{surl}
                </h3>
            </div>
            <button onClick={copy}>Copy to Clipboard</button>
        </div>
    );
};

export default Link;

