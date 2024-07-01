class Ui {

    constructor() {
        this.ui = document.querySelector('.ui');
        this.category = document.querySelector('.category');
    }
    
    async getCategoryData(category) {

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
}

