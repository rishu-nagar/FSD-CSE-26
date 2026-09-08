const bookdata=[
    {image:" ",price:69},
    {image:" ",price:69},
    {image:" ",price:69},
];


const div=document.createElement('div');
div.setAttribute("class","book");
const image=document.createElement('img');
image.setAttribute("src","");
image.setAttribute("height","100px");
image.setAttribute("width","100px");
const heading=document.createElement('h2');
heading.innerText="price:465/-";
const bt=document.createElement("button");
bt.innerText="Add to cart";
div.appendChild(image );
div.appendChild(heading);
div.appendChild(bt);
const parent=document.getElementById("root");
parent.appendChild(div);
