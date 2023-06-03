import {
  getCharacters,
  getCharacterQty,
  getLocationQty,
  getEpisodeQty,
} from "../middlewares/middlewares.js";

const charactersQtyElem = document.querySelectorAll(".footer__list-item p")[0];
const locationsQtyElem = document.querySelectorAll(".footer__list-item p")[1];
const episodesQtyElem = document.querySelectorAll(".footer__list-item p")[2];

document.addEventListener("DOMContentLoaded", async () => {
  charactersQtyElem.innerText = `Personagens: ${await getCharacterQty()}`;
  locationsQtyElem.innerText = `Localizações: ${await getLocationQty()}`;
  episodesQtyElem.innerText = `Episódios: ${await getEpisodeQty()}`;

  let charactersList = await getCharacters();

  charactersList.forEach((character) => {
    buildCard(character);
  });
});

function buildCard(character) {
  const main = document.getElementById("main");
  const section = document.getElementById("section");

  const mainCard = document.createElement("div");
  mainCard.classList.add("main__card");
  section.append(mainCard);
  main.append(section);

  const picture = document.createElement("picture");
  picture.classList.add("main__card-picture");
  mainCard.append(picture);

  const img = document.createElement("img");
  img.src = character.image;
  img.alt = character.name;
  picture.append(img);

  const mainCardContent = document.createElement("div");
  mainCardContent.classList.add("main__card-content");
  mainCard.append(mainCardContent);

  const h2 = document.createElement("h2");
  h2.classList.add("main__card-title");
  h2.innerText = character.name;
  mainCardContent.append(h2);

  const typeStatusContainer = document.createElement("div");
  typeStatusContainer.classList.add("status-container");
  mainCardContent.append(typeStatusContainer);

  const statusCircle = document.createElement("span");
  statusCircle.classList.add("status-circle");
  typeStatusContainer.append(statusCircle);

  const status = document.createElement("span");
  status.classList.add("span-content");
  status.innerText = character.status;
  typeStatusContainer.append(status);

  character.status !== "Alive"
    ? (statusCircle.className = "reddot")
    : (statusCircle.className = "status-circle");

  const species = document.createElement("span");
  species.classList.add("span-content");
  species.innerText = character.species;
  typeStatusContainer.append(species);

  const locationContainer = document.createElement("div");
  locationContainer.classList.add("main__card-location");
  mainCardContent.append(locationContainer);

  const locationName = document.createElement("p");
  locationName.classList.add("p-content");
  locationName.innerText = "Última localização conhecida";
  locationContainer.append(locationName);

  const planet = document.createElement("span");
  planet.classList.add("span-content");
  planet.innerText = character.location.name;
  locationContainer.append(planet);

  const lastSeenContainer = document.createElement("div");
  lastSeenContainer.classList.add("main__card-last-seen");
  mainCardContent.append(lastSeenContainer);

  const lastTitle = document.createElement("p");
  lastTitle.classList.add("p-content");
  lastTitle.innerText = "Visto pela última vez em";
  lastSeenContainer.append(lastTitle);

  const chapter = document.createElement("span");
  chapter.classList.add("span-content");
  const lastIndex = character.episodes.length - 1;
  chapter.innerText = character.episodes[lastIndex].data.name;
  lastSeenContainer.append(chapter);
}
