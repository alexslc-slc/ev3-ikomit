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
