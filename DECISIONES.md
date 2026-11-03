# Decisiones del proyecto

| Opción elegida | Alternativa descartada | Justificación |
|---|---|---|
| Next.js con App Router y TypeScript | Una SPA creada solo con React y JavaScript | Las rutas basadas en archivos permiten organizar las páginas que pide el caso sin agregar un enrutador. TypeScript ayuda a detectar errores mientras trabajamos con los datos de productos. |
| Carpeta `src/` y componentes de servidor por defecto | Dejar todo en la raíz y convertir todas las páginas en componentes de cliente | La carpeta separa el código de la configuración. Las páginas informativas de IKOMI no necesitan estado en el navegador, así que pueden renderizarse en el servidor y enviar menos JavaScript. |
| Tailwind CSS cargado desde CDN | Instalar Tailwind en el proyecto o utilizar Bootstrap | Se usa el CDN porque es un requisito indicado para este trabajo y permite probar utilidades sin sumar configuración. Para una versión de producción preferiríamos instalarlo: el CDN depende de internet y procesa estilos en el navegador. Bootstrap se descartó porque sus componentes predeterminados dificultan ajustar con precisión la identidad visual de IKOMI. |
| Font Awesome desde CDN y DM Sans desde Google Fonts | Instalar una biblioteca de iconos y alojar la tipografía localmente | Los iconos de camiones, piezas y contacto hacen más reconocibles las secciones sin agregar dependencias npm. La tipografía y los iconos dependen de servicios externos; si no hay conexión, pueden no mostrarse como esperamos. |
| Logo tipográfico para IKOMI PERÚ con una línea descriptiva y acento rojo | Mantener solo el texto “IKOMI. PERÚ” de la plantilla inicial | La referencia compartida ya usa el nombre IKOMI PERÚ y la frase “Repuestos de Corea y Japón”. Mantener esos elementos y simplificar la composición hace que el encabezado represente al negocio sin confundir su identidad con los logos de fabricantes. |
| `next/image` para la imagen remota de la portada | Insertar una etiqueta `<img>` sin optimización | El componente de Next.js reserva espacio para la imagen y permite priorizar la de portada. Se autorizó en `next.config.ts` únicamente el dominio de imágenes utilizado en este prototipo. |
| Enlaces de contacto directos a WhatsApp | Un formulario que prometa enviar una cotización | El alcance actual es una página informativa y no hay un servidor que procese formularios. WhatsApp ofrece una acción de contacto funcional sin fingir que existe un sistema de cotización conectado. |
| Ubicación de IKOMI en Trujillo, La Libertad | Mantener la ubicación de Ate, Lima tomada como referencia del sitio consultado | La ubicación del proyecto debe representar el dato confirmado por el estudiante y no asumir que es la misma que aparece en otra fuente. |
| Logotipos guardados localmente y carrusel animado con CSS | Cargar imágenes desde servicios externos o instalar una biblioteca de animación | Los archivos en `public/marcas` mantienen disponibles las imágenes sin depender del servidor de origen. CSS permite repetir y pausar el movimiento sin agregar JavaScript ni dependencias; se respeta la preferencia del usuario por reducir movimiento. Cada logotipo enlaza al sitio oficial de su fabricante. |
| Encabezado y pie de página compartidos entre las rutas | Copiar el mismo bloque de navegación y marca en cada página | Los componentes reutilizables mantienen una navegación consistente y evitan que los cambios de marca tengan que repetirse en cada archivo. |
| Catálogo local de productos de ejemplo, con rutas dinámicas | Presentar precios y existencias sin una fuente de inventario conectada | Los datos se mantienen en una lista TypeScript para generar el catálogo y sus detalles. La interfaz aclara que son ejemplos, invita a confirmar compatibilidad y enlaza las consultas a WhatsApp. |
| Páginas de servidor para Nosotros, Servicios y Productos | Añadir lógica de cliente sin necesidad de interacción dinámica | El contenido es informativo y estático; App Router permite prerenderizarlo y mantener una implementación sencilla. |

## Fuentes de los logotipos

| Marca | Archivo local | Fuente de la imagen |
|---|---|---|
| Hyundai | `public/marcas/hyundai.svg` | [Wikimedia Commons: Hyundai Motor Company logo](https://commons.wikimedia.org/wiki/File:Hyundai_Motor_Company_logo.svg) |
| Kia | `public/marcas/kia.png` | [Wikimedia Commons: Kia-logo.png](https://commons.wikimedia.org/wiki/File:Kia-logo.png) |
| Mitsubishi Motors | `public/marcas/mitsubishi.png` | [Wikimedia Commons: Mitsubishi Motors logo 2017](https://commons.wikimedia.org/wiki/File:Mitsubishi_Motors_logo_2017.png) |
| Hino | `public/marcas/hino.webp` | [Car Brand Names: Hino](https://carbrandnames.com/es/marcas/hino/) |
| Isuzu | `public/marcas/isuzu.svg` | [Wikimedia Commons: Isuzu wordmark](https://commons.wikimedia.org/wiki/File:Isuzu_wordmark.svg) |
| Nissan | `public/marcas/nissan.svg` | [Wikimedia Commons: Nissan Motor Corporation 2020 logo](https://commons.wikimedia.org/wiki/File:Nissan_Motor_Corporation_2020_logo.svg) |
