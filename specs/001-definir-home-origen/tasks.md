# Tasks: Home de Origen (V1)

**Input**: Design documents from `/specs/001-definir-home-origen/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No se incluyen tareas de tests formales en esta iteración porque no fueron solicitadas explícitamente en el spec. Se incluyen tareas de validación funcional y de calidad en CI.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Inicializar el proyecto web estático con Astro + TypeScript y base de tooling.

- [X] T001 Crear estructura base del proyecto web en web/ con carpetas src/pages, src/components, src/content y tests
- [X] T002 Inicializar dependencias de Astro y TypeScript en web/package.json
- [X] T003 [P] Configurar Astro base en web/astro.config.mjs
- [X] T004 [P] Configurar TypeScript base en web/tsconfig.json
- [X] T005 [P] Crear configuración de markdownlint en .markdownlint.yaml
- [X] T006 [P] Crear flujo CI inicial para docs en .github/workflows/docs-quality.yml

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establecer cimientos de contenido, validación y contribución que bloquean las historias.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T007 Definir schema de colecciones de contenido en web/src/content.config.ts
- [X] T008 [P] Crear archivo base de contenido Home en web/src/content/home/index.md
- [X] T009 [P] Crear estructura de colecciones docs/tutorials/how-to/reference/explanation en web/src/content/
- [X] T010 Implementar guía de contribución issue-first en docs/contributing.md
- [X] T011 [P] Crear plantilla de issue de propuesta documental en .github/ISSUE_TEMPLATE/documentation-proposal.yml
- [X] T012 Integrar verificación de enlaces y build en .github/workflows/docs-quality.yml

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Entender Qué Es Origen en la Home (Priority: P1) 🎯 MVP

**Goal**: Comunicar con claridad identidad, propósito y enfoque no tribal de Origen en la Home.

**Independent Test**: Un visitante nuevo debe poder explicar en <60 segundos qué es Origen y para qué sirve tras leer la Home.

### Implementation for User Story 1

- [X] T013 [P] [US1] Crear componente hero de identidad en web/src/components/HomeHero.astro
- [X] T014 [P] [US1] Crear componente de propósito y contexto en web/src/components/PurposeBlock.astro
- [X] T015 [P] [US1] Crear componente de principios editoriales en web/src/components/PrinciplesBlock.astro
- [X] T016 [US1] Redactar copy neutral no tribal para identidad y propósito en web/src/content/home/index.md
- [X] T017 [US1] Integrar secciones de identidad, propósito y principios en la Home en web/src/pages/index.astro
- [X] T018 [US1] Añadir validación editorial de tono (reglas de revisión de copy) en docs/editorial-guidelines.md
- [X] T019 [US1] Ejecutar validación manual de comprensión de US1 y registrar resultados en specs/001-definir-home-origen/checklists/us1-validation.md

**Checkpoint**: User Story 1 fully functional and independently testable (MVP)

---

## Phase 4: User Story 2 - Navegar los Bloques Esenciales de la Home (Priority: P2)

**Goal**: Garantizar estructura de navegación y jerarquía de secciones clara y escaneable.

**Independent Test**: Un lector debe identificar rápidamente secciones de identidad, propósito, principios y contribución sin ayuda.

### Implementation for User Story 2

- [X] T020 [P] [US2] Crear componente de navegación de secciones en web/src/components/HomeSectionNav.astro
- [X] T021 [P] [US2] Crear componente de bloque de exploración de contenidos en web/src/components/ExploreCTA.astro
- [X] T022 [US2] Definir orden y metadatos de secciones en web/src/content/home/index.md
- [X] T023 [US2] Integrar navegación y bloque explorar en web/src/pages/index.astro
- [X] T024 [US2] Ajustar headings y resumen escaneable por secciones en web/src/content/home/index.md
- [X] T025 [US2] Ejecutar validación manual de reconocimiento de secciones y registrar resultados en specs/001-definir-home-origen/checklists/us2-validation.md

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: User Story 3 - Entender Cómo Proponer Contribuciones (Priority: P3)

**Goal**: Hacer comprensible para perfiles no técnicos el flujo de propuesta por Issues.

**Independent Test**: Un usuario no técnico debe entender en <2 minutos cómo abrir un Issue desde la CTA de Home.

### Implementation for User Story 3

- [X] T026 [P] [US3] Crear componente de CTA de contribución issue-first en web/src/components/ContributionCTA.astro
- [X] T027 [P] [US3] Crear página/guía de contribución enlazada desde Home en web/src/pages/contribuir.astro
- [X] T028 [US3] Redactar instrucciones resumidas del flujo issue-first en docs/contributing.md
- [X] T029 [US3] Integrar CTA de contribución y enlace a guía en web/src/pages/index.astro
- [X] T030 [US3] Verificar correspondencia de campos de issue con contrato en .github/ISSUE_TEMPLATE/documentation-proposal.yml
- [X] T031 [US3] Ejecutar validación manual de comprensión del flujo de Issues y registrar resultados en specs/001-definir-home-origen/checklists/us3-validation.md

**Checkpoint**: All user stories independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Mejoras transversales y verificación final de release.

- [X] T032 [P] Unificar estilo y terminología de Home según guía editorial en web/src/content/home/index.md
- [X] T033 [P] Revisar consistencia entre contratos y documentación en specs/001-definir-home-origen/contracts/
- [X] T034 Optimizar metadatos SEO base de Home en web/src/pages/index.astro
- [X] T035 Ejecutar checklist de quickstart y registrar hallazgos en specs/001-definir-home-origen/checklists/quickstart-validation.md
- [X] T036 Ejecutar lint markdown, link check y build final para release en .github/workflows/docs-quality.yml

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Phase 6)**: Depends on all target user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Should remain independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Depends only on contribution contract and issue template, not on UI internals of US1/US2

### Within Each User Story

- Content/copy and components first
- Integración en `web/src/pages/index.astro` después
- Validación manual independiente al cierre de cada historia

### Parallel Opportunities

- Setup en paralelo: T003, T004, T005, T006
- Foundational en paralelo: T008, T009, T011
- US1 en paralelo: T013, T014, T015
- US2 en paralelo: T020, T021
- US3 en paralelo: T026, T027
- Polish en paralelo: T032, T033

---

## Parallel Example: User Story 1

```bash
# Ejecutar en paralelo al iniciar US1:
Task: "T013 [US1] Crear componente hero de identidad en web/src/components/HomeHero.astro"
Task: "T014 [US1] Crear componente de propósito y contexto en web/src/components/PurposeBlock.astro"
Task: "T015 [US1] Crear componente de principios editoriales en web/src/components/PrinciplesBlock.astro"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Confirmar SC-001 y SC-004 con validación de US1
5. Preparar demo de Home inicial

### Incremental Delivery

1. Setup + Foundational
2. Entregar US1 (MVP)
3. Añadir US2 para claridad de estructura
4. Añadir US3 para colaboración issue-first
5. Cerrar con Polish y controles de calidad

### Parallel Team Strategy

1. Equipo completo en Phase 1 y 2
2. Después de Phase 2:
   - Dev A: US1
   - Dev B: US2
   - Dev C: US3
3. Integrar y validar por historia antes de consolidar

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Cada historia mantiene criterio de prueba independiente
- Evitar mezclar tareas de múltiples historias en el mismo commit cuando sea posible
