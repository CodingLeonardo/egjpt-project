# CONTRIBUTING.md — Cómo contribuir

Gracias por querer contribuir a EGJPT Project (CARAVAN). A continuación se describen las indicaciones básicas para colaborar de forma ordenada.

## Antes de empezar

- **Issues primero:** abre un `Issue` describiendo el problema o la mejora que propones. Esto evita trabajos duplicados y facilita discusiones previas.

## Flujo de trabajo y branching

- **Fork & Branching:** trabaja desde un fork (o crea una rama en este repo si tienes acceso). Nombra las ramas de forma clara:
  - `feature/<descripción-corta>` para nuevas funcionalidades
  - `fix/<descripción-corta>` para correcciones de bugs
  - `hotfix/<descripción-corta>` para arreglos críticos

## Commits

- **Commits claros:** usa mensajes tipo `feat(scope): descripción corta` o `fix(scope): descripción corta`.

## Pruebas y lint

- **Pruebas y lint:** antes de abrir un PR, ejecuta linter, formateador y tests locales para asegurar calidad.

## Pull Request

- **Pull Request:** crea un PR hacia `develop` (o `main` si procede) e incluye:

  - Resumen de lo que cambia
  - Screenshots o pasos para reproducir si aplica
  - Referencias a issues relacionados

- **Revisiones:** solicita al menos una revisión de código antes de hacer merge. Atiende los comentarios y vuelve a pushear los cambios pedidos.

## Buenas prácticas

- No subas secrets ni archivos sensibles.
- Actualiza la documentación si el cambio lo requiere.
- Usa TypeScript donde corresponda y sigue `eslint`/`prettier` del proyecto.

## Contacto

Para dudas de arquitectura o decisiones técnicas, abre un Issue y etiqueta a los responsables:

- Roger (Líder General)
- Leo (Líder de Desarrollo)

¡Gracias por tu contribución! Tu ayuda mejora el proyecto.
