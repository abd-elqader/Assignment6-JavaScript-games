// https://rapidapi.com/digiwalls/api/free-to-play-games-database

// Category ["mmorpg", "shooter", "sailing", "permadeath", "superhero", "pixel"]


import { getCategoryData, getSpecificGame } from './details.module.js';
import { getCategoryData, getSpecificGame } from './details.module.js';
import { getCategoryData, getSpecificGame } from './details.module.js';


async function getCategoryData(category) {

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bf855c3447msh89773a5863603e4p121e54jsnca2e72403956',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api =await fetch(url, options);

    const response = await api.json();
    console.log(response);
}

async function getSpecificGame(id) {

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bf855c3447msh89773a5863603e4p121e54jsnca2e72403956',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api =await fetch(url, options);

    const response = await api.json();
    console.log(response);
}


getCategoryData('shooter');

getSpecificGame(453);
