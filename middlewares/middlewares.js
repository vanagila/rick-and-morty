export async function getCharacters(page) {
  try {
    const res = await api.get(`/character?page=${page}`);
    const characters = res.data.results;

    for (let character of characters) {
      character.episodes = await getCharacterEps(character.id);
    }

    return characters;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getCharacterEps(characterId) {
  try {
    const res = await api.get(`/character/${characterId}`);
    const character = res.data;
    const episodes = character.episode;
    const episodeNames = [];

    for (let ep of episodes) {
      const res = await api.get(ep);
      episodeNames.push(res);
    }

    return episodeNames;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getCharacterQty() {
  try {
    const res = await api.get("/character");
    const charactersQty = res.data.info.count;

    return charactersQty;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getLocationQty() {
  try {
    const res = await api.get("/location");
    const locationsQty = res.data.info.count;

    console.log(locationsQty);
    return locationsQty;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getEpisodeQty() {
  try {
    const res = await api.get("/episode");
    const episodeQty = res.data.info.count;

    console.log(episodeQty);
    return episodeQty;
  } catch (err) {
    console.log(err);
    return [];
  }
}
