export default class GotService {
    constructor(){
        this._apiBase = "https://www.anapioficeandfire.com/api"

    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };

    getCharacters = async () => {
        const res = await this.getResource("/characters?page=5&pageSize=10");
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`); 
        return this._transformCharacter(character);
    }
    
    getBooks = async () => {
        const res = await this.getResource(`/books`);
        return res.map(this._transformHouse);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`); 
        return this._transformBook(book);
    }

    getHouses = async () => {
        const res = await this.getResource(`/houses`); 
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`); 
        return this._transformHouse(house);
        }
    

    _transformCharacter = (char) => {
        for (let key in char) {
            if (!char[key]) {
                char[key] = 'no data:('
            };
        }
        return {
            id: char.url.match(/\/([0-9]*)$/)[1],
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse = (house) => {
        for (let key in house) {
            if (!house[key]) {
                house[key] = 'no data:('
            };
        }
        return {
            id: house.url.match(/\/([0-9]*)$/)[1],
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook = (book) => {
        for (let key in book) {
            if (!book[key]) {
                book[key] = 'no data:('
            };
        }
        return {
            id: book.url.match(/\/([0-9]*)$/)[1],
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}