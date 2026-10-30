const nom = process.argv[2] || "món";
const hora = new Date().getHours();

let salutacio = "Bona nit";
if (hora >= 6 && hora < 13) {
  salutacio = "Bon dia";
} else if (hora >= 13 && hora < 20) {
  salutacio = "Bona vesprada";
}

console.log(`${salutacio}, ${nom}! Pipeline executada amb Jenkins.`);
