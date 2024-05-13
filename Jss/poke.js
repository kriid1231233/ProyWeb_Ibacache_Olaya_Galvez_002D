// Función para obtener información de un Pokémon específico
function getPokemonInfo(pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del Pokémon.');
        }
        return response.json();
      })
      .then(data => {
        // Mostrar la información del Pokémon en el HTML
        const pokemonInfo = document.getElementById('pokemon-info');
        pokemonInfo.innerHTML = `
          <h2>${data.name.toUpperCase()}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p>Altura: ${data.height}</p>
          <p>Peso: ${data.weight}</p>
        `;
      })
      .catch(error => {
        console.error('Error al obtener la información del Pokémon:', error);
      });
  }

  // Función para buscar el Pokémon cuando se hace clic en el botón "Buscar"
  function buscarPokemon() {
    const pokemonIdInput = document.getElementById('pokemonIdInput');
    const pokemonId = pokemonIdInput.value;

    if (pokemonId === '' || isNaN(pokemonId) || pokemonId < 1 || pokemonId > 807) {
      alert('Ingresa un ID válido entre 1 y 807.');
      return;
    }

    getPokemonInfo(pokemonId);
  }