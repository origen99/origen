# Quickstart: Home de Origen (V1)

## 1. Preparar entorno
1. Instalar Node.js 20 LTS.
2. Crear aplicación Astro en `web/` (si no existe aún).
3. Activar TypeScript y soporte markdown/mdx.

## 2. Levantar estructura mínima
1. Crear página Home en `web/src/pages/index.astro`.
2. Crear contenido de Home en markdown (`web/src/content/home/index.md`).
3. Crear componentes de bloques: hero, principios, CTA explorar, CTA contribuir.

## 3. Implementar contrato funcional de Home
1. Asegurar presencia de secciones: identidad, propósito, principios, explorar, contribuir.
2. Verificar que la CTA de contribución apunte al flujo issue-first.
3. Revisar tono neutral no tribal en copy inicial.

## 4. Configurar contribución por Issues
1. Crear plantilla de issue de propuesta documental en `.github/ISSUE_TEMPLATE/`.
2. Incluir campos de problema, argumento y evidencia.
3. Enlazar guía de contribución desde la CTA de Home.

## 5. Activar controles de calidad mínimos
1. Configurar markdown lint.
2. Configurar verificación de enlaces.
3. Ejecutar build estática en CI para cada PR.

## 6. Validar criterios de éxito del spec
1. Probar comprensión de Home con usuarios de primera vez (SC-001).
2. Probar reconocimiento de secciones (SC-002).
3. Probar comprensión del flujo de Issue por perfiles no técnicos (SC-003).

## 7. Entregable de fase
- Home V1 publicada con mensaje claro y CTA de contribución issue-first.
- Artefactos listos para descomposición en `/speckit.tasks`.
