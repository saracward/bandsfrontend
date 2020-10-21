import React from "react";

const Display = (props) => {
  const { bands } = props;
  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {bands.map((bands) => (
        <article>
          <img src={bands.img} />
          <h1>{bands.name}</h1>
          <h3>{bands.genre}</h3>
        </article>
      ))}
    </div>
  );

  return bands.length > 0 ? loaded() : <h1>loading</h1>;
};

export default Display;
