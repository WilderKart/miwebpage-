import Btn from "@/components/Btn";

export const metadata = { title: "Página no encontrada", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="nf">
      <div>
        <h1>404</h1>
        <p>La página que buscas no existe o fue movida.</p>
        <Btn href="/" tone="white">
          Volver al inicio
        </Btn>
      </div>
    </section>
  );
}
