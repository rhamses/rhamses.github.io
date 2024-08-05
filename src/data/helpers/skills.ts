import createSkillFactory from "@/data/_internals/create-skill-factory";

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const databricks = createSkillFactory({
  name: "DataBricks",
  icon: "simple-icons:databricks",
  iconColor: "#FF3621",
  url: "https://www.databricks.com/",
});

export const fastapi = createSkillFactory({
  name: "Fast API",
  icon: "simple-icons:fastapi",
  iconColor: "#009688",
  url: "https://fastapi.tiangolo.com/",
});

export const pandas = createSkillFactory({
  name: "Pandas",
  icon: "simple-icons:pandas",
  iconColor: "#150458",
  url: "https://pandas.pydata.org/",
});

export const apachespark = createSkillFactory({
  name: "Apache Spark",
  icon: "simple-icons:apachespark",
  iconColor: "#E25A1C",
  url: "https://spark.apache.org/",
});

export const numpy = createSkillFactory({
  name: "Numpy",
  icon: "simple-icons:numpy",
  iconColor: "#013243",
  url: "https://numpy.org/",
});

export const jupyter = createSkillFactory({
  name: "Jupyter",
  icon: "simple-icons:jupyter",
  iconColor: "#F37626",
  url: "https://jupyter.org/",
});

export const pydantic = createSkillFactory({
  name: "Pydantic",
  icon: "simple-icons:pydantic",
  iconColor: "#E92063",
  url: "https://docs.pydantic.dev/latest/",
});

export const pytest = createSkillFactory({
  name: "Pytest",
  icon: "simple-icons:pytest",
  iconColor: "#0A9EDC",
  url: "https://pytest.org",
});

export const python = createSkillFactory({
  name: "Python",
  icon: "simple-icons:python",
  iconColor: "#3776AB",
  url: "https://www.python.org/",
});

export const apolloGraphql = createSkillFactory({
  name: "Apollo GraphQL",
  icon: "simple-icons:apollographql",
  iconColor: "#311C87",
  url: "https://www.apollographql.com/",
});

export const astro = createSkillFactory({
  name: "Astro",
  icon: "simple-icons:astro",
  iconColor: "#FF5D01",
  url: "https://astro.build/",
});

export const angular = createSkillFactory({
  name: "Angular",
  icon: "simple-icons:angular",
  iconColor: "#FF5D01",
  url: "https://angularjs.org",
});

export const chakraUi = createSkillFactory({
  name: "Chakra UI",
  icon: "simple-icons:chakraui",
  iconColor: "#319795",
  url: "https://chakra-ui.com/",
});

export const cypress = createSkillFactory({
  name: "Cypress",
  icon: "simple-icons:cypress",
  iconColor: "#17202C",
  url: "https://www.cypress.io/",
});

export const eslint = createSkillFactory({
  name: "ESLint",
  icon: "simple-icons:eslint",
  iconColor: "#4B32C3",
  url: "https://eslint.org/",
});

export const firebase = createSkillFactory({
  name: "Firebase",
  icon: "simple-icons:firebase",
  iconColor: "#FFCA28",
  url: "https://firebase.google.com/",
});

export const jest = createSkillFactory({
  name: "Jest",
  icon: "simple-icons:jest",
  iconColor: "#C21325",
  url: "https://jestjs.io/",
});

export const mongoDb = createSkillFactory({
  name: "MongoDB",
  icon: "simple-icons:mongodb",
  iconColor: "#47A248",
  url: "https://www.mongodb.com/",
});

export const awsLambda = createSkillFactory({
  name: "AWS Lambda",
  icon: "simple-icons:awslambda",
  iconColor: "#FF9900",
  url: "https://www.aws.com/",
});

export const wordpress = createSkillFactory({
  name: "WordPress",
  icon: "simple-icons:wordpress",
  iconColor: "#21759B",
  url: "https://www.wordpress.com/",
});

export const nestJs = createSkillFactory({
  name: "NestJS",
  icon: "simple-icons:nestjs",
  iconColor: "#E0234E",
  url: "https://nestjs.com/",
});

export const nextJs = createSkillFactory({
  name: "Next.js",
  icon: "simple-icons:nextdotjs",
  iconColor: "#000000",
  url: "https://nextjs.org/",
});

export const nx = createSkillFactory({
  name: "Nx",
  icon: "simple-icons:nx",
  iconColor: "#143055",
  url: "https://nx.dev/",
});

export const pnpm = createSkillFactory({
  name: "pnpm",
  icon: "simple-icons:pnpm",
  iconColor: "#F69220",
  url: "https://pnpm.io/",
});

export const postgreSql = createSkillFactory({
  name: "PostgreSQL",
  icon: "simple-icons:postgresql",
  iconColor: "#4169E1",
  url: "https://www.postgresql.org/",
});

export const prettier = createSkillFactory({
  name: "Prettier",
  icon: "simple-icons:prettier",
  iconColor: "#F7B93E",
  url: "https://prettier.io/",
});

export const react = createSkillFactory({
  name: "React.js",
  icon: "simple-icons:react",
  iconColor: "#61DAFB",
  url: "https://reactjs.org/",
});

export const reactQuery = createSkillFactory({
  name: "React Query",
  icon: "simple-icons:reactquery",
  iconColor: "#FF4154",
  url: "https://tanstack.com/query",
});

export const sass = createSkillFactory({
  name: "SASS",
  icon: "simple-icons:sass",
  iconColor: "#CC6699",
  url: "https://sass-lang.com/",
});

export const supabase = createSkillFactory({
  name: "Supabase",
  icon: "simple-icons:supabase",
  iconColor: "#3ECF8E",
  url: "https://supabase.io/",
});

export const tailwindCss = createSkillFactory({
  name: "Tailwind CSS",
  icon: "simple-icons:tailwindcss",
  iconColor: "#06B6D4",
  url: "https://tailwindcss.com/",
});

export const bootstrapCss = createSkillFactory({
  name: "Bootstrap",
  icon: "simple-icons:bootstrap",
  iconColor: "#06B6D4",
  url: "https://getbootstrap.com",
});

export const css3 = createSkillFactory({
  name: "CSS 3",
  icon: "simple-icons:css3",
  iconColor: "#264de4",
  url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
});

export const typescript = createSkillFactory({
  name: "TypeScript",
  icon: "simple-icons:typescript",
  iconColor: "#3178C6",
  url: "https://www.typescriptlang.org/",
});

export const nodejs = createSkillFactory({
  name: "Node.js",
  icon: "simple-icons:nodedotjs",
  iconColor: "#339933",
  url: "https://nodejs.org/en",
});

export const honodev = createSkillFactory({
  name: "Hono",
  icon: "simple-icons:honodev",
  iconColor: "#E36002",
  url: "https://hono.dev",
});

export const cloudflare = createSkillFactory({
  name: "Cloudflare",
  icon: "simple-icons:cloudflare",
  iconColor: "#F38020",
  url: "https://cloudflare.com",
});

export const vue = createSkillFactory({
  name: "Vue.js",
  icon: "simple-icons:vuedotjs",
  iconColor: "#4FC08D",
  url: "https://vuejs.org/",
});
