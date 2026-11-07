import Image from "next/image";

// Marco de navegador (escritorio) con la captura del sitio real.
export function BrowserFrame({
  src,
  url,
  alt,
  priority = false,
  sizes = "(min-width: 992px) 800px, 100vw",
  top = true,
  ratio,
}: {
  src: string;
  url: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  top?: boolean;
  ratio?: number;
}) {
  let host = url;
  try {
    host = new URL(url).host.replace(/^www\./, "");
  } catch {}
  return (
    <div className="bf">
      <div className="bf-bar" aria-hidden="true">
        <span className="bf-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="bf-url">{host}</span>
      </div>
      <div className="bf-screen" style={ratio ? { aspectRatio: String(ratio) } : undefined}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectPosition: top ? "50% 0%" : "50% 50%" }} />
      </div>
    </div>
  );
}

// Marco de teléfono con la captura móvil.
export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="pf-phone">
      <div className="pf-notch" aria-hidden="true" />
      <div className="pf-pscreen">
        <Image src={src} alt={alt} fill sizes="220px" style={{ objectPosition: "50% 0%" }} />
      </div>
    </div>
  );
}
