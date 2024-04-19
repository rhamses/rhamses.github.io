export default async function () {
  const lastfm_key = "8ea290ad3878ec6f09f4b68dcabbf3c9";
  // console.log("lastfm_key", lastfm_key);
  const responseBuffer = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rhamses&api_key=${lastfm_key}&format=json&limit=6`
  );
  const response = await responseBuffer.json();
  // console.log("response", response);
  const {
    recenttracks: { track: tracks },
  } = response;
  const result = [];
  // console.log("tracks", tracks);
  for (const track of tracks) {
    const title = track.name;
    const image = track.image.find((img) => img.size === "large")?.["#text"];
    const type = track.artist["#text"];
    const url = track.url;
    result.push({ title, image, type, url });
  }
  return result;
}
