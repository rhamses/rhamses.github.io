import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  chakraUi,
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  supabase,
  tailwindCss,
  typescript,
  vue,
  astro,
  angular,
  bootstrapCss,
  css3,
  nodejs,
  honodev,
  cloudflare,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        vue({
          level: 5,
          description:
            'My main framework. I know how to work with Nuxt, Pinia, Vuex, Vue Router, Vue Test Utils, Vue CLI and Vite. I have experience with Vue 2 and Vue 3. I know how to use Vue components and directives. I know how to use Vue 3 Composition API. I know how to use Vue 3 Teleport and Suspense',
        }),
        astro({
          level: 4,
          description:
            'Creating SSR and SSG websites, hosting in Netlify, Cloudflare Workers and Pages. Developing entire CMS inside Astro with Alpine.js. I know how to use Astro components and layouts.',
        }),
        react({
          level: 2,
          description:
            'Experience working with JSX and React components. I used more to develop Astro projects and WordPress Gutenberg blocks. I know how to use React Router and Redux.',
        }),
        angular({
          level: 2,
          description:
            'Working with templates and components. I know how to use Angular CLI and how to create a new project.',
        }),
        sass({
          level: 5,
        }),
        tailwindCss({ level: 4 }),
        bootstrapCss({ level: 5 }),
        css3({ level: 4 }),
        typescript({
          level: 4,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        nodejs({ level: 4 }),
        nestJs({
          level: 2,
        }),
        honodev({
          level: 2,
          description:
            'Similiar to Express.js - but very useful - specially when deploying to Cloudflare Workers and Pages.',
        }),
        postgreSql({ level: 2 }),
        mongoDb({ level: 4 }),
        firebase({ level: 3 }),
        cloudflare({ level: 3, description: 'Pages, Workers, D1, KV DB and all their network tools' }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [apolloGraphql(), supabase(), cypress(), pnpm()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:br', name: 'Portuguese - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
        { icon: 'circle-flags:es-variant', name: 'Spanish - B1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
