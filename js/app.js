const eventbright = new EventBright();
const ui = new UI();

//Adding event listeners
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const eventName = document.getElementById('event-name').value;
    const categoryName = document.getElementById('category').value;

    if(eventName){
        //Display the data from Event Bright API
        eventbright.getEvents(eventName, categoryName)
            .then(events => {
                const eventsList = events.events.events;
                if(eventsList.length) {
                    ui.displayEvents(eventsList);
                } else {
                    ui.printMessage('No Results Found', 'text-center alert alert-danger mt-4');
                }
            })
            .catch(err => console.log(err));
    } else {
        //Print Error Message
        ui.printMessage('Name or City field is mandatory !', 'alert alert-danger mt-4' );
    }
});
