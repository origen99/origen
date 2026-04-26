# Feature Specification: Home de Origen (V1)

**Feature Branch**: `001-definir-home-origen`  
**Created**: 2026-04-25  
**Status**: Draft  
**Input**: User description: "Definir y especificar únicamente la Home de Origen: identidad del proyecto, propósito, principios, tono neutral no tribal, secciones de contenido y CTA de contribución en markdown. Sin implementar aún chat IA ni funcionalidades avanzadas."

## Clarifications

### Session 2026-04-25

- Q: ¿Cuál será el mecanismo inicial de contribución desde la CTA de Home? → A: Opción A, la CTA abre una guía para crear Issue (propuestas sin editar contenido directamente).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Entender Qué Es Origen en la Home (Priority: P1)

Como visitante nuevo, quiero comprender en menos de un minuto qué es Origen, qué propone y qué no propone, para decidir si este espacio me aporta valor sin sentirme rechazado por etiquetas ideológicas.

**Why this priority**: Es el núcleo de valor del primer release; sin claridad inicial no existe adopción ni continuidad de lectura.

**Independent Test**: Puede probarse mostrando solo la Home a usuarios nuevos; si describen correctamente propósito, enfoque y diferencia frente a contenido polarizado, entrega valor por sí misma.

**Acceptance Scenarios**:

1. **Given** un visitante llega por primera vez a la Home, **When** lee el bloque principal y la propuesta de valor, **Then** puede explicar con sus palabras qué es Origen y para qué sirve.
2. **Given** un visitante con sensibilidad a marcos ideológicos, **When** recorre el contenido principal de la Home, **Then** no encuentra etiquetas partidistas explícitas como eje de persuasión.
3. **Given** un visitante escéptico, **When** revisa la Home, **Then** identifica que el enfoque prioriza preguntas, evidencia y razonamiento por encima de conclusiones impuestas.

---

### User Story 2 - Navegar los Bloques Esenciales de la Home (Priority: P2)

Como lector interesado, quiero ver una estructura clara de secciones en la Home (identidad, propósito, principios y cómo participar), para orientarme rápido y decidir dónde profundizar.

**Why this priority**: Una narrativa bien ordenada reduce fricción cognitiva y mejora comprensión inicial del proyecto.

**Independent Test**: Puede probarse con pruebas de lectura guiada de la Home para verificar si los usuarios localizan cada sección y su función sin asistencia.

**Acceptance Scenarios**:

1. **Given** un lector revisa la Home de arriba a abajo, **When** identifica títulos y subtítulos de sección, **Then** distingue claramente identidad, propósito, principios y llamada a contribución.
2. **Given** un lector con poco tiempo, **When** escanea los encabezados y resúmenes, **Then** comprende el mapa general del contenido sin leer todos los párrafos.

---

### User Story 3 - Entender Cómo Proponer Contribuciones (Priority: P3)

Como potencial colaborador no técnico, quiero una llamada a la acción clara para proponer aportes mediante Issues en GitHub, para saber cómo participar sin barreras técnicas innecesarias.

**Why this priority**: La colaboración abierta es un pilar del proyecto, pero puede incorporarse después de garantizar claridad del mensaje principal.

**Independent Test**: Puede probarse con usuarios no técnicos: si encuentran la CTA y describen el flujo básico de contribución en menos de 2 minutos, la historia cumple valor autónomo.

**Acceptance Scenarios**:

1. **Given** un visitante quiere aportar contenido, **When** llega a la sección de contribución, **Then** entiende los pasos básicos para abrir un Issue con su propuesta.
2. **Given** un usuario sin perfil técnico, **When** lee la CTA de contribución, **Then** percibe que el proceso es accesible y no exclusivo para desarrolladores.

---

### Edge Cases

- ¿Qué ocurre cuando un visitante interpreta el lenguaje como ambiguo o demasiado abstracto y no logra identificar el propósito práctico del proyecto?
- ¿Cómo se comunica el enfoque neutral cuando el visitante busca una postura ideológica explícita desde el primer momento?
- ¿Qué pasa si un usuario desea contribuir pero no tiene cuenta de GitHub o nunca ha editado markdown?
- ¿Cómo se evita que la Home parezca propaganda encubierta cuando se presentan principios de libertad, responsabilidad y análisis crítico?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La Home MUST presentar una definición explícita y comprensible de qué es Origen en lenguaje no tribal.
- **FR-002**: La Home MUST explicar el propósito del proyecto como desarrollo de criterio propio mediante análisis riguroso, preguntas abiertas y evaluación de evidencia.
- **FR-003**: La Home MUST incluir un bloque de principios editoriales que describa cómo se analizan ideas sin imponer conclusiones.
- **FR-004**: La Home MUST organizar su contenido en secciones claramente distinguibles para identidad, propósito, principios y contribución.
- **FR-005**: La Home MUST incluir al menos una llamada a la acción para explorar contenidos y una llamada a la acción para proponer contribuciones.
- **FR-006**: La Home MUST evitar etiquetas ideológicas explícitas como mecanismo principal de persuasión o segmentación de audiencia.
- **FR-007**: La Home MUST comunicar explícitamente que, en esta fase, el proyecto no ofrece chat de IA en producción ni funcionalidades avanzadas.
- **FR-008**: La Home MUST ofrecer una explicación breve del flujo de contribución colaborativa mediante GitHub en términos comprensibles para perfiles no técnicos.
- **FR-010**: La CTA de contribución en Home MUST dirigir a una guía para crear Issues en GitHub como mecanismo inicial de propuesta, sin requerir edición directa de markdown en esta fase.
- **FR-009**: La Home MUST mantener consistencia de tono: curioso, analítico, respetuoso y orientado a pensamiento autónomo.

### Key Entities *(include if feature involves data)*

- **Mensaje Central de Home**: Declaración de identidad y propósito de Origen, con atributos de claridad, neutralidad de tono y enfoque en criterio propio.
- **Sección de Principios**: Conjunto de principios editoriales que guía la lectura y el análisis (preguntas, evidencia, supuestos, contraste de enfoques).
- **CTA de Exploración**: Acción principal para que visitantes continúen hacia contenidos de documentación.
- **CTA de Contribución**: Acción para colaboradores que deseen proponer mejoras mediante apertura de Issues en GitHub.
- **Perfil de Usuario Inicial**: Visitante nuevo o colaborador potencial sin requerimientos técnicos avanzados.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Al menos 80% de visitantes de primera vez puede explicar correctamente qué es Origen y su propósito después de leer la Home durante menos de 60 segundos.
- **SC-002**: Al menos 75% de usuarios identifica correctamente las secciones de identidad, propósito, principios y contribución sin ayuda externa.
- **SC-003**: Al menos 70% de colaboradores potenciales sin perfil técnico declara entender el flujo básico para proponer una contribución mediante Issues tras leer la CTA.
- **SC-004**: En pruebas de lectura moderadas, menos del 15% de participantes percibe el tono de la Home como partidista o de imposición ideológica.
- **SC-005**: Al menos 60% de visitantes realiza una acción de continuación (explorar contenidos o revisar cómo contribuir) durante la sesión inicial.

## Assumptions

- El público inicial incluye personas con niveles heterogéneos de familiaridad política y técnica.
- La primera versión se limita a contenido informativo de Home y no incluye interacción conversacional con IA.
- La colaboración por GitHub se presentará con lenguaje simple, plantillas y pasos mínimos para reducir barreras de entrada, iniciando por propuestas vía Issues.
- El proyecto prioriza claridad conceptual y neutralidad del marco antes de escalar funcionalidades avanzadas.
- Las decisiones de diseño visual detallado, arquitectura final del sitio y automatizaciones de despliegue se definirán en fases posteriores.
