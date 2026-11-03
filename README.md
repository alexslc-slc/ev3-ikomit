# IKOMI Perú

Sitio web corporativo de demostración para IKOMI Perú, orientado a repuestos
para camiones y buses. Está desarrollado con Next.js App Router, TypeScript y
Tailwind CSS cargado desde CDN.

## Requisitos

- Node.js 20.9 o posterior.
- npm.
- Conexión a internet para cargar Tailwind CSS, Font Awesome y Google Fonts.

## Instalación y ejecución

1. Clona el repositorio y entra en su carpeta:

   ```powershell
   git clone https://github.com/alexslc-slc/ev3-ikomit.git
   cd ev3-ikomit
   ```

2. Instala las dependencias:

   ```powershell
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```powershell
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000).

Para detener el servidor, presiona `Ctrl+C` en la terminal.

## Comandos disponibles

```powershell
npm run dev    # Servidor local de desarrollo
npm run lint   # Revisión con ESLint
npm run build  # Compilación de producción
npm run start  # Servidor para la versión compilada
```

Para probar producción, ejecuta `npm run build` y después `npm run start`.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Portada, categorías y carrusel de marcas |
| `/nosotros` | Presentación y propuesta de IKOMI |
| `/servicios` | Orientación, cotizaciones y coordinación de envíos |
| `/productos` | Catálogo demostrativo con filtros por categoría y marca |
| `/productos/[producto]` | Detalle de cada producto de ejemplo |
| `/marcas` | Logotipos, enlaces oficiales y acceso al catálogo por marca |
| `/contacto` | WhatsApp y ubicación general en Trujillo |

## Estructura principal

```text
src/
├── app/                 # Rutas, metadatos y estilos globales
├── componentes/         # Encabezado, pie de página y encabezado de sección
└── datos/               # Productos, marcas y datos de contacto
public/
├── marcas/              # Logotipos usados en el carrusel y la página Marcas
└── productos/           # Imágenes locales de referencia del catálogo
```

El catálogo se mantiene en `src/datos/repuestos.ts`. Cada ficha contiene una
ruta, nombre, categoría, referencia, marcas, aplicación, descripciones e
imagen. Para añadir un producto, agrega un registro a `repuestos`; su página de
detalle se genera desde esa lista.

## Alcance del catálogo

Los 12 productos y sus imágenes son contenido demostrativo compartido para
poblar la página. Las aplicaciones y referencias se muestran como información
referencial, no como compatibilidades verificadas. No se muestran precios ni
stock y la imagen se presenta como referencia. Confirma la compatibilidad con
los datos de la unidad antes de usar la información para una compra.

## Tecnologías

- Next.js App Router y React.
- TypeScript.
- Tailwind CSS Browser CDN, según el requisito del proyecto.
- Font Awesome desde CDN.
- DM Sans y Zen Dots desde Google Fonts.

Las fuentes, iconos y estilos de Tailwind se cargan desde servicios externos;
por ello, necesitan conexión a internet. Las fotografías del catálogo y los
logotipos incluidos en `public/` se cargan localmente.
