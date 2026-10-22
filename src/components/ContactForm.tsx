"use client";

import { useState } from "react";
import Link from "next/link";
import { site, services } from "@/data/site";

const topics = [...services.map((s) => s.title), "Otro"];

// Sin backend: arma el mensaje y lo abre en WhatsApp (o en el correo).
export default function ContactForm() {
  const [error, setError] = useState("");

  function buildMessage(f: FormData) {
    return [
      `Hola TechnoUltra, soy ${f.get("nombre")}${f.get("empresa") ? ` de ${f.get("empresa")}` : ""}.`,
      `Me interesa: ${f.get("servicio")}.`,
      `${f.get("mensaje")}`,
      f.get("email") ? `Correo: ${f.get("email")}` : "",
      f.get("celular") ? `Celular: ${f.get("celular")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function submit(e: React.FormEvent<HTMLFormElement>, via: "wa" | "mail") {
    e.preventDefault();
    const form = e.currentTarget.form ?? e.currentTarget;
    if (!form.reportValidity()) return;
    const f = new FormData(form);
    const msg = buildMessage(f);
    if (!f.get("consent")) {
      setError("Debes aceptar el tratamiento de datos para continuar.");
      return;
    }
    setError("");
    const url =
      via === "wa"
        ? `${site.whatsapp}?text=${encodeURIComponent(msg)}`
        : `mailto:${site.email}?subject=${encodeURIComponent("Consulta desde technoultra.com")}&body=${encodeURIComponent(msg)}`;
    window.open(url, via === "wa" ? "_blank" : "_self", "noopener");
  }

  return (
    <form className="form" onSubmit={(e) => submit(e, "wa")} noValidate={false}>
      <div className="field">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="empresa">Empresa (opcional)</label>
        <input id="empresa" name="empresa" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="celular">Celular o WhatsApp</label>
        <input id="celular" name="celular" type="tel" autoComplete="tel" />
      </div>
      <div className="field full">
        <label htmlFor="servicio">¿Qué necesitas?</label>
        <select id="servicio" name="servicio" defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field full">
        <label htmlFor="mensaje">Cuéntanos tu proyecto</label>
        <textarea id="mensaje" name="mensaje" required />
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" />
        <span>
          Autorizo el tratamiento de mis datos personales conforme a la <Link href="/privacidad">política de privacidad</Link> y acepto ser contactado por el equipo de {site.name}.
        </span>
      </label>
      {error && (
        <p className="note" role="alert" style={{ gridColumn: "1 / -1", color: "#c2260c" }}>
          {error}
        </p>
      )}
      <div className="form-actions">
        <button type="submit" className="btn btn-dark">
          <span>Enviar por WhatsApp</span>
          <span className="arrow">→</span>
        </button>
        <button type="button" className="btn btn-ghost" onClick={(e) => submit(e as unknown as React.FormEvent<HTMLFormElement>, "mail")}>
          Enviar por correo
        </button>
        <span className="note">Te respondemos en horario laboral.</span>
      </div>
    </form>
  );
}
