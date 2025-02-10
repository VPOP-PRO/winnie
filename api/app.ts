import cors from "cors";
import express from "express";
import fs from "fs/promises";
import openlibrary from "./openlibrary";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("winnie.db");

(async () => {
  const schema = await fs.readFile("schema.sql", "utf-8");

  db.exec(schema, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
})();

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());

const api = express.Router();

/**
 * Search for a book by title.
 *
 * GET /api/search?q=<BOOK_TITLE>
 */
api.get("/search", async (req, res) => {
  try {
    const query = req.query.q;

    const isQueryString = typeof query === "string";
    if (!isQueryString) {
      res.status(400).end();
      return;
    }

    const books = await openlibrary.search(query);
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
});

/**
 * Request a book to be added.
 *
 * POST /api/request
 */
api.post("/request", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;

  // TODO: Insert the book request into the database
  // Must ignore if the book is already requested
});

/**
 * Get all book requests.
 *
 * GET /api/requests
 */
api.get("/requests", (req, res) => {
  // Return all the book requests from the database
  // Include the count of the total requests
  // Maybe also support pagination with limit and offset using query parameters?
});

app.use("/api", api);

app.use((_, res) => {
  res.status(404).end();
});

export default app;
