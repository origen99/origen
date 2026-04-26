# Data Model: Home de Origen (V1)

## Entity: HomePageContent
- Description: Modelo editorial principal de la Home.
- Fields:
  - `id` (string, required): identificador estable, valor esperado `home-v1`.
  - `title` (string, required, 10-80 chars): identidad breve del proyecto.
  - `purpose_summary` (string, required, 80-300 chars): propósito claro en lenguaje no tribal.
  - `tone_profile` (enum, required): `neutral-curioso-analitico`.
  - `version` (string, required): versión de contenido.
  - `updated_at` (date-time, required): última actualización editorial.
- Validation rules:
  - No incluir etiquetas ideológicas explícitas como gancho persuasivo en `title` o `purpose_summary`.
  - Debe expresar qué es y para qué sirve Origen.

## Entity: Principle
- Description: Principio editorial mostrado en Home.
- Fields:
  - `key` (string, required): clave única (`ideas-antes-que-identidades`, etc.).
  - `label` (string, required): nombre legible del principio.
  - `description` (string, required, 40-220 chars): explicación accionable y comprensible.
  - `order` (integer, required): orden visual.
- Relationships:
  - Muchos `Principle` pertenecen a un `HomePageContent`.
- Validation rules:
  - Cada principio debe ser no contradictorio con neutralidad y autonomía de criterio.

## Entity: SectionBlock
- Description: Sección estructural de la Home.
- Fields:
  - `section_type` (enum, required): `identidad | proposito | principios | explorar | contribuir`.
  - `heading` (string, required).
  - `body` (markdown, required).
  - `cta_label` (string, optional).
  - `cta_target` (string, optional URL/path).
  - `order` (integer, required).
- Relationships:
  - Muchos `SectionBlock` pertenecen a `HomePageContent`.
- Validation rules:
  - Deben existir al menos los tipos: `identidad`, `proposito`, `principios`, `contribuir`.
  - El orden debe ser único y secuencial.

## Entity: ContributionCTA
- Description: Llamada a la acción para propuestas colaborativas.
- Fields:
  - `label` (string, required): texto del botón/enlace.
  - `target` (URL, required): guía para crear Issue.
  - `flow_mode` (enum, required): `issue-first`.
  - `audience` (enum, required): `no-tecnica | mixta`.
  - `instructions_summary` (string, required, 40-240 chars).
- Validation rules:
  - `flow_mode` debe ser `issue-first` en V1.
  - `target` no puede apuntar a edición directa de markdown.

## Entity: SuccessMetric
- Description: Métrica de validación de Home alineada con Success Criteria.
- Fields:
  - `metric_id` (string, required): `SC-001`..`SC-005`.
  - `name` (string, required).
  - `target_value` (number/string, required).
  - `measurement_method` (string, required).
  - `review_period` (enum, required): `semanal | quincenal | mensual`.
- Relationships:
  - Muchas `SuccessMetric` referencian un `HomePageContent`.

## State Transitions
- `HomePageContent.status`: `draft -> review -> published`.
- `ContributionCTA.status`: `draft -> approved -> active`.
- `IssueProposal.status` (conceptual para flujo contribución): `opened -> triaged -> accepted/rejected -> converted-to-content`.
