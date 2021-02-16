const promesasNode = require("fs").promises;

// Cuando se trabaje con archivos es mejor utilizar promesas.

promesasNode.copyFile("./archivos/original.txt", "./archivos/copia.txt")
    .then(() => console.log("copia terminada"))
    .catch((err) => console.log("no se puede copiar el archivo", err))
    .finally(() => console.log("..."))


