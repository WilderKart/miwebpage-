import Link from "next/link";

// Texto con enlaces internos escritos como [texto](/ruta).
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((t, i) => {
        const m = t.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        return m ? (
          <Link key={i} href={m[2]}>
            {m[1]}
          </Link>
        ) : (
          t
        );
      })}
    </>
  );
}
