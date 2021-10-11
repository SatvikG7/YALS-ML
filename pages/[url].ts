import { getLURL } from "../utils/fauna";

const Url = () => {
    return null;
};

export async function getServerSideProps(context) {
    const { url } = context.params;

    try {
        const data:any = await getLURL(url);
        if (data) {
            return {
                redirect: {
                    destination: data.data.LURL,
                    permanent: true,
                },
            };
        }
    } catch {
      return {
        redirect: {
            destination: "/",
        },
    };
    }
   
}

export default Url;
