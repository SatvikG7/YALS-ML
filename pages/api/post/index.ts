// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const index = (req: NextApiRequest, res: NextApiResponse) => {
    
        const q = req.query;
        res.send(q);
};

export default index;
