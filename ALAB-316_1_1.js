//import "./styles.css"; 
// Part 1: Getting Started 

// 1.
let mainEl = document.querySelector("main") ;

// 2.
mainEl.style.backgroundColor = "var(--main-bg)";

// 3. 

mainEl.innerHTML = `<h1> DOM Manipulation </h1>`

// 4. 

mainEl.classList.add("flex-ctr");





// //////////////////////////////////////////////
// Part 2: Creating Menu Bar 

// 1. 

let topMenuEL = document.getElementById("top-menu");

// 2. 

topMenuEL.style.height = "100%";

// 3.

topMenuEL.style.backgroundColor = " var( --top-menu-bg) "

// 4.

topMenuEL.classList.add("flex-around");





//////////////////////////////////////////////////////////

// Part 3: Adding Menu Buttons
// Menu data structure
let menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];
//Iterate over the entire menuLinks array and for each "link" object:
for (const mL of menuLinks){
    //Create an <a> tag element.
    const aEl = document.createElement("a");

    //On the new element, add an href attribute with
    // its value set to the href property of the "link" object.
    aEl.setAttribute("href", mL.href);

    //Set the new element's content to the value of
    //the text property of the "link" object.
    aEl.textContent = mL.text;

    //Append the new element to the topMenuEl element.
    topMenuEL.appendChild(aEl);
}



