import { useState } from "react";
import Popular from "./Popular";
import { useGlobalContext } from "../context/global";
import "./sass/home.scss";
import { render } from "@testing-library/react";

function Home() {
  const [rendered, setRendered] = useState("popular");

  const {
    handleSubmit,
    search,
    searchAnime,
    handleChange,
    getUpcomingAnime,
    getAnime,
    getAiringAnime,
  } = useGlobalContext();

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <header>
      <div className="logo">
        <h1>
          {rendered === "popular"
            ? "Popular Anime"
            : rendered === "airing"
            ? "Airing Anime"
            : "Upcoming Anime"}
        </h1>
      </div>
      <div className="search-container">
        <div className="filter-btn popular-filter">
          <button
            onClick={() => {
              setRendered("popular");
              getAnime();
            }}
          >
            Popular
          </button>
        </div>
        <form action="" className="search-form" onSubmit={handleSubmit}>
          <div className="input-control">
            <input
              type="text"
              placeholder="Search Anime"
              value={search}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </div>
        </form>
        <div className="filter-btn airing-filter">
          <button
            onClick={() => {
              setRendered("airing");
              getAiringAnime();
            }}
          >
            Airing
          </button>
        </div>
        <div className="filter-btn upcoming-filter">
          <button
            onClick={() => {
              setRendered("upcoming");
              getUpcomingAnime();
            }}
          >
            Upcoming
          </button>
        </div>
      </div>
      {switchComponent()}
    </header>
  );
}

export default Home;
