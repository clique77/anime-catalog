import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./sass/anime.scss";
import { Link } from "react-router-dom";

const AnimeItem = () => {
  const { id } = useParams();

  const [anime, setAnime] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    score_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  // Fetching the anime data
  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
    console.log(data.data);
  };

  // Fetching the characters data
  const getCharacters = async (anime) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <div className="anime-item">
      <h1>{title}</h1>
      <div className="details">
        <div className="detail">
          <div className="info">
            <img src={images?.jpg.large_image_url} alt="anime" />
            <div>
              <p>
                <span>Aired: </span>
                {aired?.string}
              </p>
              <p>
                <span>Rating: </span>
                {rating}
              </p>
              <p>
                <span>Rank: </span>
                {rank}
              </p>
              <p>
                <span>Score: </span>
                {score}
              </p>
              <p>
                <span>Popularity: </span>
                {popularity}
              </p>
              <p>
                <span>Status: </span>
                {status}
              </p>
              <p>
                <span>Source: </span>
                {source}
              </p>
              <p>
                <span>Season: </span>
                {season}
              </p>
              <p>
                <span>Duration: </span>
                {duration}
              </p>
            </div>
          </div>
          <p className="description">
            {showMore ? synopsis : synopsis?.substring(0, 450) + "..."}
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </p>
        </div>
        <h3 className="title">Trailer</h3>
        <div className="trailer-con">
          {trailer?.embed_url && (
            <iframe
              src={trailer?.embed_url}
              title="Inline Frame Example"
              width="800"
              height="450"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <h3 className="title">Characters</h3>
        <div className="characters">
          {characters?.map((character, index) => {
            const { role } = character;
            const { images, name, mal_id } = character.character;
            return (
              <Link to={`/character/${mal_id}`} key={index}>
                <div className="character">
                  <img src={images?.jpg.image_url} alt="character"></img>
                  <h4>{name}</h4>
                  <p>{role}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimeItem;
