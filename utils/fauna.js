const faunadb = require("faunadb");
const Client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
    domain: "db.us.fauna.com",
});
const q = faunadb.query;

const getLURL = async (SURL) => {
    return await Client.query(
        q.Get(q.Match(q.Index("LURL_Return"), SURL))
    )
}

const createURL = async (LURL, SURL) => {
    return await Client.query(
        q.Create(q.Collection("Url"), {
            data: { LURL, SURL },
        })
    );
};

const checkLURL = async (LURL) => {
    return await Client.query(
        q.Get(q.Match(q.Index("LURL_Check"), LURL))
    )
}

module.exports = {
    getLURL,
    createURL,
    checkLURL,
};
