import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
    token: process.env.CO_API_KEY,
});

const getEmbedding = async (text) => {
    const response = await cohere.embed({
        texts: [text],
        model: "embed-english-v3.0",
        input_type: "search_query",
    });

    return response.embeddings[0];
};
export default getEmbedding;