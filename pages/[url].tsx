import { GetServerSideProps } from "next";
import { getLURL } from "../utils/fauna"

const Url = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { url } = context.params;
  await getLURL(url).then(data => {
    return {
      redirect: {
        destination: data.data.LURL,
        permanent: true,
      },
    };
  }).catch((err) => {
    return {
      redirect: {
        destination: "/",

      }
    }
  })
};

export default Url;