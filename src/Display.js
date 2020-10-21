import React from "react";

const Display = (props) => {
  const { bands } = props;
  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {bands.map((band) => (
        <article>
          <img src={band.img} />
          <h1>{band.name}</h1>
          <h3>{band.artist}</h3>
          <h3>{band.genre}</h3>
        </article>
      ))}
    </div>
  );

  return bands.length > 0 ? loaded() : <h1>loading</h1>;
};

export default Display;
