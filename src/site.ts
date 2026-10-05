// Edit this file to change your name, bio and links everywhere on the site.
export const SITE = {
  name: 'Abhimanyu Saha',
  role: 'Senior Product Designer',
  company: 'LimeChat',
  location: 'Bengaluru, India',
  tagline: 'I design calm, useful software for complicated work.',
  email: 'abhimanyu.saha1995@gmail.com',
  // Add more as { label, href }, e.g. Dribbble, Behance, Read.cv.
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhimanyusaha/' },
  ],
};

/** Prefix a site-relative path with the configured base (needed on GitHub Pages). */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
