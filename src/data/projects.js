import projectMealsExplorer from '../assets/project-meals.jpeg'
import projectBlogCafe from '../assets/project-blog-cafe.jpeg'
import projectJournalApp from '../assets/project-journal.jpeg'
export const PROJECTS = [
  {
    id: 'meals-explorer',
    title: 'Meals Explorer',
    description:
      'A recipe discovery web app that lets users search meals, browse by category or ingredient, and explore detailed cooking instructions from around the world.',
    tags: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    image: projectMealsExplorer,
    imageVariant: 'inset-dark',
    imageAlt: 'Captura de Meals Explorer mostrando una cuadrícula de recetas con búsqueda y categorías',
    githubUrl: 'https://github.com/Pcontreras98/meals',
    liveUrl: 'https://meals-app-vue.netlify.app/',
  },
  {
    id: 'blog-cafe',
    title: 'Blog Cafe',
    description:
      'A responsive coffee blog website featuring articles, brewing tips, and educational courses with a clean and modern user experience.',
    tags: ['HTML5', 'CSS3', 'Responsive Design'],
    image: projectBlogCafe,
    imageVariant: 'inset-dark',
    imageAlt: 'Captura de Blog Cafe con hero de café, artículos y sección de cursos',
    githubUrl: 'https://github.com/Pcontreras98/HTML-blog-cafe',
    liveUrl: 'https://cafeblog-pablocontreras.netlify.app/',
  },
  {
    id: 'journal-app',
    title: 'Journal App',
    description:
      'A digital journaling platform designed to help users capture daily experiences, organize notes, and track personal progress through a simple and intuitive interface.',
    tags: ['React', 'Redux Toolkit', 'Material UI', 'Firebase Authentication'],
    image: projectJournalApp,
    imageAlt: 'Captura de Journal App con panel de entradas y vista principal del diario',
    githubUrl: 'https://github.com/Pcontreras98/journalApp',
    liveUrl: 'https://pcontreras98.github.io/journalApp/',
  },
]
