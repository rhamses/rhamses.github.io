import type { PortfolioSection } from "@/types/sections/portfolio-section.types";
import type { ReadonlyDeep } from "type-fest";
import { demo, github, mockups, website } from "../helpers/links";
import {
  chakraUi,
  cloudflare,
  eslint,
  firebase,
  jest,
  mongoDb,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
  vue,
} from "../helpers/skills";

const portfolioSectionData = {
  config: {
    title: "Projects",
    slug: "projects",
    icon: "fa6-solid:rocket",
    visible: true,
    screenshots: {
      title: "Screenshots",
      icon: "fa6-solid:images",
    },
  },
  projects: [
    {
      name: "Tabela Fipe",
      image: import("@/assets/portfolio/fipe.png"),
      dates: [new Date("2020-01"), null],
      details: [
        { label: "Team size", value: "1 person" },
        {
          label: "My role",
          value: [
            "Front-end Developer",
            "Designer",
            "Back-end Developer",
            "DevOps",
          ],
        },
        { label: "Company", value: "None" },
        { label: "Category", value: ["Web app", "Open source"] },
      ],
      pdfDetails: [
        {
          label: "Demo",
          value: "https://golden-bulls-d73jd7.netlify.app",
          url: "#",
        },
        {
          label: "Repository",
          value: "https://github.com/mark-freeman/golden-bulls",
          url: "#",
        },
      ],
      screenshots: [
        {
          src: import("@/assets/portfolio/fipe-1.png"),
          alt: "First screenshot",
        },
        {
          src: import("@/assets/portfolio/fipe-2.png"),
          alt: "Second screenshot",
        },
      ],
      description:
        "Tabela Fipe is the central prince index of vehicles new or used in Brazil. Their site has a search engine but it's very old and dated. My app tries to be better and more intelligent while algo bringing the overall stats of the history of the price for each model.",
      tagsList: {
        title: "Technologies",
        tags: [vue(), tailwindCss(), cloudflare(), eslint(), prettier()],
      },
      links: [
        demo({ url: "https://fipe.amb1.io" }),
        github({ url: "https://github.com/rhamses/fipe" }),
      ],
    },
    {
      name: "Hashflags",
      image: import("@/assets/portfolio/hashflags.png"),
      dates: [new Date("2020/01"), null],
      details: [
        { label: "Team size", value: "1 people" },
        {
          label: "My role",
          value: ["Front-end Developer", "Back-end Developer", "Designer"],
        },
        { label: "Company", value: "None" },
        { label: "Category", value: ["Web app"] },
      ],
      screenshots: [
        {
          src: import("@/assets/portfolio/hashflags-1.png"),
          alt: "First screenshot",
        },
      ],
      pdfDetails: [
        { label: "Demo", value: "https://hashflags.amb1.io", url: "#" },
        {
          label: "Repository",
          value: "https://github.com/rhamses/hashflags",
          url: "#",
        },
      ],
      description: `On Twitter.com a paid #hashtag is called "hashflag", the main difference is that it contains a custom icon for each #, this ads are centralized in a public accessible file from Twitter.com. The file is time sensitive, deleting old records to input new ones. This project parses that file and show all the entries since day 1.

This project is the sum of a few parts:
1- A crawler running on AWS Lambda as a cronjob to get every update on the hashflags raw file from Twitter.com
2- A MongoDB instance that saves all the new entries and update the already existing ones.
3- A AWS S3 bucket that holds all the images to preserve state.
4- A interface built with Vue.js and Tailwind css that lists the data from the raw file and, when it needed, from the MongoDB instance as well.
5- An api That parses the raw file and the MongoDB instance data to provide a stream of all time data that it contains.`,
      tagsList: {
        title: "Technologies",
        tags: [vue(), tailwindCss(), cloudflare(), mongoDb()],
      },
      links: [
        demo({ url: "https://hashflags.amb1.io" }),
        github({ url: "https://github.com/rhamses/hashflags" }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
