// Get references to the input, button, and list elements
const chapterInput = document.getElementById('chapterInput');
const addButton = document.getElementById('addButton');
const chapterList = document.getElementById('chapterList');

// Function to add a new chapter to the list
function addChapter() {
    const chapter = chapterInput.value.trim();
    if (chapter !== '') {
        const li = document.createElement('li');
        li.textContent = chapter;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        // deleteButton.onclick = function() {
        //     chapterList.removeChild(li);
        // };


     deleteButton.addEventListener('click', () =>{
                chapterList.remove();
     })

        li.appendChild(deleteButton);
        chapterList.appendChild(li);

        chapterInput.value = '';
        chapterInput.focus();
    }
}

// Add event listener to the button
addButton.addEventListener('click', addChapter);

// Optional: Add event listener to input to handle Enter key press
chapterInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addChapter();
    }
});
