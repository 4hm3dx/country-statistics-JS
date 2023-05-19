// je demande d'abord à l'utilisateur de saisir un pays et je la stocke dans une variable

// let nomPays = prompt("Veuillez saisir le nom du pays : ").toLowerCase();

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

// afficherInfosPays(nomPays);

function afficherInfosPaysPhrase(nomPays) {

    const paysTrouve = countries.find(pays => pays.countryName.toLowerCase() === nomPays.toLowerCase());


    if (paysTrouve) {
        console.log(`La capitale de ${paysTrouve.countryName} est ${paysTrouve.capital}, sa devise est ${paysTrouve.currencyCode} et sa population est ${paysTrouve.population}`);
    } else {
        // Si le pays n'est pas trouvé, on affiche un message d'erreur
        console.log(`Aucun pays trouvé pour ${nomPays}`);
    }
}

// afficherInfosPaysPhrase(nomPays);

let nomContinent = prompt("Veuillez saisir le nom du continent : ").toLowerCase();

function afficherPaysContinent(nomContinent) {

    const continentTrouve = countries.filter(continent => continent.continentName.toLowerCase() === nomContinent.toLowerCase());

    if (continentTrouve.length > 0) {
        continentTrouve.forEach(pays => {
            console.log(pays.countryName);
        });
    } else {
        console.log(`Aucun continent trouvé pour ${nomContinent}`);
    }
}

// afficherPaysContinent(nomContinent);

function populationTotaleContinent(nomContinent) {

    const continentTrouve = countries.filter(continent => continent.continentName.toLowerCase() === nomContinent.toLowerCase());
    const populationTotale = continentTrouve.reduce((total, pays) => {
        return total + parseInt(pays.population);
    }, 0);

    if (continentTrouve.length > 0) {
        console.log(`La population totale de l'${nomContinent} est de ${populationTotale}`);
    } else {
        console.log(`Aucun continent trouvé pour ${nomContinent}`);
    }

}

populationTotaleContinent(nomContinent);

// continent le plus peuplé

function continentPlusPeuple() {
    const continents = {};

    countries.forEach(country => {
        if (continents.hasOwnProperty(country.continentName)) {
            continents[country.continentName] += parseInt(country.population);
        } else {
            continents[country.continentName] = parseInt(country.population);
        }
    });

    let continentPlusPeuple = {
        name: "",
        population: 0
    };

    for (const continent in continents) {
        if (continents[continent] > continentPlusPeuple.population) {
            continentPlusPeuple.name = continent;
            continentPlusPeuple.population = continents[continent];
        }
    }

    return continentPlusPeuple;
}

const resultat = continentPlusPeuple();
console.log(resultat);
