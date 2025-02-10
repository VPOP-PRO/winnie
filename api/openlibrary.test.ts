import { describe, it, expect } from "vitest";
import openlibrary from "./openlibrary";

describe("search", () => {
  it("should return a single book", async () => {
    const books = await openlibrary.search("The Great Gatsby");

    expect(books).toMatchObject({
      title: "The Great Gatsby",
      author_name: ["F. Scott Fitzgerald"],
    });
  });
});
