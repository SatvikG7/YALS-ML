// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { parseBody } from "next/dist/server/api-utils";

const index = (req: NextApiRequest, res: NextApiResponse) => {
        console.log(req.method)
        if (req.method == 'POST') {
                const {url} = req.body
                const time = new Date();
                const id = time.getTime();
                console.log(url,id)
                res.redirect(`/Shortened/${id}`);
        }

        res.redirect('/')
};

export default index;
