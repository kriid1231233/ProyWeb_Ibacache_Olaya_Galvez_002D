document.getElementById('btn-sismos').addEventListener('click', mostrarSismos);

async function obtenerSismos() {
    const respuesta = await fetch('https://api.gael.cloud/general/public/sismos');
    const sismos = await respuesta.json();
    return sismos;
}

async function mostrarSismos() {
    const sismos = await obtenerSismos();
    const listaSismos = document.getElementById('lista-sismos');
    listaSismos.innerHTML = '';
    
    let contador=0

    for (const sismo of sismos) {
        const item = document.createElement('li');
        item.textContent = `Sismo Registrado en: ${sismo.RefGeografica} - ${sismo.Fecha} - Magnitud: ${sismo.Magnitud} - Profundidad: ${sismo.Profundidad}`;
        listaSismos.appendChild(item);
        contador++
        if(contador>=5){
            break;
        }
    }
}