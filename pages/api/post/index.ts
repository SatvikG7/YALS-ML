// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";
const index = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    if (req.method == "POST") {
        const { url } = req.body;
        if (url) {
            const time = new Date();
            const id = time.getTime();
            console.log(url, id);
            let doc = await db
                .collection("links")
                .insertOne({ slinkID: id, llink: url });
            if (doc) {
                console.log(doc);
                res.redirect(`/Shortened/${id}`);
            }
            res.status(500).json({
                message: "Unable to create Shortened link :(. Try again",
            });
        }
        res.status(400).json({ message: "Bad request" });
    }

    res.redirect("/");
};

export default index;
