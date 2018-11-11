class EventBright {
    constructor() {
        this.auth_token = 'XMMF622M2NCHD72Z6RD7';
    }

    //Get the category list from Event Bright API
    async getCategoryList() {
        //Query the API
        const url = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);
        const categories = await url.json();
        return categories;
    }
}
