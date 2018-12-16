"use strict";

// helpers

function addClasses(el, classNames) {
  if (!classNames) {
    return false;
  }

  if (typeof classNames === "string") {
    el.classList.add(classNames);
  } else if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  }
}

const createElement = (tagName, classNames) => {
  const el = document.createElement(tagName);
  addClasses(el, classNames);
  return el;
};

// global elements

const palettesEl = document.querySelector(".palettes");

function getPalettes() {
  const palettesUrl =
    "https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json";

  fetch(palettesUrl)
    .then(res => res.json())
    .then(data => {
      const { palettes } = data;
      /* Alternative:
        const palettes = data.palettes;
      */
      for (const palette of palettes) {
        const { name, colors } = palette;
        /* Alternative:
        const name = palette.name;
        const colors = palette.colors;
        */
        paintPalette(name, colors);
      }
    });
}

function paintPalette(name, colors) {
  // palette
  const paletteEl = createElement("li", "palette");

  // palette name
  const paletteNameEl = createElement("h1", "palette__name");
  const paletteName = document.createTextNode(name);
  paletteNameEl.appendChild(paletteName);

  // palette colors
  const paletteColors = createElement("ul", "palette__colors");
  for (const color of colors) {
    const paletteColor = createElement("li", "palette__color");
    paletteColor.style.backgroundColor = `#${color}`;
    paletteColors.appendChild(paletteColor);
  }

  // palette
  paletteEl.appendChild(paletteNameEl);
  paletteEl.appendChild(paletteColors);
  palettesEl.appendChild(paletteEl);
}

getPalettes();
