import express from "express";
import getEmbedding from "./embedding.js";
import cosineSimilarity from "./similarity.js";

const app = express();

app.use(express.json());

app.get("/test", async (req, res) => {
    const text = "I love mobile phones";

    const embedding = await getEmbedding(text);

    res.json({
        text,
        embedding: embedding.slice(0, 10),
    });
});

app.post("/similar", async (req, res) => {
    const { query, sentences } = req.body;

    if (!query || !sentences?.length) {
        return res.status(400).json({ error: "Invalid input" });
    }

    // query embedding
    const queryEmbedding = await getEmbedding(query);

    let bestScore = -1;
    let bestSentence = "";

    for (const sentence of sentences) {
        const sentenceEmbedding = await getEmbedding(sentence);

        const score = cosineSimilarity(queryEmbedding, sentenceEmbedding);

        if (score > bestScore) {
            bestScore = score;
            bestSentence = sentence;
        }
    }

    res.json({
        query,
        mostSimilar: bestSentence,
        score: bestScore,
    });
});

app.get("/", (req, res) => {
    res.send("API is running...");
})

export default app;