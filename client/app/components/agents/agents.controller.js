class AgentsController {
    constructor() {
        this.name = 'agents';
        //this.search = search;
        this.isLoading = false;
       
        this.searchInput = '';
        this.results = [];

    }

    onSearch(searchInput) {
        this.search(searchInput).then(function (data) {
            this.results = data.slice(0, 9);

        }).catch(function (data) {

            console.log("error");
        });
  } 
};

export default AgentsController;
