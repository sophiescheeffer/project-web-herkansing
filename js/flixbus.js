/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */
/*eslint-env browser*/
/*eslint 'no-console':0*/




var dropdown = document.querySelector(".dropbtn");


function showDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    
    if (dropdownContent.style.display == "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
    
    
}

dropdown.addEventListener('click', showDropdown);