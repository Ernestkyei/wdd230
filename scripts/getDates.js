
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



const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL and key
const lat =5.6037; // Latitude for Trier, Ghana
const lon =-0.1870; // Longitude for Trier, Ghana
const apiKey = '653c9148e986f9bdc284882d03031ef2'; // Replace with your actual API key
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// Async function to fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Check data in console
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display results
function displayResults(data) {
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;

    currentTemp.textContent = `${temp.toFixed(1)}°F`;
    captionDesc.textContent = desc;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);
    weatherIcon.setAttribute('alt', desc);
}

// Call the function
apiFetch();
