import React from "react";

const Display = (props) => {
  const { bands } = props;
  //   const { artists } = props;
  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {/* {artists.map((artist) => (
        <article>
          <h1>{artist.name}</h1>
          <h3>{artist.instrument}</h3>
        </article>
      ))} */}

      {bands.map((band) => (
        <article>
          <img src={band.img} />
          <h1>{band.name}</h1>
          <h3>{band.artist}</h3>
          <h3>{band.genre}</h3>
          <button
            onClick={() => {
              props.selectBand(band);
              props.history.push("/edit");
            }}
          >
            Edit
          </button>
          <br />
        </article>
      ))}
    </div>
  );

  return bands.length > 0 ? loaded() : <h1>loading</h1>;
};

export default Display;
