import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";

const PORT = process.env.PORT;

console.log("KEY:", process.env.COHERE_API_KEY);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});