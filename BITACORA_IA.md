# Bitácora de uso de IA

Este registro describe las sugerencias que se evaluaron en el proyecto. Las decisiones finales se comprobaron en los archivos y con las herramientas del proyecto.

## 1. Preparación del proyecto

- **Objetivo:** Crear la base solicitada con Next.js App Router, TypeScript y ESLint.
- **Prompt utilizado:** “CASO: SITIO WEB CORPORATIVO DE IKOMI PERÚ CON NEXT.JS […] usa tailwind cdn para el diseño de la pagina […] dame una recapitulacion de como se haria y que pasos habria que hacer”.
- **Resumen de la respuesta:** Se propuso crear un proyecto con `src/`, App Router y TypeScript, implementar las páginas en avances y registrar decisiones, instalación e interacciones con IA.
- **Decisión tomada:** Aceptado, con ajustes indicados por el estudiante.
- **Justificación:** La estructura coincide con las rutas del examen. Se conservó Tailwind por CDN porque se pidió expresamente, aunque no sea la opción que elegiríamos para producción.

## 2. Primera portada de IKOMI

- **Objetivo:** Reemplazar la pantalla de bienvenida de Next.js con una portada inicial del negocio y usar iconos CDN.
- **Prompt utilizado:** “listo, empieza porfavor, no utilices emojis. utiliza iconos cdn, si es posible los iconos de awesomefonts de google que ofrece”.
- **Resumen de la respuesta:** Se preparó una portada con propuesta de valor, categorías de repuestos, marcas, beneficios y contacto por WhatsApp; se integraron Tailwind Browser, DM Sans y Font Awesome desde CDN.
- **Decisión tomada:** Modificado.
- **Justificación:** Se usó Font Awesome alojado en cdnjs para los iconos y Google Fonts para la tipografía, sin emojis ni paquetes npm nuevos. No son el mismo proveedor: esta alternativa respeta el pedido de usar iconos por CDN, pero depende de servicios externos.

## 3. Carga de la tipografía CDN

- **Objetivo:** Evitar advertencias de ESLint y conservar la tipografía de Google Fonts.
- **Prompt utilizado:** Revisión técnica de la portada con `npm run lint`.
- **Resumen de la respuesta:** ESLint advirtió que la etiqueta de Google Fonts en el layout no es el patrón recomendado por Next.js. Se movió la carga de la tipografía a `globals.css`; la hoja de iconos sigue en el layout.
- **Decisión tomada:** Modificado.
- **Justificación:** La advertencia quedó asociada a la ubicación de la etiqueta, no a un error de compilación. Se ajustó la ubicación para mantener el CDN solicitado y dejar el layout más limpio.

## 4. Logotipos de las marcas

- **Objetivo:** Planificar una sección futura con logotipos de marcas de vehículos y un carrusel animado.
- **Prompt utilizado:** “adapta este "icono" que utiliza, pero mas pegado al proyecto actual, HYUNDAI […] KIA […] MITSUBISHI […] HINO […] ISUZU […] NISSAN […] tambien para la parte 3 del commit vamos a hacer que el campo donde estan los logos, salgan los iconos en movimeinto hacia a la izquierda o derecha, como un bucle […] por ahora para este 2do commit actualiza el logo”.
- **Resumen de la respuesta:** Se interpretó incorrectamente que los logos de fabricantes debían reemplazar los nombres de marcas en este avance y se descargaron sus imágenes.
- **Decisión tomada:** Rechazado.
- **Justificación:** El estudiante aclaró que los logotipos de Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan, además de sus enlaces y el carrusel, corresponden al tercer commit. Se retiraron esos archivos y se restauró la fila de nombres para mantener este avance dentro del alcance.

## 5. Logo de IKOMI

- **Objetivo:** Modernizar el logo que aparece en la página, tomando como referencia la imagen compartida, sin adelantar los logotipos de fabricantes.
- **Prompt utilizado:** "Retocar el logo”.
- **Resumen de la respuesta:** Se diseñó el logo del encabezado con IKOMI PERÚ, la frase blanca sobre fondo rojo “Repuestos de Corea y Japón” y un bloque azul con “IKM”, tomando como referencia la composición compartida.
- **Decisión tomada:** Aceptado, con una corrección de alcance.
- **Justificación:** El logo de la empresa y las marcas de vehículos son elementos distintos. La portada debe identificarse como IKOMI; el carrusel de fabricantes se implementará después del segundo commit. Se ajustó la composición porque la primera propuesta solo coincidía en el texto y no reflejaba suficientemente el distintivo visual de la referencia.

## 6. Ajustes tipográficos del logo

- **Objetivo:** Acercar el espacio entre el nombre y la frase del logo y aplicar Zen Dots al distintivo “IKM”.
- **Prompt utilizado:** “reduce un poco el espacio entre el teto ikomi y respusto de corea..., y cambia la fuente del IKM grande por [Google Fonts Zen Dots]”.
- **Resumen de la respuesta:** Se redujo el espacio vertical entre el nombre y la frase del logo hasta quitar su margen superior, y se cargó Zen Dots desde Google Fonts para el bloque “IKM”.
- **Decisión tomada:** Aceptado.
- **Justificación:** El ajuste conserva la composición acordada y aplica la fuente solicitada únicamente al distintivo, sin cambiar la tipografía del resto de la página.

## 7. Logotipos y carrusel de marcas

- **Objetivo:** Reemplazar los nombres de Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan por sus logotipos, enlazarlos con sus sitios oficiales y mostrarlos en un bucle horizontal.
- **Prompt utilizado:** “bien, procedemos con el contenido para el 3er commit, [aqui incluimos las imagenes de las marcas. tambien indicame que vas a colcar en la 'bitacora']”.
- **Resumen de la respuesta:** Se guardaron los seis logotipos en `public/marcas`, se enlazó cada uno al sitio oficial de su fabricante y se creó un carrusel CSS continuo. La segunda serie de imágenes es decorativa para lectores de pantalla; el movimiento se pausa al pasar el cursor o enfocar la sección y se desactiva si el sistema solicita reducir movimiento.
- **Decisión tomada:** Aceptado, con una sustitución para Nissan.
- **Justificación:** Los archivos locales evitan depender de un servidor externo para mostrar los logotipos. La animación CSS no requiere JavaScript ni dependencias adicionales. La imagen de Nissan propuesta reunía también las marcas Infiniti y Datsun, por lo que se eligió un logotipo independiente de Nissan. Las fuentes y enlaces de las imágenes se documentan en `DECISIONES.md`.

## 8. Páginas informativas y catálogo de productos

- **Objetivo:** Incluir en el tercer avance las páginas Nosotros, Servicios y Productos, junto con un detalle dinámico para cada producto de ejemplo.
- **Prompt utilizado:** “hagamos que la 3, 4 y 5 sean uno solo. haz los dos restante, esos 3, seran el comit 3”.
- **Resumen de la respuesta:** Se consolidaron esos avances en el commit 3. Se añadieron las rutas `/nosotros`, `/servicios`, `/productos` y `/productos/[producto]`, se reutilizaron el encabezado y el pie de página, y se agregó un catálogo estático de ejemplo con enlaces de consulta por WhatsApp.
- **Decisión tomada:** Aceptado.
- **Justificación:** Mantener juntas estas partes entrega una navegación utilizable de extremo a extremo sin adelantar la página independiente de Marcas ni la de Contacto, que quedan para etapas posteriores. El catálogo indica que es demostrativo y solicita confirmar compatibilidad; no inventa existencias ni precios. Los detalles de producto se generan estáticamente desde una única lista y las rutas desconocidas usan la respuesta 404 de Next.js.

## 9. Páginas de Marcas y Contacto

- **Objetivo:** Completar el cuarto avance con páginas independientes para las marcas y el contacto, y hacer que estén disponibles desde la navegación.
- **Prompt utilizado:** “ya esta la 3, vamos con el contenido para la 4 […] el examen solicita, un Readme […] un archivo de decisiones […] y un archivo que se escriba qué cosa se le pidió a la IA”.
- **Resumen de la respuesta:** Se creó `/marcas` con los logotipos y enlaces a los sitios oficiales, y `/contacto` con WhatsApp, ubicación general de Trujillo y orientación sobre los datos útiles para cotizar. Se actualizaron la navegación superior y el pie de página; la selección de una marca lleva al catálogo filtrado. Se centralizó la lista de marcas y se ajustó el menú móvil para evitar desbordamiento horizontal.
- **Decisión tomada:** Aceptado.
- **Justificación:** La página de marcas reutiliza los logotipos y la lista compartida con la portada. El filtro por marca muestra los productos de ejemplo asociados. El contacto utiliza el número de WhatsApp ya presente en el proyecto y un enlace general a Trujillo; no inventa correo, dirección exacta ni formulario conectado.

## 10. Catálogo de productos y guía del proyecto

- **Objetivo:** Completar el catálogo con el contenido compartido y preparar el README con los pasos para instalar y ejecutar el sitio.
- **Prompt utilizado:** “listo, todo eso en el commit 5 [...] incluye los productos. no hace falta que verifiques si son reales o no, es solo para el relleno. y dime, que vas a registrar en la bitacora, no lo registres sin antes decirme que vas a colocar ahi”.
- **Resumen de la respuesta:** Se incorporaron 12 fichas demostrativas con categoría, nombre, referencia, marcas, aplicación, descripciones e imagen local. Se habilitaron filtros por marca y categoría, se ampliaron las páginas de detalle y se documentaron la instalación, los comandos, las rutas y la estructura en el README. Antes de registrar esta entrada, se informó al estudiante su objetivo, pedido, resumen y decisión.
- **Decisión tomada:** Aceptado como contenido de relleno; no se verificó la autenticidad de las fichas.
- **Justificación:** El objetivo es poblar y probar visualmente el catálogo. Las aplicaciones y códigos permanecen referenciales, las imágenes se identifican como ejemplos, y no se publican precio ni stock. Las fuentes de las imágenes se conservan en los datos de producto y en `DECISIONES.md`.
