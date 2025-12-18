# Laboratorio 7 — Registro de Estudiantes

> Implementación básica de un CRUD en memoria para estudiantes (HTML/CSS/JS). Se incluye validación de campos, estados vacíos y acciones de borrado individual y masivo.

## Objetivos
- Practicar lógica con JavaScript (condicionales, ciclos y manejo de arrays).
- Manipular el DOM para leer inputs, renderizar listas/tablas y manejar eventos.
- Aplicar validaciones mínimas de formularios.

## Requisitos funcionales
- Registrar estudiantes. Al guardar, el formulario se limpia automáticamente.
- Eliminar estudiantes de forma individual.
- Eliminar todos los estudiantes.
- Limpiar el formulario sin registrar.
- Mostrar estado vacío cuando no hay registros.

## Validaciones
- Email con formato válido.
- Edad en el rango 18–100.
- Campos requeridos deben existir.
- Las validaciones pueden mostrarse con alerts del navegador.

## Tecnologías
- HTML, CSS y JavaScript (sin frameworks)
- Fuente: Montserrat (Google Fonts)

## Estructura del proyecto

```
lab7/
├── index.html       # Maquetado y contenedores
├── style.css        # Estilos (tema oscuro, tarjetas, botones, tabla)
└── script.js        # Lógica: agregar, eliminar, borrar todo, validar, renderizar
```

## Uso
1. Abrir `index.html` en un navegador moderno.
2. Completar el formulario y presionar “Agregar estudiante”.
3. Usar “Eliminar” para borrar una fila o “Borrar todo” para vaciar la tabla.

## Detalles de la UI
- Tema oscuro con tarjetas y tabla simple.
- Badge de conteo de estudiantes en el encabezado.
- Tabla con encabezados: Nº, Nombre, Apellido, Email, Edad, Carrera, Acciones.
- Estado vacío: “No hay resultados.”

## Notas
- El almacenamiento es en memoria (se pierde al recargar).
- El código intenta ser claro y modular dentro de lo posible para esta fase.

## Autoría y entrega
- Entregar el enlace a la carpeta del laboratorio en GitHub.
- La carpeta del repositorio debe seguir la convención `primerapellido-primernombre` (ej.: `agrazal-erick`).

