//show popup when load
const popup = document.getElementById("popup");
const submit = document.getElementById("submit");
const closebtn = document.getElementById('close-btn');
const body = document.getElementsByTagName('body');


function show()    {
    popup.classList.toggle('visibility-toggle');
    alert('Hello');
}


// window.addEventListener('load', () => {
    
//     popup.classList.toggle('visibility-toggle');
    
// })
window.addEventListener('load', show);
// window.addEventListener('load', setTimeout(show, 3000));

closebtn.addEventListener('click', () => {
    // popup.classList.remove('visibility-toggle');
    // popup.classList.toggle('invisibility-toggle');
    // popup.classList.toggle('visibility-toggle');
    alert('Good bye');
})




