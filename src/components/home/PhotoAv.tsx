import Image from "next/image";

// Círculo de avatar con retrato en blanco y negro (usa las clases .av / .a2 / .a3 existentes).
export default function PhotoAv({ src, className = "av" }: { src: string; className?: string }) {
  return (
    <span className={className}>
      <Image src={src} alt="" fill sizes="48px" />
    </span>
  );
}
