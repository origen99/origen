# Implementation Plan: Home de Origen (V1)

**Branch**: `001-definir-home-origen` | **Date**: 2026-04-25 | **Spec**: `/specs/001-definir-home-origen/spec.md`
**Input**: Feature specification from `/specs/001-definir-home-origen/spec.md`

## Summary

Construir la primera entrega de Origen enfocada exclusivamente en la Home, con mensaje claro, tono neutral no tribal y flujo de contribución inicial vía GitHub Issues. La aproximación técnica será un sitio estático en TypeScript usando Astro con contenido en markdown/mdx, validaciones básicas de calidad documental en CI y una arquitectura preparada para crecer hacia documentación colaborativa.

## Technical Context

**Language/Version**: TypeScript 5.x + Node.js 20 LTS  
**Primary Dependencies**: Astro 4.x, @astrojs/mdx, Zod (validación de frontmatter), markdownlint-cli, lychee  
**Storage**: N/A (sitio estático basado en archivos markdown dentro del repositorio)  
**Testing**: Vitest (unitario ligero para utilidades), Playwright opcional para smoke e2e de Home, validaciones CI de markdown/enlaces/build  
**Target Platform**: Web estática desplegada en CDN (GitHub Pages, Vercel Static o Netlify)  
**Project Type**: Aplicación web estática de documentación  
**Performance Goals**: LCP < 2.5s en móvil, CLS < 0.1, tamaño JS inicial mínimo (enfoque zero-JS por defecto)  
**Constraints**: Sin backend propio en esta fase, sin chat IA en producción, contenido comprensible para audiencia no técnica, evitar lenguaje ideológico explícito como mecanismo de persuasión  
**Scale/Scope**: V1 cubre solo Home y flujo de contribución por Issues; soporte para crecimiento de colecciones markdown (tutorials/how-to/reference/explanation)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Estado actual: `.specify/memory/constitution.md` está sin ratificar (plantilla con placeholders), por lo que no hay principios ejecutables formales.

Gates provisionales aplicados para esta planificación:
- Gate 1: Alcance acotado a Home V1 y exclusión de features fuera de fase (PASS)
- Gate 2: Entregables verificables y medibles (PASS)
- Gate 3: Documentación colaborativa y trazabilidad de decisiones (PASS)
- Gate 4: No contradicción con el spec aprobado y clarificado (PASS)

Resultado pre-Phase 0: PASS provisional con riesgo registrado por falta de constitución ratificada.

Re-check post-Phase 1:
- Artefactos de diseño generados y coherentes con el spec (PASS)
- Contratos documentados para interfaz de Home y contribución vía Issues (PASS)

## Project Structure

### Documentation (this feature)

```text
specs/001-definir-home-origen/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── home-content-contract.md
│   └── contribution-issue-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
web/
├── astro.config.mjs
├── package.json
├── src/
│   ├── pages/
│   │   └── index.astro
│   ├── components/
│   │   ├── HomeHero.astro
│   │   ├── PrinciplesBlock.astro
│   │   └── ContributionCTA.astro
│   ├── content/
│   │   ├── home/
│   │   │   └── index.md
│   │   ├── docs/
│   │   ├── tutorials/
│   │   ├── how-to/
│   │   ├── reference/
│   │   └── explanation/
│   └── content.config.ts
└── tests/
    ├── unit/
    └── e2e/

.github/
├── ISSUE_TEMPLATE/
│   └── documentation-proposal.yml
└── workflows/
    └── docs-quality.yml
```

**Structure Decision**: Se elige arquitectura de aplicación web estática en `web/` (Astro + markdown/mdx) para priorizar claridad de contenido, contribución simple y despliegue rápido sin backend. La estructura separa claramente contenido, componentes y calidad documental en CI.

## Complexity Tracking

Sin violaciones de complejidad a justificar en esta fase.
