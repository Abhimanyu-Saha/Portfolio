// Edit this file to change your name, bio and links everywhere on the site.
export const SITE = {
  name: 'Abhimanyu Saha',
  role: 'Product Designer',
  tagline: 'I design calm, useful software for complicated work.',
  email: 'hello@example.com', // TODO: your public contact email
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
