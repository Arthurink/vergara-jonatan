const form = document.getElementById('studentForm');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const edad = document.getElementById('edad');
const carrera = document.getElementById('carrera');

const tbody = document.getElementById('tbody');
const badgeCount = document.getElementById('badgeCount');
const limpiarBtn = document.getElementById('limpiar');
const eliminarTodoBtn = document.getElementById('eliminarTodo');

let estudiantes = [];

function pluralize(n, singular, plural) {
  return n === 1 ? singular : plural;
}

function actualizarBadge() {
  const n = estudiantes.length;
  badgeCount.textContent = `${n} ${pluralize(n, 'estudiante', 'estudiantes')}`;
}

function filaVacia() {
  const tr = document.createElement('tr');
  tr.className = 'empty-row';
  const td = document.createElement('td');
  td.colSpan = 7;
  td.textContent = 'No hay resultados.';
  tr.appendChild(td);
  return tr;
}

function pintarTabla() {
  tbody.innerHTML = '';
  if (estudiantes.length === 0) {
    tbody.appendChild(filaVacia());
    actualizarBadge();
    return;
  }

  estudiantes.forEach((e, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${e.nombre}</td>
      <td>${e.apellido}</td>
      <td>${e.email}</td>
      <td>${e.edad}</td>
      <td>${e.carrera}</td>
      <td>
        <div class="actions">
          <button class="btn btn-danger" data-index="${i}">Eliminar</button>
        </div>
      </td>`;
    tbody.appendChild(tr);
  });
  actualizarBadge();
}

tbody?.addEventListener('click', (ev) => {
  const btn = ev.target.closest('button[data-index]');
  if (!btn) return;
  const idx = Number(btn.getAttribute('data-index'));
  estudiantes.splice(idx, 1);
  pintarTabla();
});

eliminarTodoBtn.addEventListener('click', () => {
  if (estudiantes.length === 0) return;
  estudiantes = [];
  pintarTabla();
});

limpiarBtn.addEventListener('click', () => form.reset());

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombreVal = nombre.value.trim();
  const apellidoVal = apellido.value.trim();
  const emailVal = email.value.trim();
  const edadVal = Number(edad.value);
  const carreraVal = carrera.value.trim();

  if (!nombreVal || !apellidoVal || !emailVal || !carreraVal) {
    alert('Todos los campos marcados con * son obligatorios.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    alert('Ingrese un correo válido.');
    return;
  }
  if (!Number.isFinite(edadVal) || edadVal < 18 || edadVal > 100) {
    alert('La edad debe estar entre 18 y 100.');
    return;
  }

  estudiantes.push({ nombre: nombreVal, apellido: apellidoVal, email: emailVal, edad: edadVal, carrera: carreraVal });
  form.reset();
  pintarTabla();
});

pintarTabla();
