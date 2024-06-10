document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    const currentDate = new Date();
    
     const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

   
    document.getElementById("last-odificmation").textContent = `Last Modification: ${formattedDate}`;
});
