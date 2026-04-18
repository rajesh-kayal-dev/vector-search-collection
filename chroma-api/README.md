# Semantic Vector Search API

This project is a simple implementation of a semantic search system using vector embeddings and a vector database. Instead of matching exact keywords, it converts text into numerical vectors (embeddings) and finds the most similar result using similarity search.

---

## Overview
- Text is converted into embeddings using Cohere API
- Embeddings are stored in ChromaDB
- User query is also converted into embedding
- Similarity search is performed to find the closest match
- Metadata filtering is applied to control results

---

## Tech Stack
- Node.js
- Express
- Cohere API (Embeddings)
- ChromaDB (Vector Database)

---

## Project Structure
```
src/
├── app.js # API routes
├── embedding.js # Cohere embedding logic
├── db.js # ChromaDB connection
defaults.js # Server configuration
defaults.env # Environment variables file 
```

---

## API Endpoints
### 1. Add Data 
**Stores text along with embeddings and metadata.**
**POST `/add`**
Request:
```json{
  "texts": [
    "I want to buy a new smartphone",
    "Football is my favorite sport",
    "Cricket match today"
  ]}
```
### 2. Search 
Finds the most similar text based on query.
**POST `/search`**
Request:
```json{
  "query": "buy phone"
}
dResponse:
{
  "query": "buy phone",
  "result": "I want to buy a new smartphone"
}
dMetadata Filtering:
each text is stored with a category: 
tech → phone, laptops;
sports → football, cricket;
other → remaining.
e.g., filter used in search: where: { _category_: "tech" }
e.g., this ensures only relevant category results are returned.
Sample Outputs:
a) Add Data API 
b) Search API (Tech Query) 
c) Search API (Sports Query)
# Semantic Vector Search API

This project is a simple implementation of a semantic search system using vector embeddings and a vector database. Instead of matching exact keywords, it converts text into numerical vectors (embeddings) and finds the most similar result using similarity search.

---

## Overview
- Text is converted into embeddings using Cohere API
- Embeddings are stored in ChromaDB
- User query is also converted into embedding
- Similarity search is performed to find the closest match
- Metadata filtering is applied to control results

---

## Tech Stack
- Node.js
- Express
- Cohere API (Embeddings)
- ChromaDB (Vector Database)

---

## Project Structure
```
src/
├── app.js # API routes
├── embedding.js # Cohere embedding logic
├── db.js # ChromaDB connection
defaults.js # Server configuration
defaults.env # Environment variables file 
```

---

## API Endpoints
### 1. Add Data 
**Stores text along with embeddings and metadata.**
**POST `/add`**
Request:
```json{
  "texts": [
    "I want to buy a new smartphone",
    "Football is my favorite sport",
    "Cricket match today"
  ]}
```
### 2. Search 
Finds the most similar text based on query.
**POST `/search`**
Request:
```json{
  "query": "buy phone"
}
dResponse:
{
  "query": "buy phone",
  "result": "I want to buy a new smartphone"
}
dMetadata Filtering:
each text is stored with a category: 
tech → phone, laptops;
sports → football, cricket;
other → remaining.
e.g., filter used in search: where: { _category_: "tech" }
e.g., this ensures only relevant category results are returned.

Setup Instructions
Install dependencies
npm install
Create .env file
CO_API_KEY=your_api_key
PORT=5000
Start server
npm run dev
Run ChromaDB (Docker)
docker run -p 8000:8000 -e CHROMA_SERVER_CORS_ALLOW_ORIGINS="*" chromadb/chroma

