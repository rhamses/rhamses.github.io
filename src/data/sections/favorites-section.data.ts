import type { FavoritesSection } from "@/types/sections/favorites-section.types";
import type { ReadonlyDeep } from "type-fest";

const recentMusic = () => {
  const response = {
    recenttracks: {
      track: [
        {
          artist: {
            mbid: "55e33230-0aa7-4461-931f-ea5e74fefa39",
            "#text": "Charlie Parker",
          },
          streamable: "0",
          image: [
            {
              size: "small",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/151c165a50d8c4ffbdbf18b235749595.jpg",
            },
            {
              size: "medium",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/151c165a50d8c4ffbdbf18b235749595.jpg",
            },
            {
              size: "large",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/151c165a50d8c4ffbdbf18b235749595.jpg",
            },
            {
              size: "extralarge",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/151c165a50d8c4ffbdbf18b235749595.jpg",
            },
          ],
          mbid: "",
          album: {
            mbid: "cb4dc8e1-5369-49b7-a38d-66edab592091",
            "#text": "April In Paris: The Genius Of Charlie Parker #2",
          },
          name: "Summertime",
          url: "https://www.last.fm/music/Charlie+Parker/_/Summertime",
          date: {
            uts: "1713409337",
            "#text": "18 Apr 2024, 03:02",
          },
        },
        {
          artist: {
            mbid: "f4d2fc5a-cacb-47c8-b096-ee73864b1aa8",
            "#text": "Bob James",
          },
          streamable: "0",
          image: [
            {
              size: "small",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/e4c2df0e66912c01614efb1a703e58e2.jpg",
            },
            {
              size: "medium",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/e4c2df0e66912c01614efb1a703e58e2.jpg",
            },
            {
              size: "large",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/e4c2df0e66912c01614efb1a703e58e2.jpg",
            },
            {
              size: "extralarge",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/e4c2df0e66912c01614efb1a703e58e2.jpg",
            },
          ],
          mbid: "",
          album: {
            mbid: "",
            "#text": "Double Vision",
          },
          name: "Maputo",
          url: "https://www.last.fm/music/Bob+James/_/Maputo",
          date: {
            uts: "1713407370",
            "#text": "18 Apr 2024, 02:29",
          },
        },
        {
          artist: {
            mbid: "8f60a47c-015b-4b70-957c-0871347d1b1d",
            "#text": "Green Carnation",
          },
          streamable: "0",
          image: [
            {
              size: "small",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/a0948793c77f4ac79b6b5ba42fd9fe40.jpg",
            },
            {
              size: "medium",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/a0948793c77f4ac79b6b5ba42fd9fe40.jpg",
            },
            {
              size: "large",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/a0948793c77f4ac79b6b5ba42fd9fe40.jpg",
            },
            {
              size: "extralarge",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/a0948793c77f4ac79b6b5ba42fd9fe40.jpg",
            },
          ],
          mbid: "00f2ce2c-081f-3f5f-8184-cebe5c539241",
          album: {
            mbid: "0d30f895-392e-39fd-b47e-e2108d8e8190",
            "#text": "The Acoustic Verses",
          },
          name: "The Burden Is Mine... Alone",
          url: "https://www.last.fm/music/Green+Carnation/_/The+Burden+Is+Mine...+Alone",
          date: {
            uts: "1713407121",
            "#text": "18 Apr 2024, 02:25",
          },
        },
        {
          artist: {
            mbid: "f7c65346-9631-4220-9188-5e90baae58d5",
            "#text": "Pain of Salvation",
          },
          streamable: "0",
          image: [
            {
              size: "small",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/87012ab55ac7ebec9a8432ac90c555db.jpg",
            },
            {
              size: "medium",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/87012ab55ac7ebec9a8432ac90c555db.jpg",
            },
            {
              size: "large",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/87012ab55ac7ebec9a8432ac90c555db.jpg",
            },
            {
              size: "extralarge",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/87012ab55ac7ebec9a8432ac90c555db.jpg",
            },
          ],
          mbid: "17f25ed6-39db-4cec-942b-55f2ad2c7de7",
          album: {
            mbid: "",
            "#text": '"BE"',
          },
          name: "Iter Impius",
          url: "https://www.last.fm/music/Pain+of+Salvation/_/Iter+Impius",
          date: {
            uts: "1713406409",
            "#text": "18 Apr 2024, 02:13",
          },
        },
        {
          artist: {
            mbid: "f27ec8db-af05-4f36-916e-3d57f91ecf5e",
            "#text": "Michael Jackson",
          },
          streamable: "0",
          image: [
            {
              size: "small",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/b366cff64b1e4757c7f64e117142baa5.jpg",
            },
            {
              size: "medium",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/b366cff64b1e4757c7f64e117142baa5.jpg",
            },
            {
              size: "large",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/b366cff64b1e4757c7f64e117142baa5.jpg",
            },
            {
              size: "extralarge",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/b366cff64b1e4757c7f64e117142baa5.jpg",
            },
          ],
          mbid: "2043f3c8-2302-4ff6-95af-3361b11ed7b5",
          album: {
            mbid: "11628a0e-99ad-433b-9259-6de49e72ca24",
            "#text": "XSCAPE",
          },
          name: "Chicago (original version)",
          url: "https://www.last.fm/music/Michael+Jackson/_/Chicago+(original+version)",
          date: {
            uts: "1713275573",
            "#text": "16 Apr 2024, 13:52",
          },
        },
        {
          artist: {
            mbid: "f27ec8db-af05-4f36-916e-3d57f91ecf5e",
            "#text": "Michael Jackson",
          },
          streamable: "0",
          image: [
            {
              size: "small",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/b366cff64b1e4757c7f64e117142baa5.jpg",
            },
            {
              size: "medium",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/b366cff64b1e4757c7f64e117142baa5.jpg",
            },
            {
              size: "large",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/b366cff64b1e4757c7f64e117142baa5.jpg",
            },
            {
              size: "extralarge",
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/b366cff64b1e4757c7f64e117142baa5.jpg",
            },
          ],
          mbid: "0ea26db9-96eb-4a46-ad39-6da058625655",
          album: {
            mbid: "11628a0e-99ad-433b-9259-6de49e72ca24",
            "#text": "XSCAPE",
          },
          name: "Do You Know Where Your Children Are (original version)",
          url: "https://www.last.fm/music/Michael+Jackson/_/Do+You+Know+Where+Your+Children+Are+(original+version)",
          date: {
            uts: "1713274626",
            "#text": "16 Apr 2024, 13:37",
          },
        },
      ],
      "@attr": {
        user: "rhamses",
        totalPages: "9441",
        page: "1",
        perPage: "6",
        total: "56642",
      },
    },
  };
  const {
    recenttracks: { track: tracks },
  } = response;
  const result = [];
  for (const track of tracks) {
    const title = track.name;
    const image = track.image.find((img) => img.size === "large")?.["#text"];
    const type = track.artist["#text"];
    const url = track.url;
    result.push({ title, image, type, url });
  }
  return result;
};

const recentPodcast = () => {
  const responsePodAuth = {
    email: "rhamses.soares@gmail.com",
    uuid: "873b23f0-3ba1-4fd6-8389-063a653ce450",
    isNew: false,
    accessToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYzp0b2tlblR5cGUiOiJBQ0NFU1MiLCJwYzpwcm92aWRlciI6IlBPQ0tFVF9DQVNUUyIsInBjOnV1aWQiOiI4NzNiMjNmMC0zYmExLTRmZDYtODM4OS0wNjNhNjUzY2U0NTAiLCJzY29wZXMiOlsid2VicGxheWVyIl0sImp0aSI6IjhiOTdjNTE4LTQyODgtNDJmMy04YmMzLWNkODFiYzQ1MjNjZSIsImlhdCI6MTcxMzQ3NzU1OSwiZXhwIjoxNzEzNDgxMTU5LCJpc3MiOiJodHRwczovL2FwaS5wb2NrZXRjYXN0cy5jb20iLCJzdWIiOiI4NzNiMjNmMC0zYmExLTRmZDYtODM4OS0wNjNhNjUzY2U0NTAifQ.--Qclr6rVwKgO1Dp6lE-Eg7hL30S_g8kZ-of4vhG4Fo",
    tokenType: "Bearer",
    expiresIn: 3600,
    refreshToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYzp0b2tlblR5cGUiOiJSRUZSRVNIIiwicGM6cHJvdmlkZXIiOiJQT0NLRVRfQ0FTVFMiLCJwYzp1dWlkIjoiODczYjIzZjAtM2JhMS00ZmQ2LTgzODktMDYzYTY1M2NlNDUwIiwic2NvcGVzIjpbIndlYnBsYXllciJdLCJqdGkiOiIyNmU2NTMwMy05YWZhLTRjYzUtYTM4Yi1hN2JiZWY1MmQwY2EiLCJpYXQiOjE3MDk3MzUyMTEsImV4cCI6MTc0MTI3MTIxMSwiaXNzIjoiaHR0cHM6Ly9hcGkucG9ja2V0Y2FzdHMuY29tIiwic3ViIjoiODczYjIzZjAtM2JhMS00ZmQ2LTgzODktMDYzYTY1M2NlNDUwIn0.uHM3P76EVjSgIGw_1wnbnFyZDYRQC65hfFzn_jIUk-s",
  };
  const { accessToken } = responsePodAuth;
  console.log("accessToken", accessToken);
  const responsePodList = {
    podcasts: [
      {
        uuid: "046f9e00-a81a-0131-c656-723c91aeae46",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "The Tim Ferriss Show",
        author: "Tim Ferriss: Bestselling Author, Human Guinea Pig",
        description:
          'Tim Ferriss is a self-experimenter and bestselling author, best known for The 4-Hour Workweek, which has been translated into 40+ languages.  Newsweek calls him "the world\'s best human guinea pig," and The New York Times calls him "a cross between Jack Welch and a Buddhist monk."  In this show, he deconstructs world-class performers from eclectic areas (investing, chess, pro sports, etc.), digging deep to find the tools, tactics, and tricks that listeners can use.',
        url: "https://tim.blog/podcast",
        lastEpisodePublished: "2024-04-10T18:04:45Z",
        unplayed: true,
        lastEpisodeUuid: "cfacda9a-2257-494e-842d-d043900c7743",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 30,
        dateAdded: "2018-08-07T03:06:04Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "04e26f90-0a37-0137-f265-1d245fc5f9cf",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Saxophone Academy",
        author: "Wally Wallace",
        description:
          "Dr. Wally Wallace and Susan Fancher discuss creative strategies for saxophone performance and pedagogy.",
        url: "https://saxacademy.podbean.com",
        lastEpisodePublished: "2024-03-29T14:23:57Z",
        unplayed: true,
        lastEpisodeUuid: "7ed81093-a909-4c1b-a808-9a27af74a8c7",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 67,
        dateAdded: "2024-03-04T12:13:59.132Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-07T22:33:34.202Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-07T22:33:34.202Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "052df5e0-72b8-012f-1d57-525400c11844",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "TED Radio Hour",
        author: "NPR",
        description:
          "Exploring the biggest questions of our time with the help of the world's greatest thinkers. Host Manoush Zomorodi inspires us to learn more about the world, our communities, and most importantly, ourselves.Get more brainy miscellany with TED Radio Hour+. Your subscription supports the show and unlocks a sponsor-free feed. Learn more at plus.npr.org/ted",
        url: "https://www.npr.org/podcasts/510298/ted-radio-hour",
        lastEpisodePublished: "2024-04-12T13:23:47Z",
        unplayed: true,
        lastEpisodeUuid: "3e86c0c9-97f3-4dbb-8a2d-1ca588650a1e",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 15,
        dateAdded: "2016-07-05T04:51:35Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-07T22:33:34.202Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-07T22:33:34.202Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "06120e50-92a3-0130-1089-723c91aeae46",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Podcasts do Dragões de Garagem",
        author: "Dragões de Garagem",
        description:
          "O Dragões de Garagem é um podcast de divulgação científica criado em 2012. Falamos de ciência de forma natural, incentivando o pensamento crítico e a curiosidade dos ouvintes. Nossa missão é divulgar ciência de forma abrangente e interessante, mostrando a importância desse corpo de conhecimento em nosso dia-a-dia social e profissional.",
        url: "https://dragoesdegaragem.com/",
        lastEpisodePublished: "2024-04-09T03:01:10Z",
        unplayed: true,
        lastEpisodeUuid: "36c9fc61-f64b-4afc-8c07-6de1440cb4df",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 32,
        dateAdded: "2020-10-16T14:57:44.457Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-07T22:33:34.202Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-07T22:33:34.202Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "07e799d0-ade0-013a-d8cd-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Better Sax Podcast",
        author: "with Jay Metcalf",
        description:
          "As the founder of BetterSax.com Jay’s mission is to help developing saxophone players break away from traditional music learning methods and discover a more efficient, practical and fun way to become a Better Sax player.\n\nThe Better Sax YouTube channel’s videos have been watched by millions and thousands of students have made meaningful progress on their instrument thanks to Better Sax courses.",
        url: "https://bettersax.com",
        lastEpisodePublished: "2024-03-29T13:00:21Z",
        unplayed: true,
        lastEpisodeUuid: "46afd325-fe6b-4663-9b0f-0fd93feb2285",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 58,
        dateAdded: "2024-03-04T12:14:00.170Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: false,
          },
          autoSkipLast: {
            value: 0,
            changed: false,
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "08f71ae0-23eb-013b-ef4b-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Jazz Backstory",
        author: "Monk Rowe",
        description:
          "The podcast series, Jazz Backstory, is based on the holdings of the Fillius Jazz Archive (https://www.hamilton.edu/campuslife/arts-at-hamilton/jazzarchive) located at Hamilton College (https://www.hamilton.edu/), in Clinton, New York. Established in 1995, and dedicated in 2013 in honor of Milton F. Fillius, Jr. ’44 and Nelma “Nikki” Nenneau Fillius, the Fillius Jazz Archive holds a collection of over 440 videotaped interviews with jazz musicians, arrangers, writers and producers. The wide-ranging collection includes interviews with sidemen, soloists and band leaders who have performed from the 1920s through the present. \n\nJazz Backstory podcast episodes will feature interview excerpts focused on topics inherent to the creative life. Artists, both famous and unsung, relate these tales in their own jazz inflected vocabulary. Original music and commentary from the host help set the tone, both educational and swinging.\n\nMonk Rowe (https://www.monkrowe.com/), creator of the podcast series, Jazz Backstory, and the Joe Williams Director of the Fillius Jazz Archive, conducted the majority of  the interviews and has presented programs about the resource at conferences for the Jazz Education Network, the Music Library Association, and the International Society of Music Educators. Monk co-authored with Romy Britell  the book Jazz Tales From Jazz Legends on Hamilton’s Couper Press and created the edX online course, “Jazz: The Music, The Stories, The Players” in collaboration with members of the Library and Instructional Technology Services at Hamilton College. He is an active performer on saxophone and piano and has composed numerous works for both jazz and classical ensembles.",
        url: "https://rss.com/podcasts/jazz-backstory",
        lastEpisodePublished: "2023-09-05T04:10:13Z",
        unplayed: true,
        lastEpisodeUuid: "80132379-de04-4c54-a6d7-bdbdecdd57d4",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 62,
        dateAdded: "2024-03-04T12:14:23.551Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: false,
          },
          autoSkipLast: {
            value: 0,
            changed: false,
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "0f4c4000-4ad7-0137-f266-1d245fc5f9cf",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Morning Tide with Ted Ramey",
        author: "San Jose Sharks",
        description:
          "A podcast that will feature San Jose Sharks analysis, exclusive interviews and more by Ted Ramey - Bay Area native and life-long Sharks fan. Presented by Coors Light.",
        url: "",
        lastEpisodePublished: "2024-04-14T13:46:00Z",
        unplayed: true,
        lastEpisodeUuid: "727eeacb-cf87-4352-99f0-40893dea4be8",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 3,
        dateAdded: "2019-11-04T18:34:58.904Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "13679b00-9d52-0138-e64e-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "IceCast",
        author: "FN Network",
        description:
          "Acompanhe as últimas notícias de uma das melhores ligas de hockey do mundo: a NHL! Um produto NHL Brasil em parceria com o Fumble na Net.",
        url: "https://www.spreaker.com/podcast/icecast--6073097",
        lastEpisodePublished: "2024-01-08T20:05:30Z",
        unplayed: true,
        lastEpisodeUuid: "0fbffd80-03c7-4d1d-92bc-c685ee9cf60b",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 37,
        dateAdded: "2023-10-09T13:23:24.460Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "13d647d0-86a6-0139-34d7-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Tic-Tac-Gol!",
        author: "Tic-Tac-Gol!",
        description:
          "O primeiro podcast sobre hóquei feito só por mulheres do Brasil hoje conta com uma equipe maior e disposta a trazer todas as atualizações sobre as melhores ligas de hóquei no gelo de um jeito dinâmico, fluído e divertido!",
        url: "https://tictacgol.com",
        lastEpisodePublished: "2024-04-15T13:13:03Z",
        unplayed: true,
        lastEpisodeUuid: "7968afd3-0612-463a-a32c-e33773760882",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 2,
        dateAdded: "2023-10-09T04:30:44.484Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "142b08c0-ed76-0135-c25e-7d73a919276a",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Akimbo: A Podcast from Seth Godin",
        author: "Seth Godin",
        description:
          "Akimbo is an ancient word, from the bend in the river or the bend in an archer's bow. It's become a symbol for strength, a posture of possibility, the idea that when we stand tall, arms bent, looking right at it, we can make a difference.Akimbo's a podcast about our culture and about how we can change it. About seeing what's happening and choosing to do something.The culture is real, but it can be changed. You can bend it. Hosted on Acast. See acast.com/privacy for more information.",
        url: "www.akimbo.link",
        lastEpisodePublished: "2024-04-10T07:00:49Z",
        unplayed: true,
        lastEpisodeUuid: "ee9984f8-d053-45cc-8928-85a9ae4bf039",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 27,
        dateAdded: "2018-11-01T01:54:53Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "14a7fa50-7801-012f-20a5-525400c11844",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Frango Fino",
        author: "Frango Fino",
        description:
          "Toda terça-feira, Doug Bezerra, Doug Lira e Rafa Louzada se juntam para te entreter com assuntos do cotidiano, explorar curiosidades do mundo e competir em jogos originais com nomes desnecessariamente gigantes e autoexplicativos.",
        url: "https://www.spreaker.com/show/frango-fino",
        lastEpisodePublished: "2024-04-10T02:25:25Z",
        unplayed: true,
        lastEpisodeUuid: "609230d6-17c9-463d-8b0b-dbc6afee4c3a",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 29,
        dateAdded: "2023-05-14T14:46:35.854Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "15a34210-1cf1-0136-c266-7d73a919276a",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "TED en Español",
        author: "TED",
        description:
          "¿Cuál es la relación entre el amor y las matemáticas? ¿Cómo construye su identidad un inmigrante? ¿Nos reemplazará la inteligencia artificial en nuestros trabajos? ¿Pueden los emprendedores mejorar la educación y la salud de todos? En el podcast de TED en Español te invitamos a hacernos este tipo de preguntas, a escuchar ideas provocadoras y a desarrollar nuevas maneras de pensar. Cada semana escucharemos una charla TED de los principales líderes y creadores del mundo. Con la guía de Gerry Garbulsky, el curador de TED en Español, exploramos el universo de ideas en nuestro idioma. Hosted on Acast. See acast.com/privacy for more information.",
        url: "https://www.ted.com/read/ted-podcasts/ted-en-espanol",
        lastEpisodePublished: "2023-02-23T11:00:31Z",
        unplayed: true,
        lastEpisodeUuid: "361cf235-f51b-49d2-a5a5-d5d09a9b4eb8",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 49,
        dateAdded: "2018-05-27T23:17:24Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "17b57090-9275-0135-9d01-5bb073f92b78",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Le Support Athlétique: A show about the Montreal Canadiens",
        author: "The Athletic",
        description:
          "Arpon Basu bring you the latest news and insights about the Montreal Canadiens, all season long",
        url: "http://soundcloud.com/user-79723608",
        lastEpisodePublished: "2023-12-19T23:15:30Z",
        unplayed: true,
        lastEpisodeUuid: "1d78d5f3-6dcb-4754-951e-973c0612317f",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 38,
        dateAdded: "2019-03-08T05:54:53Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "1cefc690-9322-012f-3516-525400c11844",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Pelada na Net",
        author: "Pelada na Net",
        description:
          "O PELADA NA NET É UM PODCAST PRODUZIDO ENTRE AMIGOS. Criado em 2012, fala de futebol à sua maneira –\n\nenaltecendo a diversão e a emoção de torcer enquanto desencoraja o fanatismo e a rivalidade.\n\nSIM, FALAMOS PALAVRÃO PRA CARALHO - MAS SEM APELAÇÃO. O próprio nome é um trocadilho com nossa falta de\n\nvergonha e excesso de empolgação. Acreditamos que o limite do humor é quando deixa de ser humor (e torna-se\n\nagressão ou preconceito). Portanto, todas as vezes que nos exaltamos, fazemos com a a liberdade e intimidade que\n\ntemos com a equipe e nosso público.\n\nO PROGRAMA VAI AO AR TODAS AS SEXTAS-FEIRAS. Entretanto, normalmente lançamos o episódio na noite de quintafeira\n\nou no início da madrugada da sexta. Entregar cada episódio, com qualidade, o mais cedo possível é um\n\ncompromisso que fazemos com os nossos ouvintes.\n\nO FUTEBOL NÃO ESPERA NINGUÉM! É um esporte dinâmico dentro e fora do gramado. O que hoje é notícia, se torna\n\nbanal amanhã, e não entregamos aos nossos ouvintes um programa ultrapassado ou irrelevante. Por isso, a gravação,\n\na edição e a própria publicação acontecem no mesmo dia.",
        url: "http://peladananet.com.br/",
        lastEpisodePublished: "2024-04-11T12:39:11Z",
        unplayed: false,
        lastEpisodeUuid: "ed7329bc-b8a8-427c-a795-816f36d4905a",
        lastEpisodePlayingStatus: 2,
        lastEpisodeArchived: true,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 23,
        dateAdded: "2017-06-30T16:04:52Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: true,
            changed: true,
            modifiedAt: "2024-02-26T22:50:58.248Z",
          },
          playbackSpeed: {
            value: 1.5,
            changed: true,
            modifiedAt: "2024-04-12T18:22:28.035Z",
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: true,
            changed: true,
            modifiedAt: "2024-03-28T14:51:58.850Z",
          },
        },
      },
      {
        uuid: "20152cf0-7d63-0136-7b90-27f978dac4db",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Talks at Google",
        author: "Talks at Google",
        description:
          "The Talks at Google podcast - where great minds meet. \n\nTalks at Google brings the world’s most influential thinkers, creators, makers, and doers all to one place. Every episode is taken from a video that can be seen at YouTube.com/TalksAtGoogle.\n\nDISCLAIMER: The views or opinions expressed by the guest speakers are solely their own and do not necessarily represent the views or opinions of Google, Inc. The comments on this channel belong only to the person who posted them. We do, however, reserve the right to remove off-topic or inappropriate comments.\n\nAlso, the materials presented in the episodes are licensed to Google by the speaker(s). Google does not endorse any products or technology presented by the guest speakers.",
        url: "http://talksatgoogle.libsyn.com/",
        lastEpisodePublished: "2024-04-12T07:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "5731ec44-3fff-463f-9ecc-c04aa1c5a7d0",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 16,
        dateAdded: "2018-10-17T03:06:02Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "22dcfa30-2714-0137-f265-1d245fc5f9cf",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "The Staff and Graph Podcast",
        author: "The Staff and Graph Podcast",
        description:
          "Sports Reporter Mike Stephens & former NHL coach Rachel Doerrie break down the finer points of hockey tactics and statistics in a fun, easily-digestible manner.",
        url: "https://anchor.fm/staff-graph",
        lastEpisodePublished: "2024-04-12T04:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "4b21fdb7-76dd-4c1a-99cd-cb58f215fcf4",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 19,
        dateAdded: "2019-12-01T05:27:51.858Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "2743d720-0edf-0133-2204-059c869cc4eb",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Software Engineering Daily",
        author: "Software Engineering Daily",
        description: "Technical interviews about software topics.",
        url: "https://softwareengineeringdaily.com/",
        lastEpisodePublished: "2024-04-11T09:00:39Z",
        unplayed: true,
        lastEpisodeUuid: "d6208ede-961b-41ac-9249-edd6b55c7585",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 22,
        dateAdded: "2018-08-03T02:53:29Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: true,
            modifiedAt: "2024-03-04T12:15:22.626Z",
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "2f31dfb0-2249-0132-b5ae-5f4c86fd3263",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Serial",
        author: "Serial Productions & The New York Times",
        description:
          "Serial returns with a history of Guantánamo told by people who lived through key moments in Guantánamo’s evolution, who know things the rest of us don’t about what it’s like to be caught inside an improvised justice system.\n\nSerial Productions makes narrative podcasts whose quality and innovation transformed the medium. “Serial” began in 2014 as a spinoff of the public radio show “This American Life.” In 2020, we joined the New York Times Company. Our shows have reached many millions of listeners and have won nearly every major journalism award for audio, including the first-ever Peabody Award given to a podcast.\n\nSubscribe to our newsletter for the latest Serial Productions news: https://bit.ly/3FIOJj9\n\nHave thoughts or feedback on our shows? Email us at serialshows@nytimes.com",
        url: "https://serialpodcast.org",
        lastEpisodePublished: "2024-04-11T10:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "9c9dd5eb-d5ee-4d7f-81cd-9389e8c85003",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 14,
        dateAdded: "2016-02-29T14:13:08Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "2f999d00-50ba-013b-f1bd-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "SAX BITES",
        author: "Emma & Vincent",
        description:
          "Saxophone players unite! It’s time to get really bloody good at the saxophone, just five minutes at a time. \nJoin Dr Emma Di Marco, Australian saxophonist and music educator, for a quick five minute saxophone lesson where she shares the best tips, tricks, ideas, and practice strategies to make you the best saxophone player you can be. Episodes drop on Saturdays. What can you expect from an episode? Emma will share her insights into a new topic or pain point for saxophonists leaving you with strategies you can put IMMEDIATELY into your own musical practice. These bite-sized episodes will leave you more motivated and excited to play the saxophone than ever and will benefit students, teachers, and enthusiasts alike. \n\nHave a question for Emma? \nSubmit it via Instagram (@emmaldm1), TikTok (@emmaldm1), or email the team at hello@emmadimarco.com",
        url: "https://saxbites.podbean.com",
        lastEpisodePublished: "2024-03-01T02:36:00Z",
        unplayed: true,
        lastEpisodeUuid: "d9bd277c-59cd-4e69-a465-b535584c1bd3",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 64,
        dateAdded: "2024-03-04T12:14:42.358Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "31b49860-b8fd-012f-50d0-525400c11844",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Progcast",
        author: "Progcast",
        description:
          "A Sua Dose Semanal de Rock Progressivo está de volta para nunca mais desaparecer. Escute as opiniões que compartilhamos sobre os demais temas que envolvem um dos genêros musicais mais importantes do Rock. E opine também através de emails, comentários ou mensagem de voz.",
        url: "http://progcast.com.br/categoria/progcast/",
        lastEpisodePublished: "2013-07-15T05:45:28Z",
        unplayed: false,
        lastEpisodeUuid: "29893250-cf40-0130-391e-723c91aeae46",
        lastEpisodePlayingStatus: 3,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 56,
        dateAdded: "2015-03-21T06:58:20Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "3608acf0-66e3-0130-f487-723c91aeae46",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Pesquisa Brasil",
        author: "Revista Pesquisa FAPESP / Rádio USP FM",
        description:
          "Pesquisa Brasil vai ao ar todas as sextas-feiras às 13h, sábados às 18h e quintas-feiras às 2h pela Rádio USP e todas as segundas feiras às 13h, pela Rádio Unicamp.",
        url: "https://revistapesquisa.fapesp.br/category/online/pesquisa-brasil-podcast/",
        lastEpisodePublished: "2024-04-13T16:58:12Z",
        unplayed: true,
        lastEpisodeUuid: "be280397-f975-4f4c-945d-497ce456fb3a",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 5,
        dateAdded: "2019-06-07T04:07:57Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "38d9bee0-078f-0135-ec79-4114446340cb",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Masters of Scale",
        author: "WaitWhat",
        description:
          "Award-winning business advice from Silicon Valley and beyond. Iconic CEOs, from Nike to Netflix, Starbucks to Slack, share the strategies that helped them grow from startups into global brands — and to weather crisis when it strikes. On each episode of our classic format, founding host Reid Hoffman — LinkedIn cofounder, Greylock partner and legendary Silicon Valley investor — and a stellar lineup of guest hosts prove unconventional theories about how businesses scale. Guests share their stories of entrepreneurship, leadership, strategy, management, fundraising. You’ll hear the human journey, too — failures, setbacks, learnings. From our Rapid Response format, you can expect real-time wisdom from business leaders in fast-changing situations. Hosted by Bob Safian, past editor-in-chief of Fast Company, these episodes tackle crisis response, rebuilding, diversity & inclusion, leadership change and much more. ",
        url: "http://www.mastersofscale.com",
        lastEpisodePublished: "2024-04-11T09:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "4e22a9ca-19e2-406e-9303-1fe32ca21bab",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 33,
        dateAdded: "2018-08-06T14:05:39Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "4001a140-27e0-0139-32d0-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "How To Play The Sax - Saxophone Podcast",
        author: "Matthew from HowToPlayTheSax.com",
        description:
          "Have Fun.  Play Saxophone.  Be Awesome.  Repeat.  The HowToPlayTheSax.com Website, Youtube Channel and Saxophone Podcast are dedicated to helping YOU become a better saxophonist.  My name is Matthew and I help beginner saxophone players of all ages learn how to play their favourite Rock, Soul, Funk and Blues songs without reading music – quickly and easily – with my online saxophone lessons via the Membership inside HowToPlayTheSax.com, via my Blog, via my Youtube Channel and via this Saxophone Podcast !  Whether it’s impressing your friends, or improving your own bedroom warrior chops, getting up to speed to join a band, or simply helping you play the music that YOU want to play, I am here to help your saxophone dreams become a reality.  If you want to learn how to play the saxophone, you’ve come to the right place 🙂  I can provide you with the guidance, structure, organisation, curation, expertise and skills you need to be the saxophone player that you have always wanted to be.  And we’ll have some fun along the way !  I created this Saxophone Podcast (and Website and Youtube Channel) to be the resources that I wish I had when I was learning how to play the saxophone.  Let's learn how to play the sax !  Thanks, Matthew from https://HowToPlayTheSax.com",
        url: "https://HowToPlayTheSax.com",
        lastEpisodePublished: "2022-09-21T22:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "d26614d8-1be8-49f2-84a8-88c68c0c1aab",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 60,
        dateAdded: "2024-03-04T12:14:57.503Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: false,
          },
          autoSkipLast: {
            value: 0,
            changed: false,
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "43d27cd0-11ba-0134-a447-13e6b3913b15",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Inside The Saxophone Mind",
        author: "Inside The Saxophone Mind",
        description: "Learn From The Best",
        url: "http://insidethesaxophonemind.com",
        lastEpisodePublished: "2016-07-06T21:00:07Z",
        unplayed: true,
        lastEpisodeUuid: "93c802a0-25f0-0134-2f17-737688e4d168",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 61,
        dateAdded: "2024-03-04T12:15:19.204Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: false,
          },
          autoSkipLast: {
            value: 0,
            changed: false,
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "44013480-1acd-012e-004e-00163e1b201c",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Best. Saxophone. Podcast. Ever.",
        author: "Best. Saxophone. Website. Ever.",
        description:
          "The best saxophone tips, techniques, reviews, overviews, interviews, and just about anything else for the saxophone player looking to improve their craft and have a great time doing it.",
        url: "https://bestsaxophonewebsiteever.com",
        lastEpisodePublished: "2011-10-12T17:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "644030d0-d827-012e-d9dc-525400c11844",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 71,
        dateAdded: "2024-03-04T12:15:22.275Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: false,
          },
          autoSkipLast: {
            value: 0,
            changed: false,
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "4977ff30-86aa-013c-9fc9-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Dentro da Minha Cabeça",
        author: "Príncipe Vidane",
        description:
          "Toda segunda-feira, Príncipe Vidane que recebe um convidado num passeio aleatório dentro da própria cabeça, pra debater um assunto que talvez nem devesse ser debatido. Por @principevidane. Sigam @cabecadovidane nas redes sociais!",
        url: "http://dentrodaminhacabeca.com.br/",
        lastEpisodePublished: "2024-04-15T12:15:32Z",
        unplayed: true,
        lastEpisodeUuid: "33bdd0b7-8df4-4502-95e2-5d538241b1d1",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 1,
        dateAdded: "2024-01-04T17:08:53.872Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "4b917750-c034-0135-9e60-5bb073f92b78",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Pizza de Dados",
        author: "pizzadedados",
        description:
          "O primeiro e mais querido podcast Brasileiro sobre ciência de dados.",
        url: "https://podcast.pizzadedados.com",
        lastEpisodePublished: "2023-09-27T13:38:48Z",
        unplayed: true,
        lastEpisodeUuid: "2275275e-822d-473c-b1a4-4c7055c3455a",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 43,
        dateAdded: "2019-06-07T12:12:14Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "4e06c6b0-db55-0136-3249-08b04944ede4",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Ciência USP - USP",
        author: "Jornal da USP",
        description:
          "Descobertas científicas, resultados de pesquisas, assuntos do momento e debates que chacoalham o mundo da ciência. O podcast é uma produção da editoria de Ciências do Jornal da USP.",
        url: "https://jornal.usp.br/series/cienciausp/",
        lastEpisodePublished: "2023-05-30T11:00:41Z",
        unplayed: true,
        lastEpisodeUuid: "7b4db5e6-a4d6-423c-bb71-07bacad0a385",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 47,
        dateAdded: "2019-06-07T04:08:39Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "4f93a750-1f38-013a-d5d0-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Tortinha de Climão",
        author: "Dragões de Garagem",
        description:
          "Mudanças climáticas, aquecimento global, aumento de temperatura, desastres naturais... há quem ache que esses são temas da moda, mas na verdade eles são temas urgentes que afetam nossos dias e estarão cada vez mais presentes em nossas conversas. O Tortinha de Climão é um podcast para descomplicar conceitos, explicar problemas e discutir soluções, de uma forma simples, descontraída e rápida. Em cada episódio vamos conversar sobre um conceito importante e aprender um pouquinho mais sobre ciências climáticas.",
        url: "https://dragoesdegaragem.com/tortinhadeclimao/",
        lastEpisodePublished: "2024-04-10T16:56:06Z",
        unplayed: true,
        lastEpisodeUuid: "97e72221-4960-40a9-9b00-8bfa5e7c9fa9",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 36,
        dateAdded: "2021-12-22T04:08:11.486Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "4ffe8280-7dda-013a-d7cf-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Saxophone Famous Devotional Songs",
        author: "Ve Ve",
        description:
          "Amazing and Soothing Beautiful Saxophone Carnatic and Old Songs Collection",
        url: "https://hubhopper.com/podcast/saxophone-famous-devotional-songs/391934",
        lastEpisodePublished: "2022-03-24T11:02:06Z",
        unplayed: true,
        lastEpisodeUuid: "6e28d283-4ecb-462b-bdcc-0b40d1b7d15d",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 68,
        dateAdded: "2024-03-04T12:14:59.128Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "583b5640-cf1c-013a-d97a-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Desce a Letra Show",
        author: "Desce a Letra Show",
        description:
          "Cauê Moura, Load Comics e Bulbasauro comentando as notícias mais quentes da semana.",
        url: "http://youtube.com/descealetrashow",
        lastEpisodePublished: "2024-04-15T09:54:49Z",
        unplayed: true,
        lastEpisodeUuid: "68d914ca-d4d9-49e6-96ed-197e198388e4",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 9,
        dateAdded: "2022-06-17T23:32:04.332Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: true,
            changed: true,
            modifiedAt: "2024-02-26T21:12:45.902Z",
          },
          playbackSpeed: {
            value: 1.8,
            changed: true,
            modifiedAt: "2024-02-28T22:33:09.015Z",
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "5d674eb0-8ff8-0132-efd9-5f4c86fd3263",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "The Mortified Podcast",
        author: "Mortified Media and Radiotopia",
        description:
          "The Mortified Podcast is a storytelling series where adults share the embarrassing things they created as kids—diaries, letters, lyrics & beyond—in front of total strangers. PS: It totally likes you. The Mortified Podcast is a proud member of Radiotopia, from PRX. Learn more at radiotopia.fm.\n\nPodcast produced by Neil Katcher and David Nadelberg. Stage show created by David Nadelberg. Learn more: GetMortified.com",
        url: "http://GetMortified.com/",
        lastEpisodePublished: "2024-04-14T07:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "15e58479-ecf1-4ccc-913c-958e8362d940",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 42,
        dateAdded: "2018-06-28T16:17:49Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "64c35c30-7fd5-0139-34b2-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Saxofonese",
        author: "Otávio DelleVedove",
        description:
          "O saxofone como centro de uma conversa que se extende aos mais diversos assuntos da vivência musical, buscando compartilhar as experiências que este instrumento maravilhoso propicia em seu estudo e em sua prática, para assim fortalecer toda a comunidade do saxofone, desde entusiastas, até profissionais. Este é o SAXOFONESE, o podcast mais saxofonístico da internet.",
        url: "https://www.facebook.com/dellevedove",
        lastEpisodePublished: "2021-09-17T00:25:39Z",
        unplayed: true,
        lastEpisodeUuid: "94ac179d-5cb6-450b-8449-fd6e40755892",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 66,
        dateAdded: "2024-03-04T12:14:04.368Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "6a4c17c0-d9ef-013a-d9c3-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "projeto Querino",
        author: "Tiago Rogero e Rádio Novelo",
        description:
          "Podcast do projeto Querino. Em oito episódios, a série mostra como a História explica o Brasil de hoje. Uma história que talvez você ainda não tenha ouvido, lido ou visto. Idealizado e apresentado pelo jornalista Tiago Rogero, o podcast é uma produção da Rádio Novelo.\n\nO projeto Querino é apoiado pelo Instituto Ibirapitanga.\n\nPara conteúdos adicionais, acesse: http://projetoquerino.com.br/",
        url: "https://www.spreaker.com/show/projeto-querino",
        lastEpisodePublished: "2022-11-08T03:04:00Z",
        unplayed: true,
        lastEpisodeUuid: "57c81e4e-621c-48bd-b225-5af3ae69a9f9",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 50,
        dateAdded: "2022-11-04T18:00:38.990Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "711b0da0-07a3-013c-f599-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "McCartney: A Life in Lyrics",
        author: "iHeartPodcasts and Pushkin Industries",
        description:
          "McCartney: A Life in Lyrics offers listeners the opportunity to sit in on conversations between Paul McCartney and poet Paul Muldoon dissecting the people, experiences, and art that inspired McCartney’s songwriting. These conversations were held during the past several years as the two collaborated on the award winning book, “The Lyrics: 1965 to Present.” Over two seasons and 24 episodes of “McCartney: A Life in Lyrics”, you’ll hear a combination master class, memoir, and improvised journey with one of the most beloved figures in popular music. Each episode focuses on one song from McCartney’s iconic catalog – spanning early Beatles through his solo work. Season 2 premieres on February 7th.\n“McCartney: A Life in Lyrics” is a co-production between iHeart Media, MPL and Pushkin Industries.\nCover Portrait © 1967 Paul McCartney / Photographer: Linda McCartney",
        url: "https://www.pushkin.fm/",
        lastEpisodePublished: "2024-04-10T04:01:00Z",
        unplayed: true,
        lastEpisodeUuid: "100587bb-a6f8-4188-8c37-3fe8de372661",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 28,
        dateAdded: "2023-10-11T14:51:16.415Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "718dfa90-b6a9-0135-9e60-5bb073f92b78",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Duolingo Spanish Podcast",
        author: "Duolingo",
        description:
          "True stories for English speakers learning Spanish. From the makers of Duolingo, the most popular language-learning app, comes a new podcast that delivers fascinating real-life stories in easy-to-understand Spanish with English narration. These are not language lessons; they’re life lessons through language. Hosted by Martina Castro, co-founder of NPR’s Radio Ambulante.",
        url: "https://podcast.duolingo.com/spanish",
        lastEpisodePublished: "2024-02-29T01:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "97924bc5-ba97-4fb0-8693-08227d20af76",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 24,
        dateAdded: "2018-07-17T14:44:08Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "73c21bb0-17e5-0136-c266-7d73a919276a",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "The Barry Sax Show",
        author: "Barry Cockcroft",
        description:
          "Barry Cockcroft is your host on this podcast with interviews featuring guest saxophonists from around the world. In this show, he explores the stories behind these great musicians with telling insights into how they got started and the ongoing development of their careers. Discover the highlights of touring the musical world, unconventional ways to learn the saxophone, teaching styles from different countries and tips on maintaining a long and healthy career. The Barry Sax Show features a new guest each week and is supported by show notes, useful links and a full-text transcript of each episode.",
        url: "https://barrysax.com",
        lastEpisodePublished: "2020-05-25T11:08:55Z",
        unplayed: true,
        lastEpisodeUuid: "268df266-aa36-4fc7-a24d-12ce1ef78386",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 57,
        dateAdded: "2024-03-04T12:15:11.938Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: false,
          },
          autoSkipLast: {
            value: 0,
            changed: false,
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "73c4cd70-7e9a-013a-d7d5-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Saxophone Journal",
        author: "Sean Imboden",
        description:
          "Saxophonist Sean Imboden shares his thoughts on music, saxophone, practicing, being a musician, and more in an extended stream-of-consciousness style. Say hello at www.seanimboden.com.",
        url: "https://www.seanimboden.com",
        lastEpisodePublished: "2023-05-02T19:08:54Z",
        unplayed: true,
        lastEpisodeUuid: "606c4780-2505-4072-a05c-23e02274a63a",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 72,
        dateAdded: "2024-03-04T12:14:43.217Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "7622ef30-3f20-0131-77d1-723c91aeae46",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "NerdCast",
        author: "Jovem Nerd",
        description: "O mundo vira piada no Jovem Nerd",
        url: "https://jovemnerd.com.br",
        lastEpisodePublished: "2024-04-13T11:50:54Z",
        unplayed: true,
        lastEpisodeUuid: "29f919fc-1d0c-4c81-ae79-d009aa81242a",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 6,
        dateAdded: "2014-11-08T04:20:43Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: true,
            changed: true,
            modifiedAt: "2024-02-21T20:15:46.385Z",
          },
          playbackSpeed: {
            value: 1,
            changed: true,
            modifiedAt: "2024-03-10T21:33:49.106Z",
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: true,
            modifiedAt: "2024-03-25T16:14:03.160Z",
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: true,
            changed: true,
            modifiedAt: "2024-03-25T16:14:03.160Z",
          },
        },
      },
      {
        uuid: "82704a00-7520-013b-f27e-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Mau Acompanhado",
        author: "Jovem Nerd",
        description:
          "Com apresentação de Mau Faccio, o Mau Acompanhado vai trazer diversas coberturas sobre os principais eventos da atualidade, desde BBB até a Copa do Mundo.",
        url: "https://admin.jovemnerd.com.br",
        lastEpisodePublished: "2024-04-11T13:13:42Z",
        unplayed: false,
        lastEpisodeUuid: "83793607-7c72-4e49-928b-83768b590018",
        lastEpisodePlayingStatus: 3,
        lastEpisodeArchived: true,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 21,
        dateAdded: "2023-01-16T15:23:10.867Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "84ff3860-9a15-0139-c12c-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "A Quinta Linha",
        author: "NHeLas",
        description:
          "O primeiro e único podcast de hockey na internet (ou pelo menos o único que você precisa ouvir)!\n\nUm podcast NHeLas, site brasileiro especializado em hockey e 100% produzido por mulheres.\n\n(também disponível no Deezer e YouTube)",
        url: "http://nhelas.com",
        lastEpisodePublished: "2022-10-31T09:00:35Z",
        unplayed: false,
        lastEpisodeUuid: "06ed9173-fac4-4a43-9d4e-4bfa16dc4704",
        lastEpisodePlayingStatus: 3,
        lastEpisodeArchived: true,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 51,
        dateAdded: "2023-10-09T04:30:13.226Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "91dc4390-4c46-0133-c356-0d11918ab357",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "The Hockey PDOcast",
        author: "Sportsnet",
        description:
          "A hockey podcast hosted by Dimitri Filipovic that has been regressing to the mean since 2015.",
        url: "https://www.hockeypdocast.com",
        lastEpisodePublished: "2024-04-12T19:41:07Z",
        unplayed: true,
        lastEpisodeUuid: "fbbcf7a7-01ae-4e31-b779-eaf27f24617c",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 20,
        dateAdded: "2017-05-29T04:38:36Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "944eddc0-2696-0130-c969-723c91aeae46",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Still Untitled: The Adam Savage Project",
        author: "Adam Savage, Norman Chan, Will Smith",
        description:
          "Posted on Tuesdays, Norm and Will discuss topics of interest with Adam--nothing is off-limits! Still Untitled covers everything from hot-button issues within the maker community to experiences from Adam's life to questions from the audience. Enjoy!",
        url: "http://www.tested.com/still-untitled-the-adam-savage-project/",
        lastEpisodePublished: "2021-01-15T21:53:32Z",
        unplayed: true,
        lastEpisodeUuid: "3608a043-d5d8-4982-bb2f-12bfd71144eb",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 54,
        dateAdded: "2018-07-25T23:00:14Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "9753ace0-c682-012f-7e89-723c91aeae46",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "FroKnowsPhoto Photography Podcasts",
        author: "FroKnowsPhoto",
        description:
          "Welcome to the FroKnowsPhoto Podcast where we discuss all things Photography. From Nikon to Canon Cameras and all the lenses and accessories for your camera bag.  \n\nIf you are into photography looking to pick up tips, tricks, reviews and our personal views than this is the podcast for you.  \n\nPlease subscribe for the latest episodes.",
        url: "http://froknowsphoto.libsyn.com",
        lastEpisodePublished: "2024-04-12T03:57:00Z",
        unplayed: true,
        lastEpisodeUuid: "cf8a8f57-3117-4aef-9f49-eeebd16bb406",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 18,
        dateAdded: "2023-10-17T14:23:57.345Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "9a5b8a50-f4c1-0136-324d-08b04944ede4",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Saxophone Talk",
        author: "Eastman",
        description:
          "This is Saxophone Talk by Eastman. A show that features many of the prominent saxophonists in the musical scene, with an opportunity to hear their stories, experiences, and challenges that have occurred throughout their musical careers.",
        url: "http://eastmanwinds.com",
        lastEpisodePublished: "2019-01-24T04:04:20Z",
        unplayed: true,
        lastEpisodeUuid: "52222ce9-db09-49cc-8bd5-bbc6763f6060",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 70,
        dateAdded: "2024-03-04T12:15:10.915Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: false,
          },
          autoSkipLast: {
            value: 0,
            changed: false,
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "a0d5a400-6d88-012e-2ecc-00163e1b201c",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Pauta Livre News",
        author: "Pauta Livre News",
        description:
          "Um podcast de humor escrachado, que fez de tudo uma grande piada. Morreu, mas voltou e passa bem!\n\nEnvie seu e-mail para pautalivrenews@gmail.com",
        url: "https://anchor.fm/pautalivrenews",
        lastEpisodePublished: "2023-07-31T22:07:23Z",
        unplayed: false,
        lastEpisodeUuid: "3fca0d5b-63ea-4ad5-8294-78b09d21f0f8",
        lastEpisodePlayingStatus: 3,
        lastEpisodeArchived: true,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 45,
        dateAdded: "2023-08-14T22:11:50.524Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "a15217a0-d40a-0134-ebcf-4114446340cb",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Indie Hackers",
        author: "Courtland Allen and Channing Allen",
        description:
          "Courtland and Channing Allen interview the ambitious indie hackers who are turning their ideas and side projects into profitable online businesses. Explore the latest strategies and tools founders are using to capitalize on new opportunities, escape the 9-to-5 grind, and create their own personal revenue-generating machines. The future is indie!",
        url: "https://www.indiehackers.com",
        lastEpisodePublished: "2023-06-15T19:11:05Z",
        unplayed: true,
        lastEpisodeUuid: "edde66cf-2121-4208-893a-1c91fcc46629",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 46,
        dateAdded: "2019-05-18T02:18:19Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "a2174990-c685-0130-34ac-723c91aeae46",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "The Steve Dangle Podcast",
        author: "sdpn",
        description:
          "Based in Toronto, Steve Dangle, Adam Wylde, and Jesse Blake merge the minutia of hockey conversation with the very best of pop culture.",
        url: "https://sdpn.ca/sdp/",
        lastEpisodePublished: "2024-04-12T21:16:00Z",
        unplayed: false,
        lastEpisodeUuid: "29beab86-38c2-4223-87d2-996a623e8bb8",
        lastEpisodePlayingStatus: 3,
        lastEpisodeArchived: true,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 8,
        dateAdded: "2017-04-25T21:55:56Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: true,
            changed: true,
            modifiedAt: "2024-03-10T22:02:47.590Z",
          },
          playbackSpeed: {
            value: 1.5,
            changed: true,
            modifiedAt: "2024-03-10T22:02:52.562Z",
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: true,
            modifiedAt: "2024-03-10T22:02:52.562Z",
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "a4108800-8554-0138-ee31-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Hoje na Luta",
        author: "Hoje na Luta",
        description:
          "Bom dia! Agora os áudios que nos encontram pelas manhãs com alguns fatos e acontecimentos históricos estarão permanentemente gravados neste podcast.\n\nReceba os áudios todos os dias no seu whatsapp no grupo: https://chat.whatsapp.com/HmhqEKLookG5UQyxdWj7RV",
        url: "https://mtst.org/",
        lastEpisodePublished: "2024-04-13T17:09:12Z",
        unplayed: true,
        lastEpisodeUuid: "521c3313-25ea-4cff-9d2d-c77abfa89624",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 11,
        dateAdded: "2023-01-29T15:39:12.790Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "b1a7b6c0-8f00-0138-ee5f-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Sax Reel",
        author: "Jonathan Kierspe",
        description:
          "Welcome to Sax Reel, the podcast that gives you the inside scoop on your favorite saxophone loving musicians! Each episode, I will have a new guest in to share fun stories about their past, talk about their experiences as musicians and educators, and to share any exciting projects they are working on!",
        url: "jkierspe.com",
        lastEpisodePublished: "2021-10-27T14:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "6aad5590-cbf2-4418-865d-a78425d354c1",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 65,
        dateAdded: "2024-03-04T12:15:00.744Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: false,
          },
          autoSkipLast: {
            value: 0,
            changed: false,
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "b75e8f10-31e2-0135-52f9-452518e2d253",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "IRL: Online Life is Real Life",
        author: "Mozilla",
        description:
          "How does artificial intelligence change when people — not profit — truly come first? Join IRL’s host Bridget Todd, as she meets people around the world building responsible alternatives to the tech that’s changing how we work, communicate, and even listen to music.",
        url: "http://irlpodcast.org/",
        lastEpisodePublished: "2023-12-05T05:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "0a3b6867-0687-4cc4-9175-f57ea1a9c9bd",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 41,
        dateAdded: "2017-06-22T19:02:47Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "b9b05d90-d8cc-0132-0349-059c869cc4eb",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Xadrez Verbal",
        author: "Central 3 Podcasts",
        description:
          "Você nem sempre tem tempo, mas precisa entender o que acontece no Mundo, ainda mais porque o planeta está uma zona. Toda semana, Matias Pinto recebe Filipe Figueiredo, do Xadrez Verbal, que traz pra você as principais notícias da política internacional, com análises, críticas, convidados e espaço para debate. Toda sexta-feira você se atualiza e se informa. O tabuleiro do Xadrez Verbal agora em alto e bom som na Central 3.",
        url: "https://www.spreaker.com/show/xadrez-verbal",
        lastEpisodePublished: "2024-04-13T02:37:59Z",
        unplayed: true,
        lastEpisodeUuid: "789aefba-fc48-4379-9a42-026fe911a5cf",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 4,
        dateAdded: "2022-02-28T01:28:52.947Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: true,
            changed: true,
            modifiedAt: "2024-03-02T20:50:31.919Z",
          },
          playbackSpeed: {
            value: 1.5,
            changed: true,
            modifiedAt: "2024-03-02T20:50:32.026Z",
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "bebaacf0-d567-0136-3249-08b04944ede4",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Boa Noite Internet",
        author: "Ampère",
        description:
          "O podcast que explica o mundo através de histórias interessantes. Apresentado por crisdias. boanoiteinternet.com.br",
        url: "https://boanoiteinternet.com.br/podcast",
        lastEpisodePublished: "2024-04-07T23:00:02Z",
        unplayed: true,
        lastEpisodeUuid: "ee7ebe5f-3789-468f-9505-0782d3cda73d",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 26,
        dateAdded: "2019-01-25T23:08:18Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "bf480a40-29c6-013c-f657-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Vortex",
        author: "Parasol Storytelling",
        description:
          "No Vortex discutimos notícias ou acontecimentos interessantes que despertam curiosidade e vontade de ir cada vez mais fundo no assunto. Entrar no Vortex é querer saber mais sobre fatos que podem até não ser os mais importantes, mas certamente são relevantes o suficiente pra nos fazer querer falar sobre.\nApresentação: Katiucha Barcelos | @katbarcelos",
        url: "https://www.vortex.com.br",
        lastEpisodePublished: "2024-04-10T19:22:08Z",
        unplayed: false,
        lastEpisodeUuid: "75cbe246-15c7-494c-b35f-7cf90ffdd055",
        lastEpisodePlayingStatus: 2,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 25,
        dateAdded: "2023-11-30T19:33:52.709Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "c8b48a90-082c-0136-c264-7d73a919276a",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Everything Saxophone Podcast",
        author: "Everything Saxophone Podcast, Donna Schwartz",
        description:
          "Each episode, your Host Donna Schwartz brings you interviews, news, and reviews with some of the most exciting saxophonists in the world today. This is the place for the saxophone community to come together and learn through getting into the minds of our saxophone heroes. Enjoy the show and make sure to subscribe so you don't miss an episode!",
        url: "http://saxophonepodcast.com/",
        lastEpisodePublished: "2024-04-15T12:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "2e61aea1-7454-41bd-bafb-dfd71143e185",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 59,
        dateAdded: "2024-03-04T12:13:58.294Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: false,
          },
          autoSkipLast: {
            value: 0,
            changed: false,
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "cbe9b6c0-7da4-0132-e6ef-5f4c86fd3263",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Developer Tea",
        author: "Jonathan Cutrell",
        description:
          "Developer Tea exists to help driven developers connect to their ultimate purpose and excel at their work so that they can positively impact the people they influence.\n\nWith over 13 million downloads to date, Developer Tea  is a short podcast hosted by Jonathan Cutrell (@jcutrell), co-founder of Spec and Director of Engineering at PBS. We hope you'll take the topics from this podcast and continue the conversation, either online or in person with your peers. Twitter: @developertea :: Email: developertea@gmail.com",
        url: "http://www.developertea.com",
        lastEpisodePublished: "2024-04-10T07:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "116469a6-dacf-4169-a41f-709dc45d02c7",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 12,
        dateAdded: "2018-08-03T02:52:04Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "d4a11a80-aa2c-0137-fae6-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Papo de Política",
        author: "G1",
        description:
          "Uma conversa sobre os destaques da semana, bastidores do poder e o que vem por aí na política e na economia. Toda quinta, as jornalistas da Globo Natuza Nery, Maria Júlia Coutinho, Julia Duailibi e Andréia Sadi trazem análises e informações exclusivas para esse papo.",
        url: "https://g1.globo.com/podcast/",
        lastEpisodePublished: "2024-03-15T10:35:45Z",
        unplayed: true,
        lastEpisodeUuid: "a9b674e3-51c0-4d2f-ab02-44eab9baf551",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 13,
        dateAdded: "2022-11-29T02:12:47.178Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "d4a47ea0-0422-012e-f9a0-00163e1b201c",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "The Moth",
        author: "The Moth",
        description:
          "On Tuesday's and Friday’s The Moth’s podcast feed presents episodes of the Peabody-Award Winning Moth Radio Hour and original episodes of The Moth Podcast.\n\nSince its launch in 1997, The Moth has presented thousands of true stories, told live and without notes, to standing-room-only crowds worldwide. Moth storytellers stand alone, under a spotlight, with only a microphone and a roomful of strangers. The storyteller and the audience embark on a high-wire act of shared experience which is both terrifying and exhilarating. Since 2008, The Moth podcast has featured many of our favorite stories told live on Moth stages around the country. For information on all of our programs and live events, visit themoth.org.",
        url: "http://themoth.org/",
        lastEpisodePublished: "2024-04-12T04:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "3092a5ae-a264-4004-a7a3-24aa50315788",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 17,
        dateAdded: "2016-07-11T15:35:33Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "d7c955f0-6043-012f-1382-525400c11844",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "True Story",
        author: "True Story",
        description:
          "A night of true tales told to friends. True Story presents ordinary people telling stories from their lives, at living room storytelling parties in undisclosed locations around the world. Recordings from the True Story underground are more raw and revealing than you’ll find anywhere else. Since 2012, we’ve published the best of these on our podcast and on public radio. Join our global storytelling community by visiting www.truestorytime.org/join",
        url: "https://truestorytime.org",
        lastEpisodePublished: "2015-07-09T21:59:46Z",
        unplayed: false,
        lastEpisodeUuid: "2445b9f0-08b5-0133-1f43-059c869cc4eb",
        lastEpisodePlayingStatus: 3,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 55,
        dateAdded: "2015-03-23T14:30:54Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "d800dad0-34ee-0134-eba6-0d50f522381b",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Educação Política - Politize!",
        author: "Politize!",
        description:
          "A Politize! é a maior plataforma de educação política do Brasil. Conteúdos totalmente gratuitos, nos mais diversos formatos, de forma objetiva e divertida, sem vinculações político-partidárias. Está esperando o que pra aprender e se tornar um cidadão mais consciente e engajado? Vem com a gente! www.politize.com.br",
        url: "http://www.politize.com.br",
        lastEpisodePublished: "2024-04-09T13:50:39Z",
        unplayed: true,
        lastEpisodeUuid: "9464946d-648e-4d64-85b7-120564e4fb07",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 44,
        dateAdded: "2022-11-29T02:13:39.526Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "dd291660-5483-013c-9ece-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Keep Taking Ground Saxophone Podcast",
        author: "Jesse Ryan",
        description:
          "A new and exciting podcast for the professional and aspiring professional saxophonist, that features 30minute conversations with in-demand and award-winning saxophonists from around the world and across jazz and contemporary styles. Music is a living, breathing art-form that is kept alive by the innovators, composers and musicians that dedicate their lives to learning, creating and sharing the music they love. I believe that even in this age of easy access to information and hyper-connectivity there is still, no doubt, a gap between the professional and aspiring professional musician that isn’t always closed by mere practice, time or earning a degree. In-demand and award-winning saxophonists know something that the “rest” of us don’t, and that’s what I’m curious about.",
        url: "https://rss.com/podcasts/keeptakinggroungsaxophonepodcast",
        lastEpisodePublished: "2023-12-06T16:22:48Z",
        unplayed: true,
        lastEpisodeUuid: "9b2b1513-9742-4fd8-a6f3-0d50dd0bd813",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 63,
        dateAdded: "2024-03-04T12:14:21.463Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: false,
          },
          autoSkipLast: {
            value: 0,
            changed: false,
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "dfd28a60-d0e6-0137-1e1c-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Roda Viva",
        author: "TV Cultura",
        description:
          "Confira a versão em podcast do Roda Viva, o programa de entrevistas mais tradicional da televisão brasileira.",
        url: "https://www.tvcultura.com.br",
        lastEpisodePublished: "2024-04-09T17:35:45Z",
        unplayed: true,
        lastEpisodeUuid: "ac5db1db-6673-4f4b-87ea-d9ad83cffcaa",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 31,
        dateAdded: "2023-01-04T11:00:42.946Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "e7f7a160-b23d-0138-e6bf-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Hablemos de Hockey",
        author: "Moises Vindas",
        description:
          "¡Bienvenidos a nuestro podcast en español de la NHL, donde nos sumergimos en el emocionante mundo del hockey sobre hielo! Acompáñenos mientras exploramos las últimas noticias, análisis en profundidad y cautivadoras historias de la NHL. Cubrimos todo, manteniéndote informado y entretenido. Obtén conocimientos, opiniones de expertos y apasionantes discusiones que satisfarán tus ansias de NHL. ¡Sintoniza nuestro podcast y únete a la conversación definitiva sobre hockey! Síguenos en Twitter @Hablemoshockey para obtener más actualizaciones de la NHL y relacionarte con otros entusiastas del hockey.",
        url: "https://podcasters.spotify.com/pod/show/moises-vindas6",
        lastEpisodePublished: "2024-03-25T22:59:42Z",
        unplayed: true,
        lastEpisodeUuid: "9c723e99-7484-4d79-997f-47ba15380b21",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 40,
        dateAdded: "2023-06-01T15:12:20.958Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "e8b5d250-f1ce-0135-c25e-7d73a919276a",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "WorkLife with Adam Grant",
        author: "TED",
        description:
          "You spend a quarter of your life at work. You should enjoy it! Organizational psychologist Adam Grant takes you inside the minds of some of the world’s most unusual professionals to discover the keys to a better work life. From learning how to love your rivals to harnessing the power of frustration, one thing’s for sure: You’ll never see your job the same way again. Produced in partnership with Transmitter Media.",
        url: "https://www.ted.com/podcasts/worklife",
        lastEpisodePublished: "2024-04-09T04:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "12518b8f-7f72-402c-b43c-4c1ec0cc011c",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 34,
        dateAdded: "2018-05-27T23:17:24Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "e97724d0-c91d-0138-e742-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "A Cor da Voz",
        author: "Tainã Rosa @tainaproducaocultural",
        description:
          "Ubuntu! Você está ouvindo A Cor da Voz, um podcast negro que discute experiências negras de vida, arte negra e conceitos vinculados aos debates raciais. Meu nome é Tainã Rosa, eu sou professora, literata e produtora cultural deste canal.",
        url: "https://podcasters.spotify.com/pod/show/tain-do-nascimento-rosa",
        lastEpisodePublished: "2024-04-03T00:09:18Z",
        unplayed: true,
        lastEpisodeUuid: "2d79d020-a153-48a5-9099-e937c75d061a",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 39,
        dateAdded: "2023-02-15T18:19:22.507Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "eab1fb60-10b9-0138-9f81-0acc26574db2",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "História em Meia Hora",
        author: "Agência de Podcast",
        description:
          "História em Meia Hora é um podcast feito por Vítor Soares, que fala de temas atuais e clássicos da história de maneira informal e divertida! \n-\nQuer receber conteúdos EXCLUSIVOS e de quebra ajudar um projeto educacional a se manter de pé? Acesse https://apoia.se/historiaemmeiahora\n\nPIX: historiaemmeiahora@gmail.com\n-",
        url: "https://www.historiaemmeiahora.com",
        lastEpisodePublished: "2024-04-13T08:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "ab52145a-9d32-4265-b081-74fa768c15cb",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 7,
        dateAdded: "2023-05-18T13:48:56.635Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "ec9bbd40-23ba-0136-c266-7d73a919276a",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Presidente da Semana",
        author: "Folha de S.Paulo",
        description:
          "A história de todos os presidentes brasileiros de Deodoro da Fonseca até o eleito ou eleita em 2018, passando por Getúlio, Jango, Médici, FHC, Lula e Temer. Produzido e apresentado pelo jornalista Rodrigo Vizeu, editor-adjunto de Poder na Folha, o podcast é publicado às segundas-feiras.",
        url: "http://folha.com/presidentedasemana",
        lastEpisodePublished: "2024-02-22T10:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "0411b24a-cb54-4dbf-99ef-8d019b55e4d2",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 35,
        dateAdded: "2019-07-10T01:49:56.822Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "ecc40e50-6337-0131-7426-723c91aeae46",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "NBW",
        author: "Nós Brigamos no War",
        description:
          "Nós Brigamos no War. Um podcast semanal com a conversa entre três amigos que estão separados pelo Atlântico e não compartilham mais a mesma garrafa de cerveja. Mesmo assim, ainda têm muito para discutir sobre tudo o que der na telha. Além, é claro, de tentar incessantemente aprimorar o gosto cultural um do outro.",
        url: "https://podcastnbw.com/",
        lastEpisodePublished: "2021-08-15T16:09:08Z",
        unplayed: false,
        lastEpisodeUuid: "be86be35-a421-4288-8ff8-68747a1be1ce",
        lastEpisodePlayingStatus: 2,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 53,
        dateAdded: "2015-03-25T14:46:36Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "f27fe110-584a-0137-f266-1d245fc5f9cf",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Distributed, with Matt Mullenweg",
        author: "Matt Mullenweg",
        description:
          "Matt Mullenweg, cofounder of WordPress and CEO of Automattic, embarks on a journey to understand the future of work. Having built his own company with no offices and more than 1,300 employees in 76 countries, speaking 95 different languages, Mullenweg examines the benefits and challenges of distributed work and recruiting talented people around the globe.",
        url: "https://distributed.blog",
        lastEpisodePublished: "2023-05-26T15:41:27Z",
        unplayed: true,
        lastEpisodeUuid: "8ce55df4-3801-471c-b84b-9e714c562658",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 48,
        dateAdded: "2019-05-29T00:44:09Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-02-05T03:33:53.223Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "fb0048c0-0123-0136-c264-7d73a919276a",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Techmeme Ride Home",
        author: "Ride Home Media",
        description:
          "The day's tech news, every day at 5pm. From Techmeme.com, Silicon Valley's most-read news source. 15 minutes and you're up to date.",
        url: "https://www.ridehome.info/show/techmeme-ride-home/",
        lastEpisodePublished: "2024-04-12T15:07:59Z",
        unplayed: true,
        lastEpisodeUuid: "c5a87641-7262-4705-b1d4-1cf698318378",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 10,
        dateAdded: "2019-07-22T01:12:33.690Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "fc5dd420-86ca-0131-883f-723c91aeae46",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Internet History Podcast",
        author: "Brian McCullough",
        description: "A History of the Internet Era from Netscape to the iPad",
        url: "https://art19.com/shows/internet-history-podcast",
        lastEpisodePublished: "2021-10-19T22:53:20Z",
        unplayed: true,
        lastEpisodeUuid: "08058e64-76b9-45f9-9e70-27c50a8a06f7",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 52,
        dateAdded: "2017-08-08T06:09:41Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
      {
        uuid: "fe30f8e0-3da9-0135-9028-63f4b61a9224",
        episodesSortOrder: 3,
        autoStartFrom: 0,
        title: "Syntax - Tasty Web Development Treats",
        author:
          "Wes Bos & Scott Tolinski - Full Stack JavaScript Web Developers",
        description:
          "Full Stack Developers Wes Bos and Scott Tolinski dive deep into web development topics, explaining how they work and talking about their own experiences. They cover from JavaScript frameworks like React, to the latest advancements in CSS to simplifying web tooling.",
        url: "https://syntax.fm",
        lastEpisodePublished: "2024-04-15T11:00:00Z",
        unplayed: true,
        lastEpisodeUuid: "3b191b8e-8709-4774-ac32-b87326c65c99",
        lastEpisodePlayingStatus: 1,
        lastEpisodeArchived: false,
        autoSkipLast: 0,
        folderUuid: "973df93c-e4dc-41fb-879e-0c7b532ebb70",
        sortPosition: 0,
        dateAdded: "2017-09-29T22:32:28Z",
        settings: {
          notification: {
            value: false,
            changed: false,
          },
          addToUpNext: {
            value: false,
            changed: false,
          },
          addToUpNextPosition: {
            value: 0,
            changed: false,
          },
          autoArchive: {
            value: false,
            changed: false,
          },
          playbackEffects: {
            value: false,
            changed: false,
          },
          playbackSpeed: {
            value: 1,
            changed: false,
          },
          trimSilence: {
            value: 0,
            changed: false,
          },
          volumeBoost: {
            value: false,
            changed: false,
          },
          autoStartFrom: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          autoSkipLast: {
            value: 0,
            changed: true,
            modifiedAt: "2024-04-13T18:36:26.027Z",
          },
          episodesSortOrder: {
            value: 3,
            changed: false,
          },
          autoArchivePlayed: {
            value: 1,
            changed: false,
          },
          autoArchiveInactive: {
            value: 0,
            changed: false,
          },
          autoArchiveEpisodeLimit: {
            value: 0,
            changed: false,
          },
          episodeGrouping: {
            value: 0,
            changed: false,
          },
          showArchived: {
            value: false,
            changed: false,
          },
        },
      },
    ],
    folders: [],
  };
  const response = {
    serverModified: "1713133569596",
    order: [
      "305b827d-0960-49e3-8e61-02a0d3e7bf0d",
      "75cbe246-15c7-494c-b35f-7cf90ffdd055",
      "2dcc72a5-d554-4773-9130-d15aefacbb42",
      "f2d0d27e-95f8-4c1f-902c-52b1ce9ffa6e",
      "dc99243b-f146-4f88-be82-a4f7028de97e",
      "16518563-2ab5-4ca5-bf0d-5b87d4132c3b",
      "00280ff1-f76a-4b87-858d-e033a47c27bd",
      "e2bce8fa-fd60-4955-91d6-6ead831d5018",
      "046ca9b2-e3b4-4d81-9921-ed942cc5713c",
      "8f8d6ee8-dc3c-4c0c-8475-9fc1b99c4a81",
      "7a00d85d-cb71-48aa-96f1-c2bdb974fd15",
      "9484dfd4-92da-42c2-a9db-1c7ebd2e5621",
      "ff42840b-c7ab-4839-befa-cfccdbcdd2de",
      "9b7877a0-b304-4784-9d61-e4630609a119",
      "6cb161d5-75b8-47f6-b32b-5e304f991668",
      "b3457f9d-99ee-4768-ae53-6364a9de71a0",
      "57c35466-d645-4f3c-8e72-58a7db1621ac",
      "2cd9e059-353a-4c8a-b114-41a313567db4",
      "bb628e58-06c3-4ddf-b4d0-e9cbb6df8028",
      "5e429a2a-2d9f-44c7-8bc3-bedbcdb0cf6f",
      "75908212-a0d0-48f1-8049-c8f64d91d7c3",
      "1b6bb78a-062d-476e-87f4-fda5125878c3",
      "360f2402-8bf1-4b7c-9171-262920ac6c54",
      "939b7ca1-09cd-4045-be43-2a72fbe101df",
      "89b6a3a1-31b2-477e-b346-a6800e09afd4",
      "265cc0e1-74e5-456f-b8b7-a95c346a6085",
      "4e98a336-5c1b-4bad-93c1-7008adb74bcd",
      "4315ee08-e7c6-43bb-9c91-e6080dae82d9",
      "2cfb4786-c900-4223-9fc3-d37c96c35f05",
      "43e1751e-143f-49ef-9617-6277e902d0d3",
      "30d6fc13-0c39-4a7a-9fd1-18e749622c66",
      "980a8d32-e0a7-49be-98c9-ca18a197b20f",
      "e6aedbfd-d32a-4aba-996c-7fcd4caf7ad0",
      "47f6f444-214d-4338-9935-894157a15e1a",
      "24031903-dbaa-4afe-ba07-936cab36f4f2",
      "c0674d74-631e-4804-8f60-ef4ff427bc48",
      "715c97c6-4c84-42bf-be7e-b1029f32bf1b",
      "03053eec-87f5-40dd-b387-449591dcd4d7",
      "caa4ead5-7d71-4d12-b478-fa58bc071b0d",
      "d458aaf1-96d7-49ff-9658-755ed3f87467",
      "f485314b-59c9-451a-8e97-b3126ce53693",
      "ac417134-8275-489f-946a-c5bdebdf8c4b",
      "8d563a65-71cd-4a6d-a894-c2cf518ce17f",
      "c95d4eca-a565-4261-8302-dcfb6fe2e439",
      "8d422c9f-f5c5-40a2-86dc-123b4a706453",
      "574edc22-20be-44eb-9ffa-c2183e5e802e",
      "e389935f-6c7b-41c9-89fd-e508cbc8e0af",
      "b9b191aa-74e5-4420-b5b0-1b24a54245f7",
      "8a5ede09-f48a-4244-be7d-fa4c9c05dfc8",
      "f42ccbff-8c9b-4c92-b5e2-23c6a5b9e3c3",
      "d30248fd-f811-4195-93d2-7dfff4e2978a",
      "311233f1-0eb6-4f3e-a148-e8c2314148e4",
      "135eaee6-48f8-48d1-96a5-710a84d06224",
      "14e150ff-0fbb-43b9-abb4-e4bd52ec4632",
      "e1d4a1f8-e876-4d57-9bf6-f09a4e4d5be6",
      "0d7ae44a-f9b6-4586-81c4-22430633fa79",
      "e1ebfbcc-036b-4162-a14e-9461200a4084",
      "9abc3c9b-1696-4369-8b4d-65657396ced8",
      "cf8f04c5-a96d-4f88-b082-1c1d9e013e92",
      "7b24f354-0a0f-4fd7-a4e5-6be1efd816bb",
      "1c3f98e8-2425-4749-a905-dc5234ddf8e9",
      "875d2265-1c5e-4678-a419-2001206c2557",
    ],
    episodes: {
      "305b827d-0960-49e3-8e61-02a0d3e7bf0d": {
        title: "Xadrez Verbal #373 Aos Trancos e Barrancos",
        url: "https://dts.podtrac.com/redirect.mp3/api.spreaker.com/download/episode/59325170/xadrez_verbal_373.mp3",
        podcast: "b9b05d90-d8cc-0132-0349-059c869cc4eb",
      },
      "75cbe246-15c7-494c-b35f-7cf90ffdd055": {
        title: "Vortex 28 - Phrogging: estranhos que moram na sua casa",
        url: "https://traffic.omny.fm/d/clips/f7f86f6a-2fbd-4ac7-ab53-b01900e5d187/4e51ac46-2077-4a6e-a5bc-b06d01221176/3a525918-0162-4216-af33-b14e013d5870/audio.mp3?utm_source=Podcast&in_playlist=84ad57d5-c2e7-4608-aa21-b06d0122aa29",
        podcast: "bf480a40-29c6-013c-f657-0acc26574db2",
      },
      "2dcc72a5-d554-4773-9130-d15aefacbb42": {
        title: "Go invent something",
        url: "https://sphinx.acast.com/akimbo/goinventsomething/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "f2d0d27e-95f8-4c1f-902c-52b1ce9ffa6e": {
        title: "Industry and its discontents",
        url: "https://sphinx.acast.com/akimbo/industryanditsdiscontents/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "dc99243b-f146-4f88-be82-a4f7028de97e": {
        title: "The Game Theory of Carbon",
        url: "https://sphinx.acast.com/akimbo/thegametheoryofcarbon/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "16518563-2ab5-4ca5-bf0d-5b87d4132c3b": {
        title: "The Zoom Revolution",
        url: "https://sphinx.acast.com/akimbo/thezoomrevolution/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "00280ff1-f76a-4b87-858d-e033a47c27bd": {
        title: "A quantum theory of customers",
        url: "https://sphinx.acast.com/akimbo/aquantumtheoryofcustomers/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "e2bce8fa-fd60-4955-91d6-6ead831d5018": {
        title: "The pursuit of perfection",
        url: "https://sphinx.acast.com/akimbo/thepursuitofperfection/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "046ca9b2-e3b4-4d81-9921-ed942cc5713c": {
        title: "A vote for books",
        url: "https://sphinx.acast.com/akimbo/avoteforbooks/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "8f8d6ee8-dc3c-4c0c-8475-9fc1b99c4a81": {
        title: "Paying for stamps",
        url: "https://sphinx.acast.com/akimbo/payingforstamps/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "7a00d85d-cb71-48aa-96f1-c2bdb974fd15": {
        title: "Lots of questions",
        url: "https://sphinx.acast.com/akimbo/lotsofquestions/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "9484dfd4-92da-42c2-a9db-1c7ebd2e5621": {
        title: "Pay the Writer",
        url: "https://sphinx.acast.com/akimbo/paythewriter/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "ff42840b-c7ab-4839-befa-cfccdbcdd2de": {
        title: "Consolidation, Publishing",
        url: "https://sphinx.acast.com/akimbo/consolidation-publishing/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "9b7877a0-b304-4784-9d61-e4630609a119": {
        title: "The talented mosquito",
        url: "https://sphinx.acast.com/akimbo/thetalentedmosquito/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "6cb161d5-75b8-47f6-b32b-5e304f991668": {
        title: "The persistence of technology",
        url: "https://sphinx.acast.com/akimbo/thepersistenceoftechnology/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "b3457f9d-99ee-4768-ae53-6364a9de71a0": {
        title: "Spirit of ecstasy",
        url: "https://sphinx.acast.com/akimbo/spiritofecstasy/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "57c35466-d645-4f3c-8e72-58a7db1621ac": {
        title: "Tim Toady",
        url: "https://sphinx.acast.com/akimbo/timtoady/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "2cd9e059-353a-4c8a-b114-41a313567db4": {
        title: "Postage due",
        url: "https://sphinx.acast.com/akimbo/postagedue/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "bb628e58-06c3-4ddf-b4d0-e9cbb6df8028": {
        title: "The architecture of architecture",
        url: "https://sphinx.acast.com/akimbo/thearchitectureofarchitecture/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "5e429a2a-2d9f-44c7-8bc3-bedbcdb0cf6f": {
        title: "On Monarchists",
        url: "https://sphinx.acast.com/akimbo/onmonarchists/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "75908212-a0d0-48f1-8049-c8f64d91d7c3": {
        title: "Please don’t litter",
        url: "https://sphinx.acast.com/akimbo/pleasedon-tlitter/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "1b6bb78a-062d-476e-87f4-fda5125878c3": {
        title: "On direct advertising",
        url: "https://sphinx.acast.com/akimbo/ondirectadvertising/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "360f2402-8bf1-4b7c-9171-262920ac6c54": {
        title: "Entrepreneur’s guide to trademarks",
        url: "https://sphinx.acast.com/akimbo/entrepreneur-sguidetotrademarks/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "939b7ca1-09cd-4045-be43-2a72fbe101df": {
        title: "Sitting in judgment",
        url: "https://sphinx.acast.com/akimbo/sittinginjudgment/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "89b6a3a1-31b2-477e-b346-a6800e09afd4": {
        title: "Whale Hunting",
        url: "https://sphinx.acast.com/akimbo/whalehunting/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "265cc0e1-74e5-456f-b8b7-a95c346a6085": {
        title: "Modern Choice Theory",
        url: "https://sphinx.acast.com/akimbo/modernchoicetheory/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "4e98a336-5c1b-4bad-93c1-7008adb74bcd": {
        title: "Money for nothing?",
        url: "https://sphinx.acast.com/akimbo/moneyfornothing-/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "4315ee08-e7c6-43bb-9c91-e6080dae82d9": {
        title: "Upside down marginal cost",
        url: "https://sphinx.acast.com/akimbo/upsidedownmarginalcost/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "2cfb4786-c900-4223-9fc3-d37c96c35f05": {
        title: "Rightsizing projects",
        url: "https://sphinx.acast.com/akimbo/rightsizingprojects/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "43e1751e-143f-49ef-9617-6277e902d0d3": {
        title: "Helmet insights",
        url: "https://sphinx.acast.com/akimbo/helmetinsights/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "30d6fc13-0c39-4a7a-9fd1-18e749622c66": {
        title: "Advertising built the world",
        url: "https://sphinx.acast.com/akimbo/advertisingbuilttheworld/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "980a8d32-e0a7-49be-98c9-ca18a197b20f": {
        title: "A Billion Dollar’s Worth of Words",
        url: "https://sphinx.acast.com/akimbo/abilliondollar-sworthofwords/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "e6aedbfd-d32a-4aba-996c-7fcd4caf7ad0": {
        title: "The Grand Opening (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/629f619b5de0d7001244fb77/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "47f6f444-214d-4338-9935-894157a15e1a": {
        title: "Every day is labor day (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/6424b25c0e4e66001196e438/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "24031903-dbaa-4afe-ba07-936cab36f4f2": {
        title: "Your Bootstrapping Questions (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/644ffc020095f900110ebf35/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "c0674d74-631e-4804-8f60-ef4ff427bc48": {
        title: "Thrash now (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/645965129b594e0011793be7/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "715c97c6-4c84-42bf-be7e-b1029f32bf1b": {
        title: "The spirit of the game (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/6462530ff695d6001104e1aa/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "03053eec-87f5-40dd-b387-449591dcd4d7": {
        title: "The deletionists (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64693a8069689100118d99ba/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "caa4ead5-7d71-4d12-b478-fa58bc071b0d": {
        title: "False proxies",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/6476a9df42a90f00111422d8/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "d458aaf1-96d7-49ff-9658-755ed3f87467": {
        title: "You're it (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/647e18982075af0011359e3c/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "f485314b-59c9-451a-8e97-b3126ce53693": {
        title: "Honest signals (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64875b1f5921380011f06aba/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "ac417134-8275-489f-946a-c5bdebdf8c4b": {
        title: "Anthems, Pledges and Change (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/6490b54d2e16ba00112b8b0a/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "8d563a65-71cd-4a6d-a894-c2cf518ce17f": {
        title: "Games matter (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/6499e49a2149530010af3e99/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "c95d4eca-a565-4261-8302-dcfb6fe2e439": {
        title: "The wedding industrial complex (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64a4408b1b96b90011aec30f/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "8d422c9f-f5c5-40a2-86dc-123b4a706453": {
        title: "All rights reserved (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64ad67d3f41bdd001133e026/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "574edc22-20be-44eb-9ffa-c2183e5e802e": {
        title: "Stop stealing dreams (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64b5a7666d7ea80011f829e0/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "e389935f-6c7b-41c9-89fd-e508cbc8e0af": {
        title: "Connect the dots (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64c04451495c9f001168181e/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "b9b191aa-74e5-4420-b5b0-1b24a54245f7": {
        title: "How to get into a famous college (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64c805946624ec0011203972/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "8a5ede09-f48a-4244-be7d-fa4c9c05dfc8": {
        title: "Going going gone (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64d10ceba514e90011a90d3e/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "f42ccbff-8c9b-4c92-b5e2-23c6a5b9e3c3": {
        title: "On dignity (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64dbc9a46bf6aa0011c9bf00/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "d30248fd-f811-4195-93d2-7dfff4e2978a": {
        title: "Sauce and Godiva (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64e3a00cddadb00012465b1b/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "311233f1-0eb6-4f3e-a148-e8c2314148e4": {
        title: "It's your turn (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64ee052d7b9ac00011cfa42a/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "135eaee6-48f8-48d1-96a5-710a84d06224": {
        title: "Why did the chicken cross the road? (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64ee1f2a0ead91001198de56/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "14e150ff-0fbb-43b9-abb4-e4bd52ec4632": {
        title: "White sculptures (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/650a09ebd8ccda0011a00d81/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "e1d4a1f8-e876-4d57-9bf6-f09a4e4d5be6": {
        title: "The chicken and the egg (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/64ee06de7b9ac00011cfed5c/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "0d7ae44a-f9b6-4586-81c4-22430633fa79": {
        title: "Shun the non-believers (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/6424b0bc56d10b001197278f/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "e1ebfbcc-036b-4162-a14e-9461200a4084": {
        title: "Ignore sunk costs (E)",
        url: "https://sphinx.acast.com/p/acast/s/akimbo/e/6424b1060cfcac0011136f82/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
      "9abc3c9b-1696-4369-8b4d-65657396ced8": {
        title: "Crescendo na frente da internet, com Kaique Brito",
        url: "https://api.spreaker.com/download/episode/53552481/bni_088.mp3",
        podcast: "bebaacf0-d567-0136-3249-08b04944ede4",
      },
      "cf8f04c5-a96d-4f88-b082-1c1d9e013e92": {
        title: "Kids These Days | March 28, 2024",
        url: "https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/pscrb.fm/rss/p/arttrk.com/p/MG4HN/traffic.megaphone.fm/SDPNI7733502843.mp3?updated=1711660322",
        podcast: "a2174990-c685-0130-34ac-723c91aeae46",
      },
      "7b24f354-0a0f-4fd7-a4e5-6be1efd816bb": {
        title: "AU62ON | April 2, 2024",
        url: "https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/pscrb.fm/rss/p/arttrk.com/p/MG4HN/traffic.megaphone.fm/SDPNI9107028342.mp3?updated=1712090034",
        podcast: "a2174990-c685-0130-34ac-723c91aeae46",
      },
      "1c3f98e8-2425-4749-a905-dc5234ddf8e9": {
        title: "NerdCast 926 - Como era bom o cinema dos anos 2000",
        url: "https://chrt.fm/track/GD6D57/https://nerdcast.jovemnerd.com.br/nerdcast_926_cinema_2000.mp3",
        podcast: "7622ef30-3f20-0131-77d1-723c91aeae46",
      },
      "875d2265-1c5e-4678-a419-2001206c2557": {
        title: "The New York Times Bestseller List",
        url: "https://sphinx.acast.com/akimbo/thenewyorktimesbestsellerlist/media.mp3",
        podcast: "142b08c0-ed76-0135-c25e-7d73a919276a",
      },
    },
  };
  const { podcasts } = responsePodList;
  const { episodes } = response;
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
  console.log(result);
  return result;
};

const favoritesSectionData = {
  config: {
    title: "My favorites",
    slug: "favorites",
    icon: "fa6-solid:star",
    visible: true,
  },
  books: {
    title: "Books I read",
    data: [
      {
        image: import("@/assets/favorites/books/book-1.jpeg"),
        title: "The Pragmatic Programmer: From Journeyman to Master",
        author: "Andy Hunt, Dave Thomas",
        url: "https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer",
      },
      {
        image: import("@/assets/favorites/books/book-2.jpg"),
        title:
          "Domain-Driven Design: Tackling Complexity in the Heart of Software",
        author: "Eric Evans",
        url: "https://www.goodreads.com/book/show/179133.Domain_Driven_Design",
      },
      {
        image: import("@/assets/favorites/books/book-3.jpeg"),
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        url: "https://www.goodreads.com/book/show/3735293-clean-code",
      },
      {
        image: import("@/assets/favorites/books/book-4.jpeg"),
        title:
          "The Clean Coder: A Code of Conduct for Professional Programmers",
        author: "Robert C. Martin",
        url: "https://www.goodreads.com/book/show/10284614-the-clean-coder",
      },
    ],
  },
  // people: {
  //   title: "People I learn from",
  //   data: [
  //     {
  //       image: import("@/assets/favorites/people/person-1.jpg"),
  //       name: "Kent C. Dodds",
  //       url: "https://kentcdodds.com/",
  //     },
  //     {
  //       image: import("@/assets/favorites/people/person-2.jpeg"),
  //       name: "Kent Beck",
  //       url: "https://www.kentbeck.com/",
  //     },
  //     {
  //       image: import("@/assets/favorites/people/person-3.jpeg"),
  //       name: "Eric Evans",
  //       url: "https://www.domainlanguage.com/",
  //     },
  //     {
  //       image: import("@/assets/favorites/people/person-4.jpeg"),
  //       name: "Martin Fowler",
  //       url: "https://martinfowler.com/",
  //     },
  //     {
  //       image: import("@/assets/favorites/people/person-5.jpg"),
  //       name: "Robert C. Martin",
  //       url: "http://cleancoder.com/",
  //     },
  //     {
  //       image: import("@/assets/favorites/people/person-6.jpeg"),
  //       name: "Adam Dymitruk",
  //       url: "https://eventmodeling.org/",
  //     },
  //   ],
  // },
  videos: {
    title: "Podcasts I just listened to",
    data: recentPodcast(),
  },
  medias: {
    title: "Music I'm listening",
    data: recentMusic(),
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
