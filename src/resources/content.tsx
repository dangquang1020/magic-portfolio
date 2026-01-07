import type {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from '@/types';
import { Line, Row, Text } from '@once-ui-system/core';
import { Fragment } from 'react/jsx-runtime';

// Helper to prefix image paths with basePath for GitHub Pages
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const img = (path: string) => `${basePath}${path}`;

const person: Person = {
  firstName: 'Quang',
  lastName: 'Tran',
  name: 'Quang Tran',
  role: 'Fullstack Developer',
  avatar: img('/images/avatar.jpg'),
  email: 'dangquang1020@gmail.com',
  location: 'Asia/Ho_Chi_Minh', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['Vietnamese', 'English'], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Get in Touch</>,
  description: (
    <>Have a question or want to work together? Send me a message!</>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/dangquang1020',
    essential: true,
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/quangtran1020/',
    essential: true,
  },
  // {
  //   name: 'Instagram',
  //   icon: 'instagram',
  //   link: 'https://www.instagram.com/once_ui/',
  //   essential: false,
  // },
  // {
  //   name: 'Threads',
  //   icon: 'threads',
  //   link: 'https://www.threads.com/@once_ui',
  //   essential: true,
  // },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: '/',
  image: img('/images/og/home.jpg'),
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building and owning full-stack systems end to end</>,
  featured: {
    display: true,
    title: (
      <Row gap='12' vertical='center'>
        <Text marginRight='4' onBackground='brand-medium'>
          Featured work
        </Text>
      </Row>
    ),
    href: '/work/building-once-ui-a-customizable-design-system',
  },
  subline: (
    <>
      I’m Quang Tran, a senior full-stack developer experienced in remote
      environments, delivering scalable React and Node.js applications from idea
      to production.
    </>
  ),
};

const about: About = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Full-Stack Developer with experience building and maintaining production
        web applications using React and Node.js. Hands-on experience in API
        development, data-driven systems, and SQL performance optimization.
        Proven track record of delivering analytics platforms, e-commerce
        systems, and real estate investment tools. Experienced in remote-first
        environments, collaborating across time zones with agile workflows.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experiences',
    experiences: [
      {
        company: 'FLY',
        timeframe: '2022 - Present',
        role: 'Senior Design Engineer',
        achievements: [
          <Fragment key={1}>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </Fragment>,
          <Fragment key={2}>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </Fragment>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: img('/images/projects/project-01/cover-01.jpg'),
            alt: 'Once UI Project',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'Creativ3',
        timeframe: '2018 - 2022',
        role: 'Lead Designer',
        achievements: [
          <Fragment key={1}>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </Fragment>,
          <Fragment key={2}>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </Fragment>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: 'Figma',
            icon: 'figma',
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: img('/images/projects/project-01/cover-02.jpg'),
            alt: 'Project image',
            width: 16,
            height: 9,
          },
          {
            src: img('/images/projects/project-01/cover-03.jpg'),
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: 'Next.js',
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: 'JavaScript',
            icon: 'javascript',
          },
          {
            name: 'Next.js',
            icon: 'nextjs',
          },
          {
            name: 'Supabase',
            icon: 'supabase',
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: img('/images/projects/project-01/cover-04.jpg'),
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Education',
    institutions: [
      {
        name: 'University of Science (VNU-HCM)',
        description: <>Bachelor of Information Technology</>,
      },
    ],
  },
};

const blog: Blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: '/work',
  label: 'Work',
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: img('/images/gallery/horizontal-1.jpg'),
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: img('/images/gallery/vertical-4.jpg'),
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: img('/images/gallery/horizontal-3.jpg'),
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: img('/images/gallery/vertical-1.jpg'),
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: img('/images/gallery/vertical-2.jpg'),
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: img('/images/gallery/horizontal-4.jpg'),
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: img('/images/gallery/horizontal-2.jpg'),
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: img('/images/gallery/horizontal-5.jpg'),
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: img('/images/gallery/horizontal-6.jpg'),
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: img('/images/gallery/vertical-3.jpg'),
      alt: 'image',
      orientation: 'vertical',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
