class UI {
    constructor() {
        this.init();
    }

    init(){
        this.printCategories();
    }

    printCategories() {
        const categoryList = eventbright.getCategoryList()
            .then(categories => {
                const categoriesList = categories.categories;
                const categoriesSelect = document.getElementById('category');

                //Inserting categories of the Events
                categoriesList.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category.id;
                    option.appendChild(document.createTextNode(category.name));
                    categoriesSelect.appendChild(option);
                });
            })
            .catch(err => console.log(err));
    }
}
