// je demande d'abord à l'utilisateur de saisir un pays et je la stocke dans une variable

let nomPays = prompt("Veuillez saisir le nom du pays : ").toLowerCase();

function afficherInfosPays(nomPays) {

    const paysTrouve = countries.find(pays => pays.countryName.toLowerCase() === nomPays.toLowerCase());


    if (paysTrouve) {
        console.log(`Nom du pays : ${paysTrouve.countryName}`);
        console.log(`Capitale : ${paysTrouve.capital}`);
        console.log(`Continent : ${paysTrouve.continentName}`);
        console.log(`Population : ${paysTrouve.population}`);
    } else {
        // Si le pays n'est pas trouvé, on affiche un message d'erreur
        console.log(`Aucun pays trouvé pour ${nomPays}`);
    }
}

afficherInfosPays(nomPays);