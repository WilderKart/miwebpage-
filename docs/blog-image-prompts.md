# Imágenes del blog: prompts para ChatGPT (Images)

Guarda cada imagen con el **nombre exacto** en `web/public/blog/` (reemplaza el archivo de relleno que hay ahora).

- Formato: JPG, **1600 × 1200 px** (4:3, horizontal). Si ChatGPT entrega otra proporción, pide "formato 4:3 horizontal".
- Sin texto, sin logos, sin marcas de agua dentro de la imagen.
- Composición: el elemento principal **centrado** y ocupando el centro de la imagen. La web recorta la imagen a formatos distintos (rectangular ancho en la cabecera del artículo, cuadrado en el listado y muy ancho en una de las tarjetas de la home), así que lo importante debe quedar en el 60 % central.
- Estilo común (pégalo al final de cada prompt): *fotografía editorial a color, iluminación de estudio suave, fondo limpio y minimalista, paleta cálida con acentos en naranja (#ff6a00), profundidad de campo, alta nitidez, aspecto premium y moderno, sin texto, formato horizontal 4:3, 1600x1200.*

---

## Las 4 de la home (prioridad)

Las imágenes 1, 2 y 4 ya están puestas. Faltan las **dos nuevas** (marcadas NUEVA): hoy tienen una imagen de relleno.

### 1. `cuanto-cuesta-una-pagina-web-en-colombia.jpg` (Cuánto cuesta una página web)
Escritorio de trabajo visto desde arriba en ángulo de 45°: un portátil abierto con el boceto (wireframe) de una página web en pantalla, al lado una calculadora, una libreta con anotaciones de presupuesto, algunas monedas y un billete colombiano, y un celular con el sitio web en versión móvil. Un lápiz y una taza de café. Detalles en naranja (la libreta o la calculadora). Sensación de "estoy cotizando mi página web".

### 2. `seo-local-en-cali-como-aparecer-en-google.jpg` (SEO)
Pantalla de portátil grande en primer plano con un mapa de ciudad desenfocado y varios pines de ubicación; un pin naranja destacado en el centro, con cinco estrellas flotando encima. Una lupa de cristal sobre la pantalla. Fondo de oficina luminosa y desenfocada. Sensación de "mi negocio aparece primero en el mapa".

### 3. `como-elegir-una-agencia-de-diseno-web-en-cali.jpg` (Cómo elegir una agencia de diseño web) — NUEVA
Sala de reuniones luminosa y moderna: un equipo de tres personas de una agencia digital (una mujer y dos hombres, ropa casual elegante) revisa con una clienta el diseño de un sitio web en un portátil grande y en una pantalla de pared. Sobre la mesa: tablet con wireframes, libreta, taza de café y post-its. Ambiente colaborativo y profesional; detalles en naranja (post-its, taza o silla). Sensación de "elegir con confianza a quién contratar".

### 4. `branding-para-pymes-elementos-de-identidad.jpg` (Branding)
Mesa de diseñador vista desde arriba con los elementos de una identidad de marca: abanico de paletas de color (con un naranja protagonista), muestras de tipografía impresas, tarjetas de presentación sin texto legible, una libreta con boceto de logo, un sobre y una bolsa de papel con un símbolo abstracto sin letras. Todo ordenado con simetría y colores armónicos. Sensación de "marca coherente y profesional".

---

## Artículos adicionales (para completar el blog)

### 5. `pagina-web-o-tienda-online-cual-necesita-tu-negocio.jpg` (Página web o tienda online)
Escena dividida de forma natural en dos mitades: a la izquierda un portátil mostrando un sitio web corporativo limpio; a la derecha un celular con una tienda online (productos, botón de carrito) y cajas de envío de cartón con cinta naranja. Un carrito de compras pequeño en el centro. Sensación de "dos caminos para vender".

### 6. `perfil-de-negocio-en-google-como-aparecer-en-google-maps.jpg` (Perfil de negocio en Google)
Mano sosteniendo un celular que muestra la ficha de un negocio en un mapa: foto del local, cinco estrellas y botones de llamar y cómo llegar (sin texto legible). Detrás, una calle de ciudad colombiana desenfocada con una fachada de local. Un pin naranja gigante flotando sobre el celular.

### 7. `diseno-ui-ux-que-es-y-como-aumenta-las-ventas-de-tu-pagina-web.jpg` (Diseño UI/UX) — NUEVA
Escritorio de diseñadora UI/UX visto en ángulo: monitor grande con la maqueta de una página web en Figma (sin texto legible), tablet con un prototipo móvil, hojas con wireframes dibujados a mano y un mapa de recorrido de usuario con notas adhesivas. Stylus, paleta de colores y una taza. Luz natural de ventana, colores limpios con acentos naranja. Sensación de "diseño pensado para vender".

### 8. `logo-o-identidad-de-marca-que-incluye-un-manual-de-marca.jpg` (Manual de marca)
Manual de marca impreso, abierto sobre una mesa: páginas con variaciones de un logo abstracto (sin letras), retícula de construcción, paleta de colores con códigos y ejemplos de aplicación en papelería. Una regla, un marcador y una taza. Tonos neutros con un naranja como acento. Sensación de "sistema de marca documentado".

---

## Textos alternativos (ya están en el código, no hace falta cambiarlos)
Cada imagen tiene su texto `alt` descriptivo en `src/data/blog.ts` (campo `imageAlt`). Si cambias mucho la escena, ajústalo ahí.
