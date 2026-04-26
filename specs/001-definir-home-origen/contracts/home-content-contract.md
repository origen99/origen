# Contract: Home Content Interface (V1)

## Purpose
Definir el contrato funcional de la Home para asegurar consistencia de mensaje, estructura y CTAs según el spec.

## Route Contract
- Public route: `/`
- Visibility: pública, sin autenticación
- Response type: página estática HTML pre-renderizada

## Required Sections Contract
1. Identidad
2. Propósito
3. Principios editoriales
4. CTA explorar contenidos
5. CTA contribuir (issue-first)

### Rules
- La Home MUST incluir las 5 secciones requeridas.
- El tono MUST mantenerse neutral, analítico y no tribal.
- No usar etiquetas ideológicas explícitas como mecanismo principal de persuasión.

## CTA Contract
### Explore CTA
- `label`: texto orientado a explorar documentación
- `target`: ruta interna de contenidos
- `action`: navegación interna

### Contribution CTA
- `label`: texto orientado a proponer aportes
- `target`: guía para crear Issue en GitHub
- `action`: navegación externa/interna hacia instrucciones de Issue
- `mode`: `issue-first`

## Acceptance Mapping
- FR-001, FR-002, FR-003, FR-004, FR-005, FR-006, FR-009, FR-010
- SC-001, SC-002, SC-004, SC-005
