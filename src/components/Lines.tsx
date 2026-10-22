// Rejilla de 4 columnas que acompaña toda la página (patrón de líneas verticales).
export default function Lines() {
  return (
    <div className="lines" aria-hidden="true">
      <div className="wrap">
        <div className="grid4">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}
