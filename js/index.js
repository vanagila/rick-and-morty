import { getCharacters } from "../middlewares/middlewares.js";

const charactersQty = document.querySelectorAll(".footer__list-item p")[0];

document.addEventListener("DOMContentLoaded", async () => {
  let charactersList = await getCharacters();

  charactersList.forEach((character) => {
    buildCard(character);
  });
  charactersQty.innerText = `Personagens: ${charactersList.length}`;
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
  mainCardContent.append(typeStatusContainer);

  const status = document.createElement("span");
  status.classList.add("span-content");
  status.innerText = character.status + " - ";
  typeStatusContainer.append(status);

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
