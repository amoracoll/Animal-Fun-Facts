// Importamos const animals
import { animals } from './animals';

// Importamos React
import React from "react";
import { createRoot } from "react-dom/client";

// Obtenemos el elemento con el id "app"
const container = document.getElementById("app");

const root = createRoot(container);

const title = "";

const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />;

const animalImages = [];
for (const animal in animals) {
  animalImages.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].images}
      aria-label={animal}
      role="button"
    />
  );
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact!" : title}</h1>
    {background}
    <div className="animals">{animalImages}</div>
  </div>
);

root.render(animalFacts);

