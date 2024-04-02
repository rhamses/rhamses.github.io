import type { Config } from "@/types/data";
import { enUS } from "date-fns/locale";
import type { ReadonlyDeep } from "type-fest";

const config = {
  i18n: {
    locale: enUS,
    dateFormat: "MM/yyyy",
    translations: {
      now: "now",
    },
  },
  meta: {
    title: "Rhamsés Soares - Senior Web Engineer",
    ogImage: "https://rhams.es/banner.png",
    description:
      "Software Engineer with 15+ years of experience. Loves the web and everything around it and is enthusiastic about PWAs and a11y. Has leadership skills and believes that education is the way to evolve",
    faviconPath: "/src/assets/my-image.jpeg",
  },
  pdf: {
    footer:
      "I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.",
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
