# Contract: Contribution Issue Workflow (V1)

## Purpose
Definir el contrato del flujo de contribución inicial basado en Issues para usuarios no técnicos.

## Entry Points
- Home contribution CTA
- Direct access to issue template URL

## Issue Proposal Schema
- `title` (required): resumen breve de la propuesta
- `problem_statement` (required): qué problema aborda
- `argument_summary` (required): razonamiento principal
- `evidence_or_sources` (required): fuentes o base argumental
- `content_type` (required enum): `new-doc | edit-doc | correction`
- `scope` (required): área afectada (`home`, `tutorials`, `how-to`, `reference`, `explanation`)

## Validation Rules
- Propuestas sin `problem_statement` o `argument_summary` no pasan triaje.
- Debe existir al menos una evidencia, ejemplo o fuente declarada.
- El lenguaje debe respetar tono no tribal y evitar ataques identitarios.

## Workflow States
1. `opened`
2. `triaged`
3. `accepted` o `rejected`
4. `converted-to-content` (si accepted)

## SLA Guidance (non-binding in V1)
- Triage inicial en <= 7 días naturales.
- Feedback de aceptación/rechazo con motivo explícito.

## Acceptance Mapping
- FR-005, FR-008, FR-010
- SC-003
