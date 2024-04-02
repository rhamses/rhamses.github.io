import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: 'https://gravatar.com/userimage/5565716/4920433887b40884f61775ca2ce2af2f.jpeg?size=256',
  fullName: 'Rhamsés Soares',
  role: 'Senior Web Engineer',
  details: [
    { label: 'Phone', value: '+5511998726545', url: 'tel:+5511998726545' },
    { label: 'Email', value: 'hi@rhams.es', url: 'mailto:hi@rhams.es' },
    { label: 'From', value: 'São Paulo, Brazil' },
    { label: 'Salary range', value: '50 000 - 100 000 USD' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+5511998726545' },
    { label: 'Email', value: 'hi@rhams.es' },
    { label: 'LinkedIn', value: '/in/rhamses', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/rhamses', url: 'https://github.com' },
    { label: 'Website', value: 'rhams.es', url: '/', fullRow: true },
  ],
  description:
    'Software Engineer with 15+ years of experience. Loves the web and everything around it and is enthusiastic about PWAs and a11y. Has leadership skills and believes that education and communication are the bases to evolve.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Rhamses_Soares.pdf',
  },
  links: [
    github({ url: 'https://github.com/rhamses' }),
    linkedin({ url: 'https://linkedin.com/in/rhamses' }),
    twitter({ url: 'https://twitter.com/rhamses' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
