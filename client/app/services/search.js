//import cuid from 'cuid';
//import 'core-js/modules/es6.array.find';


export default class Search {   

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.urlBase = "https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=";
        //this.filteredList = this.list = [];
    }

    search(searchInput) {
        var url = urlBase + searchInput;
        return this.$http.get(Url);
    }
};

Search.$inject = ['$http','$q'];

    