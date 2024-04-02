import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Testimonials',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/lorena.jpeg'),
      author: 'Lorena Alvarez',
      relation: 'We work together as team members at Justos',
      content:
        "I had the opportunity to work in the same squad as Rhamses during his time here at Justos. The product is regulated and complex, and Rhamses managed to grasp it quickly, understand the details, and be very cautious in ensuring that no project had loose ends. Additionally, we were in the midst of product process changes, and he embraced the new model with great responsibility and autonomy, leading the refinement and development cycle of the projects he was involved in. He has very clear and easy communication, both when things are going as planned and when they are not. We learned together from the problems that arose, and we were building a great team. It's a pleasure to be his colleague!",
      links: [linkedin({ url: 'https://www.linkedin.com/in/lorena-alvarez-a68a6371/' })],
    },
    {
      image: import('@/assets/testimonials/gilson.jpeg'),
      author: 'Gilson Abreu',
      relation: 'He was my client for many different websites we built together.',
      content:
        'I recommend Rhamses to professionals who seek quality service, punctuality, and honesty. Without a doubt, he fits the profile of a qualified professional.',
      links: [linkedin({ url: 'https://www.linkedin.com/in/abreuhost/' })],
    },
    {
      image: import('@/assets/testimonials/gui.jpeg'),
      author: 'Guilherme Schalch',
      relation: 'Long time friend and Fellow developer who we work occasionally together.',
      content:
        'Great skills on interface design, excelent on getting and translating the information at the briefings. In short words: professional.',
      links: [linkedin({ url: 'https://www.linkedin.com/in/schalch/' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
