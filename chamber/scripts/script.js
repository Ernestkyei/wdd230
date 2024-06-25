const toggle = document.querySelector('.toggle');


toggle.addEventListener("click", (e) =>{
    const  body  = document.querySelector("html")
    if(body.classList.contains('dark')){
            body.classList.remove('dark')
            e.target.innerHTML = 'Dark mode'
    }   else{
        body.classList.add('dark')
        e.target.innerHTML ='light mode'
    }

});








document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

document.getElementById('lastModified').textContent = document.lastModified;


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
        navList.classList.toggle('hide');
    });
});






