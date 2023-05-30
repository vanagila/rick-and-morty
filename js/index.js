import { getCharacters } from "../middlewares/middlewares.js";

let charactersList = [];

document.addEventListener("DOMContentLoaded", async () => {
  charactersList = await getCharacters();

  charactersList.forEach((character) => {
    buildCard(character);
  });
});

function buildCard(character) {
  // nome, status, especie, imagem,
  const section = document.querySelector(".main__section");

  const mainDiv = document.createElement("div");
  const characterName = document.createElement("p");
  // const picture = document.createElement("picture");
  // const card = document.createElement("div");
  characterName.innerText = character.name;
  mainDiv.append(characterName);
  section.append(mainDiv);
}
