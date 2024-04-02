import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Data Science',
      institution: 'Cruzeiro do Sul',
      image: import('@/assets/logos/cruzeiro.png'),
      dates: [new Date('2023.1'), new Date('2025.12')],
      description: 'Associate Degree in Data Science',
      links: [website({ url: 'https://cruzeirodosulvirtual.com.br' })],
    },
    {
      title: 'Marketing - Bachelor',
      institution: 'Anhembi Morumbi',
      image: import('@/assets/logos/anhembi.jpeg'),
      dates: [new Date('2013.1'), new Date('2016.12')],
      description: "Bachelor's degree. Specialization in marketing.",
      links: [website({ url: 'https://portal.anhembi.br' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
