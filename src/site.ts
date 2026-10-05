// Edit this file to change your name, bio and links everywhere on the site.
export const SITE = {
  name: 'Abhimanyu Saha',
  role: 'Product Designer',
  tagline: 'I design calm, useful software for complicated work.',
  email: 'hello@example.com', // TODO: your public contact email
  // TODO: replace with your real profile URLs.
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Dribbble', href: 'https://dribbble.com/' },
    { label: 'Read.cv', href: 'https://read.cv/' },
  ],
};

/** Prefix a site-relative path with the configured base (needed on GitHub Pages). */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
