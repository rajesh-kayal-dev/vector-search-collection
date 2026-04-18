import express from "express";
import getEmbedding from "./embedding.js";
import collection from "./db.js";

const app = express();
app.use(express.json());

//Add data
app.post("/add", async (req, res) => {
    const { texts } = req.body;

    const embeddings = await Promise.all(
        texts.map((text) => getEmbedding(text))
    );

    await collection.add({
        documents: texts,
        embeddings,
        ids: texts.map((_, i) => i.toString()),

        metadatas: texts.map((text) => ({
            category: text.includes("phone") ? "tech" : "other",
        })),
    });

    res.json({ message: "Data added" });
});


//search
app.post("/search", async (req, res) => {
    const { query } = req.body;

    const queryEmbedding = await getEmbedding(query);

    const result = await collection.query({
        queryEmbeddings: [queryEmbedding],
        nResults: 1,

        where: {
            category: "tech",
        },
    });

    const bestMatch = result.documents?.[0]?.[0];

    res.json({
        query,
        result: bestMatch,
    });
});

export default app;