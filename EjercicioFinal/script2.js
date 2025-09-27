// Función para obtener la actividad según el día de la semana
function obtenerActividad(dia) {
    const actividades = {
        'lunes': 'atender un cliente específico',
        'martes': 'visitar una agencia fuera de la ciudad',
        'miercoles': 'llevar a mi hija al ballet',
        'jueves': 'priorizar entregas de desarrollo',
        'viernes': 'atender problemas de manera remota',
        'sabado': 'hacer lo que mi esposa quiera',
        'domingo': 'día de descanso, no hay actividades programadas'
    };
    
    return actividades[dia.toLowerCase()] || 'día no válido';
}

// Función para mostrar el recordatorio
function mostrarRecordatorio() {
    const diaSeleccionado = document.getElementById('diaSemana').value;
    const mensajeElemento = document.getElementById('mensaje');
    
    if (!diaSeleccionado) {
        mensajeElemento.textContent = 'Por favor, selecciona un día de la semana.';
        return;
    }
    
    const actividad = obtenerActividad(diaSeleccionado);
    const diaFormateado = diaSeleccionado.charAt(0).toUpperCase() + diaSeleccionado.slice(1);
    
    mensajeElemento.innerHTML = `El <span class="dia-activo">${diaFormateado}</span> debes: <strong>${actividad}</strong>.`;
}

// Evento al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Asignar evento al botón
    document.getElementById('btnRecordar').addEventListener('click', mostrarRecordatorio);
    
    // También permitir que funcione con la tecla Enter en el select
    document.getElementById('diaSemana').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            mostrarRecordatorio();
        }
    });
});