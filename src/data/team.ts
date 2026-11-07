export type Author = { slug: string; name: string; role: string; photo: string };

// Firmas del blog (equipo editorial) con retrato en blanco y negro.
export const authors: Author[] = [
  { slug: "laura-valencia", name: "Laura Valencia", role: "Editora SEO", photo: "/team/laura-valencia.jpg" },
  { slug: "andres-mejia", name: "Andrés Mejía", role: "Editor web", photo: "/team/andres-mejia.jpg" },
  { slug: "natalia-cardenas", name: "Natalia Cárdenas", role: "Editora de marca", photo: "/team/natalia-cardenas.jpg" },
  { slug: "camilo-restrepo", name: "Camilo Restrepo", role: "Editor UI/UX", photo: "/team/camilo-restrepo.jpg" },
];

export const authorOf = (slug: string) => authors.find((a) => a.slug === slug) ?? authors[0];
