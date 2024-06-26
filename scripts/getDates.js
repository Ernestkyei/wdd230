
const toggle = document.querySelector('.toggle');
toggle.addEventListener("click", (e) =>{
    const  body  = document.querySelector("html")
    if(body.classList.contains('dark')){
            body.classList.remove('dark')
            e.target.innerHTML = 'Dark mode'
    }   else{
        body.classList.add('dark')
        e.target.innerHTML ='light mode';
    }

});


document.addEventListener("DOMContentLoaded", function() {
 
    // Get the current date
    const currentDate = new Date();
    
     const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

   
    document.getElementById("last-odificmation").textContent = `Last Modification: ${formattedDate}`;
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
});
