import axios from "axios";

const openLibrary = axios.create({
  baseURL: "https://openlibrary.org",
  timeout: 5e3,
  headers: {
    "User-Agent": "Winnie/1.0",
  },
});

async function search(query: string) {
  const { data } = await openLibrary.get("/search.json?", {
    params: {
      q: query.trim(),
      limit: 1,
    },
  });

  const { docs } = data;
  if (!docs.length) return null;

  return docs[0];
}

export default { search };
