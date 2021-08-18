//list of items

let suggestions = [
    "html",
    "css",
    "js",
    "react",
    "react native",
    "angular",
    "vue",
    "node.js",
    "mongodb",
    "django"
]

var suggBox = document.getElementById('items');

//getting input
var itemInput = document.getElementById('item');



itemInput.onkeyup = (e) => {
    let userData = e.target.value; //user entered data
    let emptyArray = [];

    if (userData) {
        emptyArray = suggestions.filter((data) => {

            //filter array value and user char to lower case
            //return only user entered words
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = `<option value="${data}" onclick="alert(this.value)"></option>`
        });
    }
    else {

    }
    showSuggestions(emptyArray);
}


function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userInput = itemInput.value;
        listData = `<option value="${userInput}">No Item Found</option>`
    }
    else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


function gotoProduct(){
    var searchItem = document.getElementById('item')
    alert(searchItem.value);
}