let ul = document.getElementById('list');

// creating new element
let li = document.createElement('li');
// changing values of elements
li.style.color = 'red'
li.innerHTML = "John";
li.setAttribute('id', 'john');

let li1 = document.createElement('li');
li1.innerHTML = "James";
// adding events to elements
li1.addEventListener('click', function() {
    li1.style.color = 'blue';
})

let li2 = document.createElement('li');
li2.innerHTML = "Joice";
li2.addEventListener('click', function() {
    li2.style.color = 'yellow';
})

ul.appendChild(li);
ul.appendChild(li1);

ul.insertBefore(li2, document.getElementById('john'));

const setListElement = (innerHTML) => {
    let career = document.createElement('li');
    career.innerHTML = innerHTML;
    return career;
}

// AJAX calls
const fetch = () => {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.status == 200 && this.readyState == 4) {

            let careers = JSON.parse(this.responseText);

            careers.map(career => {

                ul.appendChild(setListElement(career.name));

            });

        } 

    }

    xhttp.onerror = function() {

        console.log('Errored');

    }

    xhttp.onloadstart = function() {

        console.log('Started loading...');
    }

    xhttp.onprogress = function() {

        console.log('Progress loading...');

    }

    xhttp.onloadend = function() {

        console.log('Finished loading...');

    }

    xhttp.ontimeout = function() {

        console.log('Request timout...');

    }

    // opening the connection
    xhttp.open('GET', `http://localhost:8000/api/careers`, true);
    // sending the request
    xhttp.send();

}

// add new click event on the li2 list item
li2.addEventListener('click', fetch);
