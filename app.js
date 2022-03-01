// Search By Using City names
// Creating the Variables of the DOM
const form = document.querySelector('.top-baner form');
const input = document.querySelector('.top-banner input');
const msg = document.querySelector('.top-banner .msg');
const list = document.querySelector('.ajax-section .cities');

// Create a variable for the API key
const apiKey = "7e33d4f81442b535387edef2a53fc2bf";

// Create the Event Listener

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let inputVal = input.value;

    // check to see if there is already a city 
    const listItems = list.querySelectorAll(".ajax-section .city");
   
    // create an array of list items
    const listItemsArray = Array.from(listItems);

    // input validation
    if(listItemsArray.length > 0){
        const filteredArray = listItemsArray.filter(el => {
            let content = "";
            if (inputVal.includes(",")){
                // e.g paris,gr ->invalid country, so we keep only the firdt part of inputVal
                
                if(inputVal.split(",")[1].lenght > 2){

                    inputVal = inputVal.split(",")[0];
                    content = el.querySelector(".city-name span").textContent.toLocaleLowerCase();

                }else{
                    content = el.querySelector(".city-name").dataset.name.toLocaleLowerCase();

                }else{
                    // athens
                    content = el.querySelector(".city-name span").textContent.toLocaleLowerCase();

                }
                    return content == inputVal.toLocaleLowerCase();
            } 
        })
    }

})