async function login() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({
    email: "rhamses.soares@gmail.com",
    password:
      "yII9mkRWjgCfOCHfnGkqqIP3ikGgVs4Q6npF1RqHI4tMwQ8oYq02UZHpVkH5wShN",
    scope: "webplayer",
  });

  const requestOptions: any = {
    method: "POST",
    headers,
    body,
  };

  return fetch(
    "https://api.pocketcasts.com/user/login_pocket_casts",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
}

function upNext(accessToken: string) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);

  const requestOptions: any = {
    method: "POST",
    headers,
  };

  return fetch("https://api.pocketcasts.com/up_next/list", requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
}

function listPodcast(accessToken: string) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);

  const requestOptions = {
    method: "POST",
    headers,
  };

  return fetch("https://api.pocketcasts.com/user/podcast/list", requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
}
export default async function () {
  try {
    const { accessToken } = await login();
    console.log(accessToken);
    const { episodes } = await upNext(accessToken);
    // console.log("episodes", episodes);
    const { podcasts } = await listPodcast(accessToken);
    const result = [];
    for (const [index, ep] of Object.values(episodes).entries()) {
      if (index > 2) {
        break;
      }
      const { title, podcast } = ep;
      const {
        title: podTitle,
        author,
        url,
      } = podcasts.find((pod) => pod.uuid === podcast);
      result.push({
        title,
        podTitle,
        author,
        url,
        image: `https://static.pocketcasts.com/discover/images/webp/200/${podcast}.webp`,
      });
    }
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("erro no pocketcasts", error);
    return null;
  }
}
