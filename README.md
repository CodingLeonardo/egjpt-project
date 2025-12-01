# EGJPT Project (CARAVAN) — El Gran Jodido Proyecto de Transporte

Aplicación móvil para facilitar el acceso al transporte público terrestre de forma segura, organizada y eficiente en Venezuela.

**Resumen rápido**: este repositorio contiene el código del proyecto EGJPT (apps frontend y backend). El objetivo es construir una app móvil (React Native) con un backend en Node.js y servicios auxiliares (Prisma, Firebase/Supabase, Google Maps/Mapbox, Stripe/Pago Móvil).

**Cómo usar este repositorio**

- **Código fuente:** `apps/frontend` y `apps/backend`
- **Gestor de paquetes:** `pnpm` (workspace)
- **Base de datos / ORM:** Prisma (`apps/backend/prisma/schema.prisma`)

**Requisitos locales**

- Node.js (recomendado >= 18.x)
- Git
- pnpm (instalar globalmente si no está):

```bash
npm install -g pnpm
```

**Clonar el repositorio**

```bash
# SSH
git clone git@github.com:CodingLeonardo/egjpt-project.git

# HTTPS
git clone https://github.com/CodingLeonardo/egjpt-project.git

cd egjpt-project
```

**Instalar dependencias (monorepo / workspace)**

Desde la raíz del repositorio:

```bash
pnpm install
```

Esto instalará las dependencias para todo el workspace (`apps/frontend`, `apps/backend`, etc.).

Si prefieres instalar solo un paquete concreto, navega a la carpeta y ejecuta `pnpm install` ahí:

```bash
cd apps/backend
pnpm install

# en otra terminal
cd apps/frontend
pnpm install
```

**Configuración de variables de entorno**

Cada servicio puede requerir su propio `.env`. Por ejemplo, para el backend crea `apps/backend/.env` (o copia `apps/backend/.env.example` si existe) y añade las variables mínimas:

```env
# apps/backend/.env
DATABASE_URL="postgresql://user:pass@host:5432/dbname"
GOOGLE_MAPS_API_KEY=your_google_maps_key
STRIPE_SECRET_KEY=sk_test_...
NODE_ENV=development
PORT=3000
```

Notas:

- Asegúrate de no subir secrets al repositorio.
- Ajusta `DATABASE_URL` según tu motor (Postgres, MySQL, SQLite para desarrollo).

**Prisma (si usas Prisma en `apps/backend`)**

Generar el cliente de Prisma y (si aplica) ejecutar migraciones:

```bash
cd apps/backend
npx prisma generate --schema=prisma/schema.prisma
# Si necesitas aplicar migraciones locales (development):
npx prisma migrate dev --schema=prisma/schema.prisma
```

**Arrancar la aplicación en desarrollo**

Backend (ejecuta en una terminal):

```bash
cd apps/backend
pnpm run dev    # o pnpm start según scripts del package.json
```

Frontend (ejecuta en otra terminal):

```bash
cd apps/frontend
pnpm run dev    # adaptarlo según el framework (React Native / Expo / etc.)
```

Si usas Expo para el frontend, sigue las instrucciones dentro de `apps/frontend/README.md` (si existe).

**Tests, lint y formateo**

Comandos comunes (pueden variar por paquete; revisa `package.json` en cada app):

```bash
pnpm -w test      # si el workspace tiene script test global
pnpm -w lint
pnpm -w format
```

O ejecuta los scripts dentro de cada paquete:

```bash
cd apps/backend && pnpm test
cd apps/frontend && pnpm test
```

**Cómo contribuir**

Para conocer el proceso de contribución completo, por favor consulta el archivo `CONTRIBUTING.md` en la raíz del proyecto. Allí encontrarás el flujo de trabajo recomendado, formato de commits, checklist para PRs, instrucciones para ejecutar tests y linters, y el contacto de los responsables.

Resumen rápido:

- Abre un `Issue` antes de trabajar en cambios importantes.
- Crea ramas con nombres claros: `feature/...`, `fix/...`, `hotfix/...`.
- Ejecuta linter y tests localmente antes de abrir PR.
- Abre un PR hacia `develop` (o `main` según corresponda) y sigue la checklist del PR.
  Consulta `CONTRIBUTING.md` para más detalles y ejemplos.

**Estilo de código**

- TypeScript para backend/frontend cuando aplique.
- Sigue reglas de `eslint` y `prettier` del proyecto.

**Responsables / Contacto**

- **Líder General & Desarrollador:** Roger
- **Líder de Desarrollo:** Leo
- **Desarrollador:** José
- **UI/UX Designer & Desarrollador:** Said
- **Proximamente:** más colaboradores.

Para preguntas sobre arquitectura o decisiones técnicas, abre un issue o contacta al líder de desarrollo.
