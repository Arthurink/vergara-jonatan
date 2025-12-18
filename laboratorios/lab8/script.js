(() => {
  const App = (() => {
    // 1) HTML references
    const html = {
      form: document.querySelector('#studentForm'),
      nombre: document.querySelector('#nombre'),
      apellido: document.querySelector('#apellido'),
      email: document.querySelector('#email'),
      edad: document.querySelector('#edad'),
      carrera: document.querySelector('#carrera'),
      limpiar: document.querySelector('#limpiar'),
      eliminarTodo: document.querySelector('#eliminarTodo'),
      tbody: document.querySelector('#tbody'),
      badge: document.querySelector('#badgeCount'),
    };

    // 2) Templates
    const tpl = {
      row: (i, e) => `
        <tr>
          <td>${i + 1}</td>
          <td>${e.nombre}</td>
          <td>${e.apellido}</td>
          <td>${e.email}</td>
          <td>${e.edad}</td>
          <td>${e.carrera}</td>
          <td>
            <div class="actions">
              <button class="btn btn-danger delete" data-index="${i}">Eliminar</button>
            </div>
          </td>
        </tr>` ,
      empty: () => `<tr class="empty-row"><td colspan="7">No hay resultados.</td></tr>`,
      count: (n) => `${n} ${n === 1 ? 'estudiante' : 'estudiantes'}`,
    };

    // 3) State
    let state = {
      estudiantes: [],
    };

    // 4) Utils
    const utils = {
      isValidEmail: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      render() {
        const { estudiantes } = state;
        html.tbody.innerHTML = estudiantes.length
          ? estudiantes.map((e, i) => tpl.row(i, e)).join('')
          : tpl.empty();
        html.badge.textContent = tpl.count(estudiantes.length);
      },
      resetForm() { html.form.reset(); },
    };

    // 5) Handlers
    const handlers = {
      onFormSubmit(e) {
        e.preventDefault();
        const nombre = html.nombre.value.trim();
        const apellido = html.apellido.value.trim();
        const email = html.email.value.trim();
        const edad = Number(html.edad.value);
        const carrera = html.carrera.value.trim();

        if (!nombre || !apellido || !email || !carrera) {
          alert('Todos los campos marcados con * son obligatorios.');
          return;
        }
        if (!utils.isValidEmail(email)) {
          alert('Ingrese un correo válido.');
          return;
        }
        if (!Number.isFinite(edad) || edad < 18 || edad > 100) {
          alert('La edad debe estar entre 18 y 100.');
          return;
        }

        state.estudiantes.push({ nombre, apellido, email, edad, carrera });
        utils.resetForm();
        utils.render();
      },
      onTableClick(e) {
        const btn = e.target.closest('button.delete');
        if (!btn) return;
        const idx = Number(btn.dataset.index);
        state.estudiantes.splice(idx, 1);
        utils.render();
      },
      onClearAll() {
        if (!state.estudiantes.length) return;
        state.estudiantes = [];
        utils.render();
      },
      onClearForm() { utils.resetForm(); },
    };

    // 6) Public API
    return {
      init() {
        html.form.addEventListener('submit', handlers.onFormSubmit);
        html.tbody.addEventListener('click', handlers.onTableClick);
        html.eliminarTodo.addEventListener('click', handlers.onClearAll);
        html.limpiar.addEventListener('click', handlers.onClearForm);
        utils.render();
      }
    };
  })();

  App.init();
})();
