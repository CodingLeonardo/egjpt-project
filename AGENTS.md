# AGENTS.md — EGJPT Project

## Workspace

- **Package manager**: pnpm 10.20.0 (workspace root)
- **Structure**: `apps/frontend` + `apps/backend` under `pnpm-workspace.yaml`
- **Install all**: `pnpm install` from root

## Commands

| App | Dev | Build | Lint |
|-----|-----|-------|------|
| Backend | `cd apps/backend && pnpm dev` (runs `tsx app.ts`) | `pnpm build` (tsc → `dist/`) | — |
| Frontend | `cd apps/frontend && pnpm start` (expo) | `expo export` | `cd apps/frontend && pnpm lint` |

**Prisma** (backend only):
```bash
cd apps/backend
npx prisma generate --schema=prisma/schema.prisma
npx prisma migrate dev --schema=prisma/schema.prisma  # dev only
```

## Architecture

- **Frontend**: Expo (React Native 0.81) + expo-router (file-based routing, entry: `expo-router/entry`)
- **Backend**: Express 5 + TypeScript + Prisma 7 + PostgreSQL adapter
- **Entry points**: `apps/backend/app.ts` (dev), `apps/backend/server.ts` (prod via `dist/`)

## Git Workflow

- **Branch prefix**: `feature/`, `fix/`, `hotfix/`
- **Commit format**: `feat(scope): description`, `fix(scope): description`
- **PR target**: `develop` (not `main`)

## Key Constraints

- No test script at root level
- No CI workflows in `.github/`
- Frontend uses `eslint-config-expo` + Expo lint
- Backend uses plain TypeScript (no linter configured in package.json)
- Node 18+ recommended