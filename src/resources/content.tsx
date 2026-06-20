import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";


//edit this part
const person: Person = {
  firstName: "Taylor", 
  lastName: "kim",
  name: `Taylor kim`,
  role: "Developer and GIS Specialist",
  avatar: "/images/avatar.png",
  email: "taylorjosephkim@gmail.com",
  location: "Australia/Brisbane", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Korean"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/im-your-taylor",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/taylor-kim-742426418/",
    essential: true,
  },
  /*{
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },

  */

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} at{" "}
      <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a {person.location.split("/")[1]?.replace("_", " ")}-based {person.role.toLowerCase()} bridging the gap between complex spatial data and modern web technologies. He specializes in engineering robust, data-driven solutions and seamless interactive experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Foodring Namwon Seafood Ltd",
        timeframe: "2024 - Present",
        role: "Digital Marketing & Web Coordinator ",
        achievements: [
          <>
            Managed the corporate webpage and designed detailed product specification pages 
            to improve user experience and visibility.
          </>,
          <>
            Executed digital marketing initiatives and utilized diverse design software 
            to produce compelling online content.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/foodring2.png",
            alt: "Product page design",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/foodring4.png",
            alt: "Marketing page",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Massey University",
        timeframe: "April 2023 - July 2023",
        role: "Data Annotator (Research Assistant)",
        achievements: [
          <>
            Supported researchers in training machine learning models 
            by accurately categorising, labelling, and annotating data.
          </>,
          <>
            Assisted the BioWhere project team working with New Zealand spatial data 
            using ArcGIS Pro, QGIS, and Microsoft Office. 
          </>,
        ],
        images: [],
      },


      {
        company: "Four Seasons Architecture",
        timeframe: "July 2021 - August 2022",
        role: "Assistant Officer",
        achievements: [
          <>
            Provided comprehensive administrative support to ensure the efficient operation of the office, 
            including preparing invoices and documenting processes.
          </>,
          <>
            Managed internal and external communications by writing and distributing correspondence memos and emails.
          </>,
        ],
        images: [],
      },


      {
        company: "Downer Group",
        timeframe: "July 2020 - December 2020",
        role: "GIS Team Intern",
        achievements: [
          <>
            Collaborated with the GIS team to establish and execute complex network analysis projects.
          </>,
          <>
            Built and developed geospatial network frameworks and custom geoprocessing tools utilizing ArcGIS Pro.
          </>,
          <>
            Evaluated and enhanced cartographic representations to improve data visualization and accuracy.
          </>,
          <>
            Provided crucial technical support and drafted comprehensive documentation for internal teams.
          </>
        ],
        images: [],
      },


      {
        company: "SELF-EMPLOYED ",
        timeframe: "December 2017 - August 2018",
        role: "Private Math Tutor",
        achievements: [
          <>
            Created and administered weekly quizzes and monthly tests to accurately track and assess student progress.
          </>,
          <>
            Guided struggling students to improve their critical thinking and mathematical problem-solving skills.
          </>,
          <>
            Provided consistent encouragement to boost students' self-confidence and foster a positive learning environment.
          </>

        ],
        images: [],
      },
  
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Massey University",
        description: <>Studied Computer Science (BInfSc 2024-2026). </>,
      },
      {
        name: "Massey University",
        description: <>Studied Planning (Postgraduate Diploma 2022-2023).</>,
      },
      {
        name: "Auckland University of Technology",
        description: <>Studied Geospatial Science (Master of Science 2020-2021).</>,
      },
      {
        name: "Auckland University of Technology",
        description: <>Studied Applied Conservation & Geospatial Science [Double Major] (BSc 2017-2019).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [


      {
        title: "PROGRAMMING & IT SKILLS",
        description: (
          <>I'm familiar with Java, Python, C++, Next.js, R, JavaScript, HTML, CSS, Git, GitHub, SQL</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },

          {
            name: "Python",
            icon: "python",

          },

          {
            name: "Java",
            icon: "java",

          },

          {
            name: "R",
            icon: "r",
          },

          {
            name: "C++",
            icon: "cpp",

          },

          {
            name: "SQL",
            icon: "sql",
          },

          {
            name: "Git",
            icon: "git",
          },

          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          }

        ],
        // optional: leave the array empty if you don't want to display images
        //images: [
        //  {
        //    src: "/images/projects/project-01/cover-04.jpg",
        //    alt: "Project image",
        //    width: 16,
        //    height: 9,
        //  },
        //],
      },




      {
        title: "CLOUD & DEVELOPMENT TOOLS",
        description: (
          <>Experience with cloud platforms and development tools.</>
          
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Vercel",
            icon: "vercel",
          },
          {
            name: "Docker",
            icon: "docker",
          },

          {
            name: "IntelliJ",
            icon: "intellij",
          },

          {
            name: "VSCode",
            icon: "vscode",
          },

          {
            name: "PyCharm",
            icon: "pycharm",
          },

          {
            name: "Google Colab",
            icon: "colab",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
        ],
      },

      



      {
        title: "GEOSPATIAL & ENVIRONMENTAL ANALYSIS",
        description: (
          <>ESRI ArcGIS Pro, QGIS, Spatial Data Analysis, Cartographic Mapping</>
        ),
        tags: [
          {
            name: "ArcGIS Pro",
            icon: "arcgis",
          },
          {
            name: "QGIS",
            icon: "qgis",
          },
          {
            name: "QGIS",
            icon: "qgis",
          },

          {
            name: "Spatial Data Analysis",
            icon: "spatial",
          },

          {
            name: "Cartographic Mapping",
            icon: "mapping",
          },
        ],
        

                images: [
          {
            src: "/images/projects/project-01/esri.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
        
      },

      {
        title: "GRAPHIC DESIGN & PROTOTYPING",
        description: (
          <>Figma, Adobe Creative Suite, Clip Studio Paint, Aesprite, Microsoft Clipchamp </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },

          {
            name: "Adobe Creative Suite",
            icon: "adobe",
          },

          {
            name: "Clip Studio Paint",
            icon: "clipstudio",
          },

          {
            name: "Aesprite",
            icon: "aesprite",
          },
          {
            name: "Microsoft Clipchamp",
            icon: "clipchamp",
          },

        ],
        // optional: leave the array empty if you don't want to display images

      },



      {
        title: "ADMINISTRATION & COMMUNICATION",
        description: (
          <>Experience in administrative tasks and effective communication.</>
          
        ),
        tags: [
          {
            name: "Microsoft Office Suite",
            icon: "office",
          },
          {
            name: "Documentation",
            icon: "documentation",
          },
          {
            name: "Interdepartmental Communication",
            icon: "communication",
          }
        ],
        // optional: leave the array empty if you don't want to display images

      },



    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
