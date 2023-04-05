//show popup when load
const popup = document.getElementById("popup");
const submit = document.getElementById("submit");
const closebtn = document.getElementById('close-btn');
const body = document.getElementsByTagName('body');


function show()    {
    popup.classList.toggle('visibility-toggle');
    
}

const togglePopup = () => popup.classList.toggle('active')
// window.addEventListener('load', () => {
    
//     popup.classList.toggle('visibility-toggle');
    
// })
window.addEventListener('load', () => {
    console.log('text')
    if(popup){
      setTimeout(togglePopup, 2500)
    }
});
// window.addEventListener('load', () => {setTimeout(show, 3000)});

closebtn.addEventListener('click', () => {
    // // togglePopup();
    popup.remove();
    // popup.classList.toggle('visibility-toggle');
})



// Sample code
// const popup = document.getElementById('popup')

// const togglePopup = () => popup.classList.toggle('active')

// window.addEventListener('load', () => {
//   console.log('text')
//   if(popup){
//     setTimeout(togglePopup, 2500)
//   }
// })

// const btn = document.querySelector('.btn')
// ;(() => {
//   if(btn){
//     btn.addEventListener('click', () => {
//       togglePopup()
//       popup.remove()
//     })
//   }
// })()
