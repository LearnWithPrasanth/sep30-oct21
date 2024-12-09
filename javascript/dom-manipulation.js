// let elements = document.getElementsByTagName("div");

// let div = document.createElement("div");
// div.innerHTML = `
//     <p> Paragraph </p>
//     <div> Divison </div>
// `;

// elements[0].appendChild(div);

let btn = document.getElementById("btn");

function clicked(event) {
    console.log(event);
    console.log("clicked");
}

btn.addEventListener("click", clicked);
btn.addEventListener("mouseover", () => console.log("Mouse Over Event"));
btn.addEventListener("mouseout", () => console.log("Mouse Out Event"));
