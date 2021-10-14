import type { NextPage } from "next";
import { getSession } from "next-auth/client";
const Home: NextPage = () => {
    return (
        <div className="flex flex-col justify-between">
            <form
                className="w-full flex md:flex-row flex-col items-center justify-evenly content-between"
                action="/api/post/"
                method="POST"
            >
                <input
                    className="md:4/5 bg-green-500 placeholder-green-800 rounded-md h-14 px-3"
                    type="url"
                    name="url"
                    id="url"
                    placeholder="https://"
                    required
                />
                <input
                    className="md:w-1/5 bg-yellow-500 rounded-md h-14 min-w-min"
                    type="submit"
                    value="Generate Shorted Link"
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
