// Todo el contenido editable del sitio vive aquí.
export const GITHUB_USER = 'Tapia641';

export const PROFILE = {
  name: 'Luis Enrique Hernández Tapia',
  role: 'Software & Network Engineer',
  tagline: 'Network automation, SDN and full-stack development.',
  bio: 'I design and automate software-defined networks. Hands-on with Nokia SR Linux, Event Driven Automation (EDA) and SR OS, I turn manual network operations into reliable, code-driven workflows built with Python, Docker and Containerlab.',
};

export const LINKS = {
  github: `https://github.com/${GITHUB_USER}`,
  linkedin: 'https://www.linkedin.com/in/hetl-tapia/',
};

export const EXT = { target: '_blank', rel: 'noopener noreferrer' } as const;

// Nombres exactos de repos a mostrar primero (como "pinned").
// Si lo dejas vacío, se muestran los más destacados y recientes.
export const FEATURED_REPOS: string[] = [];

export const SKILLS = [
  { title: 'Networking / SDN', items: ['Nokia SR Linux (SRL)', 'Event Driven Automation (EDA)', 'SR OS (SROS)', 'SDN', 'Network automation'] },
  { title: 'Languages', items: ['Python', 'Bash', 'TypeScript'] },
  { title: 'Cloud / DevOps', items: ['Docker', 'Kubernetes', 'Containerlab', 'GitHub Actions', 'Git'] },
  { title: 'Frontend / Web', items: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs'] },
];
