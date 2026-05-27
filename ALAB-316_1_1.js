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

topMenuEL.style.backgroundColor = " var(--top-menu-bg) "

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


// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// loop through each object in the menu links array
let topMenuLinks = topMenuEL.querySelectorAll('a');


// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu");

// Set the height subMenuEl element to be "100%".
//subMenuEl.style.height = "100%";
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Now, change the position of the submenu to temporarily hide it. 
subMenuEl.style.height = "-100%";
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
// Set the CSS top property of subMenuEl to the value of 0.

