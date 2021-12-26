import { getLURL } from "../lib/fauna";

const Url = () => {
    return null;
};

export async function getServerSideProps(context) {
	const { url } = context.params;
	
    try {
        const response = await getLURL(url);
        if (response.data) {
            return {
                redirect: {
                    destination: response.data.LURL,
                    permanent: false,
                },
            };
        }
    } catch {
        return {
            redirect: {
                destination: "/404",
            },
        };
    }
}

export default Url;
