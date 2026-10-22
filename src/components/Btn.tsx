import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  tone?: "white" | "dark" | "accent" | "ghost";
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Btn({ href, children, tone = "dark", external, className = "", onClick }: Props) {
  const cls = `btn btn-${tone} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {tone !== "ghost" && (
        <span className="arrow">
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {inner}
    </Link>
  );
}
