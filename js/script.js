"use strict";
let login = prompt('Enter your login:');

if (login == 'Admin') {
    let password = prompt('Enter your password', '');

    if (password === "I'm leader") {
        alert("Hello!");
    } else if (password === '' || password === null) {
        alert("cancel");
    } else {
        alert("I don't know who you are");
    }

} else if (login == '' || null) {
    alert('cancel');
} else {
    alert("I don't know who you are");
}

