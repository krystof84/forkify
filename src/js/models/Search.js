import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    /* jshint ignore:start */
    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '792e78cb37163e2731384eeda33b0ab8';
    
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch(error) {
            alert(error);
        }
    }
    /* jshint ignore:end */
}
