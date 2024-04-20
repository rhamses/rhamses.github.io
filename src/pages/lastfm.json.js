export const GET = async ({ params, request, env }) => {
  const lastfm_key = import.meta.env.lastfm_key;
  console.log("lastfm_key", lastfm_key);
  const responseBuffer = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rhamses&api_key=${lastfm_key}&format=json&limit=6`
  );
  const response = await responseBuffer.json();
  console.log("response", response);
  const {
    recenttracks: { track: tracks },
  } = response;
  const result = [];
  console.log("tracks", tracks);
  for (const track of tracks) {
    const title = track.name;
    const image = track.image.find((img) => img.size === "large")?.["#text"];
    const type = track.artist["#text"];
    const url = track.url;
    result.push({ title, image, type, url });
  }
  console.log("result", result);
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const POST = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    })
  );
};

export const DELETE = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a DELETE!",
    })
  );
};

export const ALL = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: `This was a ${request.method}!`,
    })
  );
};
