# Laboratorio 8 — Mejora con Patrón Modular (IIFE)

> Refactor del Laboratorio 7 para que el JavaScript siga el patrón modular visto en clase (IIFE + módulo `App`). HTML y CSS se mantienen en su mayoría intactos; el foco está en la arquitectura del JS.

## Objetivos
- Reorganizar el código JS en un módulo autocontenido.
- Separar responsabilidades: referencias del DOM, plantillas, estado, utilidades y manejadores de eventos.
- Facilitar el mantenimiento y la extensibilidad del sistema.

## Patrón a seguir
El patrón utilizado se basa en el ejemplo compartido en clase: https://gist.github.com/ErickAgrazal/4dbd407164782b0cb7a1a70383362c3e

Estructura del módulo (simplificada):

```js
(() => {
	const App = (() => {
		const html = { /* querySelectors */ };
		const tpl = { /* funciones que devuelven strings HTML */ };
		let state = { /* datos en memoria */ };

		const utils = { /* helpers para render, validaciones, etc. */ };
		const handlers = { /* listeners: submit, click, etc. */ };

		return { init() { /* registrar eventos y primer render */ } };
	})();
	App.init();
})();
```

En este lab, `script.js` define `html`, `tpl`, `state`, `utils` y `handlers`, y expone un `init()` que registra los eventos y realiza el primer render.

## Qué se mantiene (respecto a Lab 7)
- Estructura y estilos del formulario y la tabla.
- Validaciones: Email válido, edad entre 18–100, campos obligatorios.
- Acciones: agregar, eliminar individual, borrar todo, limpiar formulario.

## Estructura del proyecto

```
lab8/
├── index.html   # Misma UI base que Lab 7
├── style.css    # Estilos mínimos (misma paleta/estructura)
└── script.js    # Refactor siguiendo el patrón modular (IIFE)
```

## Uso
1. Abrir `index.html` en un navegador moderno.
2. Completar el formulario y presionar “Agregar estudiante”.
3. Gestionar registros desde la tabla (eliminar fila) o “Borrar todo”.

## Entrega
- Entregar el enlace a la carpeta del laboratorio en GitHub.
- El repositorio debe llamarse `primerapellido-primernombre` (ej.: `agrazal-erick`).

Instrucciones
Objetivos:
Resolver problemas de lógica matemática utilizando Javascript.
Utilizar controles de flujo, ciclos y demás herramientas básicas del lenguaje Javascript.
Implementar interacciones con el HTML desde el 
I. Resolver
Mejorar el código usando este patrón: https://gist.github.com/ErickAgrazal/4dbd407164782b0cb7a1a70383362c3e
El CSS/HTML deberán permanecer en su mayoría igual. Pero JS debe seguir el patrón explicado en clase, que está en este gist.

Formato de entrega: Enlace a la carpeta de github. Recordar que la carpeta de github debe llamarse: `primerapellido-primernombre`, por ejemplo: `agrazal-erick`. 
