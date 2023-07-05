const axios = require('axios');
const fs = require('fs');

async function fetchData(page = 1) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = response.data;

    // Recorrer la lista de personajes y formatear los datos
    const characters = data.results.map(character => {
      const formattedCharacter = {};

      // Eliminar las comillas alrededor de todos los campos
      Object.entries(character).forEach(([key, value]) => {
        formattedCharacter[key] = typeof value === 'string' ? value.replace(/^"(.*)"$/, '$1') : value;
      });

      return formattedCharacter;
    });

    // Convertir los datos a formato JSON
    const jsonData = JSON.stringify(characters, null, 3);

    // Reemplazar las comillas en todos los campos
    const formattedData = jsonData.replace(/"([^"]+)":/g, '$1:');

    // Formatear los datos con el prefijo "module.exports = " y guardar en el archivo data.js
    const exportData = `module.exports = ${formattedData};\n`;
    fs.writeFileSync('data2.js', exportData, { flag: 'a' });

    // Verificar si hay más páginas y continuar extrayendo datos
    if (data.info.next) {
      const nextPage = page + 1;
      await fetchData(nextPage);
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
  }
}

// Limpiar el archivo data.js antes de comenzar a escribir
fs.writeFileSync('data2.js', '');

// Iniciar el proceso de extracción de datos
fetchData();
