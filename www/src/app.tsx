import Footer from "./components/footer.js";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function App() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [search, setSearch] = useState("");

  const [coverURL, setCoverURL] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSearchFocus() {
    setIsSearchFocused(true);
  }

  function handleSearchBlur() {
    setIsSearchFocused(false);
  }

  function handleRequestClick() {
    setIsModalOpen(true);
  }

  useEffect(() => {
    if (!search) {
      return;
    }

    fetch(`http://localhost:3000/api/search?q=${search}`)
      .then((res) => res.json())
      .then((book) => {
        const coverURL = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
        setCoverURL(coverURL);
      });
  }, [search]);

  useEffect(() => {
    if (isModalOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isModalOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky z-10 top-0 left-0 right-0 bg-neutral-100 shadow-xs border-b border-neutral-300">
        <div className="w-full justify-between pl-0 py-0 sm:py-2.5 sm:pl-4 flex px-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
          <div>
            <a href="/">
              <LazyLoadImage src="/winnie-logo.svg" className="size-8" />
            </a>
          </div>
          <button
            onClick={handleRequestClick}
            className="bg-neutral-900 px-2 py-1.5 text-white font-semibold border border-neutral-950 rounded-xs shadow-xs"
          >
            Request
          </button>
        </div>
      </header>
      <main className="flex-1 flex flex-col">
        <div
          className="aspect-video relative flex items-end justify-center max-h-48 px-4 w-full"
          style={{
            backgroundImage: "url(/wallpaper.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className={classNames(
              "bg-white items-center z-10 px-3.5 gap-2 transition flex max-w-md overflow-hidden border border-neutral-300 rounded-xs shadow-xs h-12 w-full mb-4",
              {
                "ring-neutral-800 ring-2 border-transparent": isSearchFocused,
              },
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              placeholder="Search for a book title"
              onChange={(e) => setSearch(e.target.value)}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className="flex-1 outline-none text-neutral-800 font-medium"
            />
          </div>
        </div>
        <div className="flex-1 py-8 px-4">
          <div className="rounded-md shadow-md bg-neutral-200 aspect-[3/4] max-w-sm mx-auto overflow-hidden">
            {coverURL && (
              <LazyLoadImage
                src={coverURL}
                alt="Book cover"
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
      <div
        className={classNames(
          "fixed top-0 left-0 right-0 flex justify-center items-center flex-col p-4 bottom-0 backdrop-blur z-20",
          {
            hidden: !isModalOpen,
          },
        )}
      >
        <div className="bg-white max-w-md border w-full border-neutral-300 rounded-xs shadow-xs">
          <div className="border-b border-stone-300 p-4">
            <h1 className="text-neutral-950 font-medium text-xl">
              Request a book cover
            </h1>
            <p className="mt-1 text-sm">
              Can't find a book cover? You can request it here and we will add
              it to the OpenLibrary API.
            </p>
          </div>
          <div className="p-4">
            {/** TODO: Need to create a form with an input to POST `title` and `author` to `/api/request`. */}
          </div>
        </div>
      </div>
    </div>
  );
}
