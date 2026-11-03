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
| Lista de marcas compartida por la portada y la página Marcas | Mantener dos listas de logotipos independientes | Una sola fuente de datos mantiene uniformes los nombres, imágenes y enlaces oficiales. Desde la página se puede consultar el catálogo filtrado por marca. |
| Página de Contacto con WhatsApp y ubicación general | Añadir un formulario sin servicio que lo procese o publicar datos no confirmados | WhatsApp ya es el canal de consulta utilizado en el sitio. Se indica Trujillo, La Libertad sin inventar una dirección exacta, correo u horario. |
| Enlace y teléfono de WhatsApp centralizados en un módulo de datos | Repetir el número y construir el enlace por separado en cada página | Una función compartida codifica el mensaje de consulta y mantiene uniforme el número usado por la navegación, el catálogo y Contacto. |
| Fichas e imágenes demostrativas para poblar el catálogo | Mostrar precios o existencias no proporcionados | Se incorporan los 12 ejemplos compartidos para probar tarjetas, filtros por marca y categoría, y páginas de detalle. Aplicaciones y códigos son referenciales, las imágenes son de referencia, y no se afirma que haya inventario confirmado. |
| Fotografías guardadas en `public/productos/` y fuentes enlazadas desde cada detalle | Solicitar imágenes a los servidores originales en cada visita | Los archivos locales permiten que las páginas del catálogo no dependan del tiempo de respuesta de los sitios externos. Cada detalle conserva el enlace de origen de su imagen de referencia. |
| README en español con instalación, comandos, rutas y estructura | Conservar el README genérico de Next.js | La guía describe cómo ejecutar este proyecto y dónde modificar las rutas, componentes y datos del catálogo. |

## Fuentes de los logotipos

| Marca | Archivo local | Fuente de la imagen |
|---|---|---|
| Hyundai | `public/marcas/hyundai.svg` | [Wikimedia Commons: Hyundai Motor Company logo](https://commons.wikimedia.org/wiki/File:Hyundai_Motor_Company_logo.svg) |
| Kia | `public/marcas/kia.png` | [Wikimedia Commons: Kia-logo.png](https://commons.wikimedia.org/wiki/File:Kia-logo.png) |
| Mitsubishi Motors | `public/marcas/mitsubishi.png` | [Wikimedia Commons: Mitsubishi Motors logo 2017](https://commons.wikimedia.org/wiki/File:Mitsubishi_Motors_logo_2017.png) |
| Hino | `public/marcas/hino.webp` | [Car Brand Names: Hino](https://carbrandnames.com/es/marcas/hino/) |
| Isuzu | `public/marcas/isuzu.svg` | [Wikimedia Commons: Isuzu wordmark](https://commons.wikimedia.org/wiki/File:Isuzu_wordmark.svg) |
| Nissan | `public/marcas/nissan.svg` | [Wikimedia Commons: Nissan Motor Corporation 2020 logo](https://commons.wikimedia.org/wiki/File:Nissan_Motor_Corporation_2020_logo.svg) |

## Imágenes de referencia del catálogo

Los enlaces siguientes corresponden a las imágenes compartidas para el
contenido demostrativo. Las fichas enlazan a la fuente desde su detalle.

| Producto | Archivo local | Fuente compartida |
|---|---|---|
| Filtro de aceite Hyundai | `public/productos/filtro-aceite-hyundai.webp` | [Imagen de referencia](https://image.made-in-china.com/202f0j00jNfcGQmWEUkw/Reasonable-Prices-Auto-Engine-Oil-Filter-26300-35503-26300-35500-26300-35501-26300-35504-for-Engine-Protected-Hyundai-KIA.webp) |
| Filtro de aceite Hino | `public/productos/filtro-aceite-hino.jpg` | [Imagen de referencia](https://www.hhgautoparts.com/data/prod/1694936320_156072210l3.jpg) |
| Filtro de aire Hino | `public/productos/filtro-aire-hino.jpg` | [Imagen de referencia](https://pt.filters-king.com/uploadfile/202301/29/e299e333f63114d593a274b5ab04d8db.JPG) |
| Filtro de aceite Nissan / Mitsubishi | `public/productos/filtro-aceite-nissan-mitsubishi.jpg` | [Imagen de referencia](https://down-my.img.susercontent.com/file/my-11134207-23020-102cufydy6mv59) |
| Disco de embrague Hino | `public/productos/disco-embrague-hino.webp` | [Imagen de referencia](https://cbtautoparts.com/cdn/shop/files/He774c335356d4a60b75ad84d8f04d62eA.webp?v=1757427727&width=1080) |
| Disco de embrague Isuzu | `public/productos/disco-embrague-isuzu.jpg` | [Imagen de referencia](https://www.japanesetruckspareparts.com/photo/pl133676289-factory_direct_sale_transmission_clutch_disc_japanese_truck_clutch_parts_for_isuzu_4jj1_nlr85_8980370042_8_98037004_2.jpg) |
| Rodamiento de desembrague | `public/productos/rodamiento-embrague-multimarca.jpg` | [Imagen representativa](https://images.2407.pl/media/images/products/2022/08/2022-27-08_23-02-32_13790853.jpg) |
| Zapatas de freno Hino | `public/productos/zapatas-freno-hino.jpg` | [Imagen de referencia](https://image.made-in-china.com/202f0j00vRkMwWhrHUcT/High-Quality-Hino-Brake-Shoe-Rear-47431-1240.jpg) |
| Pastillas de freno Hyundai / Kia | `public/productos/pastillas-freno-hyundai-kia.webp` | [Imagen de referencia](https://image.made-in-china.com/203f0j00irFePfataBqo/Wholesale-Price-Car-Accessory-Auto-Parts-OEM-ODM-58302-17A00-Ceramic-Disc-Front-Brake-Pads-for-Hyundai-Toyota-BMW-Chery-Geely-Byd-KIA.webp) |
| Amplificador de freno | `public/productos/amplificador-freno-nissan.jpg` | [Imagen de referencia](https://www.japanesetruckspareparts.com/photo/pl30853118-nissan_ud_mc828264_truck_air_brake_system_parts.jpg) |
| Filtro de aceite Isuzu | `public/productos/filtro-aceite-isuzu.jpg` | [Imagen de referencia](https://www.niparts.com/Graphics/full/DATA_46/823061.jpg) |
| Filtro de combustible Mitsubishi | `public/productos/filtro-combustible-mitsubishi.jpg` | [Imagen de referencia](https://cdn.autodoc.de/thumb?id=16885732&lng=fr&m=0&n=0&rev=94077991) |
