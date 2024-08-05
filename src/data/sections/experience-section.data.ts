import { apachespark, pydantic } from "./../helpers/skills";
import type { ExperienceSection } from "@/types/sections/experience-section.types";
import type { ReadonlyDeep } from "type-fest";
import { website } from "../helpers/links";
import {
  angular,
  awsLambda,
  bootstrapCss,
  eslint,
  jest,
  nodejs,
  prettier,
  typescript,
  vue,
  wordpress,
  apachespark,
  pandas,
  numpy,
  python,
  jupyter,
  pytest,
  fastapi,
  databricks,
} from "../helpers/skills";

const experienceSectionData = {
  config: {
    title: "Work experience",
    slug: "experience",
    icon: "fa6-solid:suitcase",
    visible: true,
  },
  jobs: [
    {
      role: "Data Engineer",
      company: "Vert Capital",
      image: import("@/assets/logos/logo-vert.svg"),
      dates: [new Date("2023-3"), null],
      description: `
        ⇢ Building integrations of thirdy-party vendors with our data lake infrastructure
        ⇢ Developing jobs on databricks to creating dynamic views for each client
        ⇢ Report direct to the manager about technical KPIs
        ⇢ Working closely with the business coordinators and P.Os to streamline the communications between IT and Business
        ⇢ Implementing new ways to develop and worflows alongside other leaders as I teach them as well. 
      `,
      tagsList: {
        title: "Technologies",
        tags: [
          python(),
          pytest(),
          fastapi(),
          apachespark(),
          pandas(),
          numpy(),
          databricks(),
          jupyter(),
          pydantic(),
        ],
      },
      links: [website({ url: "https://vert-capital.com" })],
    },
    {
      role: "Technical Leader",
      company: "Seguros Unimed",
      image: import("@/assets/logos/seguros-unimed.jpg"),
      dates: [new Date("2023-3"), new Date("2023-7")],
      description: `
        ⇢ In charge to assist the teams technically with new deployments
        ⇢ Working closely with the infrastructure team to finetune the lifecycle of a sprint
        ⇢ Report direct to the manager about technical KPIs
        ⇢ Working closely with the business coordinators and P.Os to streamline the communications between IT and Business
        ⇢ Training the team in new technologies and methodologies
        ⇢ Working closely with the architecture team to define the best practices and patterns
      `,
      tagsList: {
        title: "Technologies",
        tags: [angular(), typescript(), awsLambda()],
      },
      links: [website({ url: "http://segurosunimed.com.br" })],
    },
    {
      role: "Senior Back-end Engineer",
      company: "Justos",
      image: import("@/assets/logos/justos.jpeg"),
      dates: [new Date("2022/10"), new Date("2023/2")],
      description: `
        ⇢ Development and improvement of new leads and onboarding API
        ⇢ Development of new tests and fixing old tests with new requirements from the business team.
        ⇢ Working alongside QA and other engineers to tackle problems in sync.
        ⇢ Working under the Shape Up method to deliver more consistent and well thought out work.
      `,
      tagsList: {
        title: "Technologies",
        tags: [nodejs(), prettier(), eslint(), jest()],
      },
      links: [website({ url: "https://www.justos.com.br" })],
    },
    {
      role: "Senior Software Developer - Tech Lead",
      company: "Qualicorp",
      image: import("@/assets/logos/qualicorp.jpeg"),
      dates: [new Date("2019/5"), new Date("2022/10")],
      description: `
        ⇢ Development of new features on a broad range of softwares.
        ⇢ Support of legacy code and production ready systems
        ⇢ Started mentoring a few intermediate developers so we could move faster.
        ⇢ In charge of all technical decisions around the team's projects.
        ⇢ Working alongside managers when hiring new members for the team.
        ⇢ In charge of training the new members.
        ⇢ Represent the tech team on squads meetings, especially the ones involving success metrics.
      `,
      tagsList: {
        title: "Technologies",
        tags: [vue(), bootstrapCss(), nodejs(), awsLambda()],
      },
      links: [website({ url: "https://www.qualicorp.com.br" })],
    },
    {
      role: "Full Stack Developer",
      company: "Creative House",
      image: import("@/assets/logos/ch.jpeg"),
      dates: [new Date("2013/10"), new Date("2019/05")],
      description: `
        ⇢ Leader for the web operations and responsible for communications among the management and clients about strategy and solutions.
        ⇢ Full stack development using Vuejs, Angular 1.x, jQuery, Browser APIs.
        ⇢ Back end development using different PHP frameworks: Slim, Laravel, Wordpress and custom solutions.
      `,
      tagsList: {
        title: "Technologies",
        tags: [vue(), bootstrapCss(), wordpress()],
      },
      links: [website({ url: "https://www.creativehouse.com.br" })],
    },
    {
      role: "UX Developer",
      company: "Tafner Software Solutions",
      image: import("@/assets/logos/tafner.jpeg"),
      dates: [new Date("2008/7"), new Date("2013/5")],
      description: `
        ⇢ Part of the back end development team, responsible for designing and running A/B tests on interfaces.
      `,
      tagsList: {
        title: "Technologies",
        tags: [wordpress()],
      },
      links: [website({ url: "https://www.tafner.net" })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
