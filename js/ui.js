class UI {
    constructor() {
        this.init();
    }

    init(){
        this.printCategories();
        this.result = document.getElementById('result');
    }

    displayEvents(events) {
        let HTMLTemplate = '';

        events.forEach(eventInfo => {
            HTMLTemplate = HTMLTemplate += `
            <div class="col-md-4 mt-4">
                <div class="card">
                    <div class="card-body">
                        <img class="img-fluid mb-2" src="${eventInfo.logo !== null ? eventInfo.logo.url : ''}"> 
                    </div>
                    <div class="card-body">
                        <div class="card-text">
                                <h2 class="text-center card-title">${eventInfo.name.text}</h2>
                                <p class="lead text-info">Event Information:</p>
                                <p>${eventInfo.description.text.substring(0,200)}...</p>
                                <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>
                                <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>

                                <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        });
        this.result.innerHTML = HTMLTemplate;
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

    printMessage(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const prevResult = document.querySelector('#result div'); 

        if(prevResult) {
            this.result.innerHTML = "";
        }

        document.getElementById('search-events').appendChild(div);

        setTimeout(() => {
            this.removeMessage();
        }, 2000);
    }

    removeMessage() {
        const alert = document.querySelector('.alert');
        if(alert) {
            alert.remove();
        }
    }
}
