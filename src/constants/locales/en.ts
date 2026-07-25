export const en = {
  'common.role': 'Programmer',
  'common.reachMeOut': 'Reach me out at',

  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.blogs': 'Blogs',
  'nav.contact': 'Contact',

  'page.home.title': 'Home',
  'page.home.description': 'Introduction and Professional Career mgalihpp',
  'page.about.title': 'About',
  'page.about.description': 'Introduction and Professional Career mgalihpp',
  'page.projects.title': 'Projects',
  'page.projects.description':
    'All my projects and projects I have been working on',
  'page.blogs.title': 'Blogs',
  'page.blogs.description': 'My thoughts and writings about web development',
  'page.contact.title': 'Contact',
  'page.contact.description': 'Reach me out.',

  'hero.greeting': 'Call me',
  'hero.role': 'Fullstack Developer & Laboratory Assistant',
  'hero.study': 'Information Systems student at Universitas Gunadarma',
  'hero.build': 'I build',
  'hero.buildHighlight': 'something interesting',
  'hero.working': 'Working mostly with React.js, Next.js, and TypeScript',
  'hero.available': 'Available for hire',
  'hero.contactMe': 'Contact Me',

  'career.title': 'Career',
  'career.downloadCv': 'Download CV',

  'education.title': 'Education',

  'stacks.title': 'Stacks',

  'about.text': `Hi! I'm Galih, an Information Systems student at Universitas Gunadarma.
    I started learning web development at the beginning of the pandemic, starting from
    web development forums and then going deeper through various videos, especially on
    the frontend side. These days I mostly build web applications with React.js and
    Next.js, while also assisting training and certification participants as a
    laboratory assistant.`,

  'about.contact.title': 'Contact',
  'about.contact.text': `Feel free to reach out if you require my insights on web development,
    particularly when it comes to frontend tasks. I'm more than willing to assist you.
    You can locate my email in the footer of the page.`,

  'error.notFound': "This page doesn't exist!",
  'error.unauthorized': "You aren't authorized to see this",
  'error.serviceDown': "Looks like our API is down",
  'error.teapot': '🫖',
  'error.default': 'Something went wrong',
  'error.uhOh': 'Uh-oh!',
  'error.backToHome': 'Back to home',
  'error.goToHome': 'Go to home',

  'blog.search': 'Search',
  'blog.searchPlaceholder': 'Search...',
  'blog.chooseTopic': 'Choose topic:',
  'blog.notFound': 'Sorry, not found',
  'blog.onThisPage': 'On This Page',
  'blog.postNotFound': 'Blog not found',
  'blog.back': 'Back',
  'blog.writtenOn': 'Written on',
  'blog.by': 'by',
  'blog.minRead': 'min read',
  'blog.views': 'views',
  'blog.copyCode': 'Copy code to clipboard',
  'blog.readMore': 'Read more about the {{title}} article',
  'blog.imageOf': 'Image of {{title}}',
  'blog.altAvatar': '{{name}} avatar',

  'contact.findMeOn': 'Find me on',

  'project.visit': 'Visit {{name}} website demo',
  'project.imagePreview': '{{name}} preview image',
  'project.imagePlaceholder': '{{name}} placeholder image',
  'project.imageOf': 'Project image of {{name}}',

  'common.themeButton': 'Theme Button',

  'language.toggle': 'Change language',
} as const;

export type TranslationKey = keyof typeof en;
