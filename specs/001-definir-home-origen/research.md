# Research: Home de Origen (V1)

## Decision 1: Framework del sitio estático
- Decision: Usar Astro como framework base para la V1 de Home.
- Rationale: Permite enfoque static-first con bajo JS por defecto, buen soporte de markdown/mdx y estructura clara para crecer en documentación colaborativa.
- Alternatives considered:
  - Next.js static export: fuerte en ecosistema React, pero mayor complejidad inicial para un MVP centrado en contenido.
  - Sitio HTML/CSS sin framework: simple, pero menos mantenible para escalar colecciones de contenido.

## Decision 2: Modelo de contenido y taxonomía
- Decision: Definir contenido en markdown/mdx con colecciones `home`, `tutorials`, `how-to`, `reference`, `explanation`.
- Rationale: Ordena el conocimiento por intención de lectura y facilita contribuciones graduales sin bloquear la Home.
- Alternatives considered:
  - Una sola carpeta `docs/` sin taxonomía: menor fricción inicial, pero deteriora navegabilidad al crecer.
  - CMS externo: aporta edición visual, pero añade complejidad y dependencia fuera de GitHub.

## Decision 3: Flujo inicial de contribución
- Decision: CTA de contribución dirigida a guía para abrir Issues en GitHub (no edición directa por PR en fase inicial).
- Rationale: Reduce barrera para perfiles no técnicos y mejora la calidad de propuestas antes de convertirlas en cambios de markdown.
- Alternatives considered:
  - PR directo desde “Edit this page”: más rápido para contribuidores técnicos, pero menos accesible para la audiencia objetivo inicial.
  - Formulario externo: simple para usuarios, pero separa la trazabilidad del flujo principal de GitHub.

## Decision 4: Reglas de tono y framing de Home
- Decision: Aplicar guía editorial explícita “neutral no tribal” (preguntas, evidencia, razonamiento; sin etiquetas ideológicas como gancho de persuasión).
- Rationale: Maximiza apertura cognitiva de usuarios nuevos y minimiza rechazo por sesgo identitario.
- Alternatives considered:
  - Lenguaje ideológico explícito desde el hero: mayor alineación con nicho, pero menor alcance inicial.
  - Lenguaje completamente aséptico: neutralidad alta, pero riesgo de perder diferenciación del proyecto.

## Decision 5: Métricas de validación temprana
- Decision: Medir comprensión inicial, reconocimiento de secciones y entendimiento de CTA de contribución según SC-001..SC-005 del spec.
- Rationale: Son métricas accionables para iterar copy y estructura sin depender de backend.
- Alternatives considered:
  - Solo pageviews o bounce rate: insuficiente para medir comprensión real.
  - Investigación cualitativa sin métricas cuantitativas: útil, pero difícil de comparar entre iteraciones.

## Decision 6: Controles mínimos de calidad en CI
- Decision: Incluir pipeline mínimo con lint markdown, validación de enlaces y build del sitio estático.
- Rationale: Previene regresiones de contenido y mantiene confianza de colaboradores sin sobrediseñar procesos.
- Alternatives considered:
  - Sin CI en V1: menor setup inicial, mayor riesgo de degradación rápida.
  - CI muy estricto con múltiples gates complejos: desincentiva contribución temprana.

## Resolved Clarifications
- No quedan NEEDS CLARIFICATION abiertos en el contexto técnico para esta fase de planificación.
