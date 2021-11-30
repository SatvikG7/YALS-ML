import type { NextPage } from "next";
import { getSession } from "next-auth/client";
const Home: NextPage = () => {
    return (
        <div className="flex flex-col w-screen items-center">
            <form
                className="w-10/12 flex md:flex-row flex-col items-center justify-evenly content-between"
                action="/api/post/"
                method="POST"
            >
                <input
                    className="md:4/5 text-2xl bg-green-500 placeholder-green-800 rounded-md h-14 px-3"
                    type="url"
                    name="url"
                    id="url"
                    placeholder="https://"
                    required
                />
                <input
                    className="md:w-1/5 text-2xl font-semibold text-gray-800 bg-yellow-500
                    hover:opacity-95 rounded-md h-14 min-w-min sm:px-1 px-3 transition-all"
                    type="submit"
                    value="Minify Link"
                    aria-label="Minify Link"
                />
            </form>
        </div>
    );
};

export default Home;

export async function getServerSideProps(context) {
    // console.log(context);
    const session = await getSession(context);
    return {
        props: {
            session,
        },
    };
}
