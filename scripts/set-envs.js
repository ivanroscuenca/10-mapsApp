//importamos
const { writeFileSync, mkdirSync } = require("fs");

//despues de instalar npm install dotenv --save-dev, lo cargo
require("dotenv").config();

//variable con lugar donde quiero crear el archivo
const targetPath = "./src/environments/environment.ts";

//variable con el contenido del archivo
const envFileContent = `
export const environment = {
  mapbox_key:"${process.env["MAPBOX_KEY"]}",
};
`;

//creamos carpeta
mkdirSync("./src/environments", { recursive: true });
//escribimos el lugar y el contenido
writeFileSync(targetPath, envFileContent);
