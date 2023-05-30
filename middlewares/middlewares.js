export async function getCharacters() {
  try {
    const res = await api.get("/character");
    console.log(res.data.results);
    return res.data.results;
  } catch (err) {
    console.log("err");
    return [];
  }
}
