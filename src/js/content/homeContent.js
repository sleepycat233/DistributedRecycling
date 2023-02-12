"use strict"

function homeContent() {

    var content = /* html */
    `
        <h1>Home!</h1>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}