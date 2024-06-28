// Declare the chaptersArray and assign it to the results of getChapterList function or an empty array if it's missing
let chaptersArray = getChapterList() || [];

// Function to get the chapter list from localStorage
function getChapterList() {
    const chapters = localStorage.getItem('chapters');
    return chapters ? JSON.parse(chapters) : [];
}

// Function to set the chapter list in localStorage
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

// Function to display a chapter in the list
function displayList(item) {
    const ul = document.querySelector('#chapterList');
    const li = document.createElement('li');
    li.textContent = item;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => deleteChapter(item));

    li.appendChild(deleteButton);
    ul.appendChild(li);
}

// Function to delete a chapter from the list and localStorage
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
    displayChapterList();
}

// Function to re-display the list after deletion
function displayChapterList() {
    const ul = document.querySelector('#chapterList');
    ul.innerHTML = ""; // Clear existing list
    chaptersArray.forEach(chapter => displayList(chapter));
}

// Populate the list of chapters on page load
chaptersArray.forEach(chapter => displayList(chapter));

// Button click event listener
document.querySelector('#addChapterButton').addEventListener('click', () => {
    const input = document.querySelector('#chapterInput');
    const chapter = input.value.trim();

    if (chapter !== "") {
        displayList(chapter);
        chaptersArray.push(chapter);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

// Set the last modified date
document.getElementById('last-modified').textContent = document.lastModified;
