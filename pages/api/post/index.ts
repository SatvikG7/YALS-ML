// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { checkLURL, createURL } from "../../../lib/fauna";

const index = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const { url } = req.body;

        if (url) {
            await checkLURL(url)
                .then(({ data }) => {
                    // console.log(data);
                    res.redirect(302, `/shortened/${data.SURL}`);
                })
                .catch(err => {
                    if (err) {
                        createURL(url)
                            .then(({ data }) => {
                                // console.log(data);
                                
                                res.redirect(302, `/shortened/${data.SURL}`);
                            })
                            .catch(err => {
                                if (err) {
                                    //
                                }
                                res.status(500).json({
                                    error: "Something went wrong.",
                                });
                            });
                    }
                });
        } else if (!url) {
            res.status(400).json({ message: "Bad Request" });
        }
    } else {
        res.status(302).redirect("/");
    }
};

export default index;
